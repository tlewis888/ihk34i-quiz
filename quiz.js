/* =========================================================
   Quiz Trainer – Pro IHK Version (Practice + Exam)
   - Exam: IHK logic (no instant feedback, all-or-nothing MC)
   - Features: navigation, flags, progress, timer, autosave exam,
               end review, category practice, stats
   ========================================================= */

const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

// --- CONFIG ---
const EXAM_QUESTION_COUNT = 30;
const EXAM_PASS_PERCENT = 50;

// optional time limit (minutes). 0 = no limit
const EXAM_TIME_LIMIT_MIN = 0; // pl. 45 ha akarsz időlimitet

// autosave key for an ongoing exam attempt
const LS_EXAM_STATE = "ihk34i_exam_state_v1";
const LS_STATS = "stats_v1";

// --- STATE ---
let mode = "practice"; // "practice" | "exam"
let questions = [];    // actual question objects
let userAnswers = {};  // { [qi]: Set(answerIndex) }
let flagged = new Set(); // question indices flagged

// navigation
let currentIndex = 0;

// timer
let examStartedAt = null;
let timerInterval = null;

// category filtering (practice)
let currentCategory = null;

// ---------------- Utils ----------------
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

function isMC(questionText) {
  return questionText.includes("(MC)");
}

// safe set helper
function getSet(qi) {
  if (!userAnswers[qi]) userAnswers[qi] = new Set();
  return userAnswers[qi];
}

function setToArray(set) {
  return [...set];
}

function arrayToSet(arr) {
  return new Set(arr || []);
}

function formatTime(ms) {
  const totalSec = Math.max(0, Math.floor(ms / 1000));
  const m = Math.floor(totalSec / 60);
  const s = totalSec % 60;
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

function now() {
  return Date.now();
}

function computeCorrectSet(q) {
  return new Set(
    q.a.map((a, i) => (a.c ? i : null)).filter((i) => i !== null)
  );
}

// IHK scoring logic for one question
function isAnswerCorrect(q, userSet) {
  const correctSet = computeCorrectSet(q);

  // all-or-nothing: sizes must match and every correct must be chosen
  if (correctSet.size !== userSet.size) return false;
  for (const i of correctSet) {
    if (!userSet.has(i)) return false;
  }
  return true;
}

// answered count
function getAnsweredCount() {
  return Object.keys(userAnswers).filter((k) => userAnswers[k] && userAnswers[k].size > 0).length;
}

// ---------------- Rendering ----------------
function renderShell() {
  quizDiv.innerHTML = "";
  resultDiv.innerHTML = "";

  const header = document.createElement("div");
  header.className = "topbar";

  // left: mode + category
  const left = document.createElement("div");
  left.className = "topbar-left";

  const modeLabel = document.createElement("div");
  modeLabel.className = "mode-label";
  modeLabel.innerHTML = mode === "exam"
    ? `<b>Prüfungsmodus</b> • ${EXAM_QUESTION_COUNT} Fragen • Bestehen ab <b>${EXAM_PASS_PERCENT}%</b>`
    : `<b>Übungsmodus</b>` + (currentCategory ? ` • Kategorie: <b>${currentCategory}</b>` : "");

  left.appendChild(modeLabel);

  // right: timer + progress
  const right = document.createElement("div");
  right.className = "topbar-right";

  const progress = document.createElement("div");
  progress.id = "progress";
  progress.className = "progress";

  const timer = document.createElement("div");
  timer.id = "timer";
  timer.className = "timer";

  right.appendChild(progress);
  right.appendChild(timer);

  header.appendChild(left);
  header.appendChild(right);

  quizDiv.appendChild(header);

  const body = document.createElement("div");
  body.id = "quizBody";
  quizDiv.appendChild(body);

  const nav = document.createElement("div");
  nav.id = "navBar";
  nav.className = "nav";

  quizDiv.appendChild(nav);

  updateTopBar();
}

function updateTopBar() {
  const progressEl = document.getElementById("progress");
  const timerEl = document.getElementById("timer");

  if (progressEl) {
    const answered = getAnsweredCount();
    const flaggedCount = flagged.size;
    progressEl.innerHTML = `
      <span>Frage: <b>${currentIndex + 1}</b>/${questions.length}</span>
      <span style="margin-left:12px;">Beantwortet: <b>${answered}</b>/${questions.length}</span>
      <span style="margin-left:12px;">Markiert: <b>${flaggedCount}</b></span>
    `;
  }

  if (timerEl) {
    if (mode !== "exam" || !examStartedAt) {
      timerEl.textContent = "";
      return;
    }
    const elapsed = now() - examStartedAt;
    const remainMs = EXAM_TIME_LIMIT_MIN > 0
      ? EXAM_TIME_LIMIT_MIN * 60 * 1000 - elapsed
      : null;

    if (EXAM_TIME_LIMIT_MIN > 0) {
      timerEl.innerHTML = `⏱ ${formatTime(elapsed)} • Rest: <b>${formatTime(remainMs)}</b>`;
    } else {
      timerEl.innerHTML = `⏱ ${formatTime(elapsed)}`;
    }
  }
}

function renderCurrentQuestion() {
  const body = document.getElementById("quizBody");
  const nav = document.getElementById("navBar");
  if (!body || !nav) return;

  body.innerHTML = "";
  nav.innerHTML = "";

  const q = questions[currentIndex];
  const mc = isMC(q.q);
  const userSet = getSet(currentIndex);

  // question card
  const card = document.createElement("div");
  card.className = "question";

  // title row
  const titleRow = document.createElement("div");
  titleRow.className = "q-title";

  const title = document.createElement("p");
  title.innerHTML = `<b>${currentIndex + 1}. (${q.cat}) ${q.q}</b>`;
  titleRow.appendChild(title);

  // flag button
  const flagBtn = document.createElement("button");
  flagBtn.className = "flag-btn";
  const isFlagged = flagged.has(currentIndex);
  flagBtn.textContent = isFlagged ? "🚩 Markiert" : "🏳️ Markieren";
  flagBtn.onclick = () => {
    if (flagged.has(currentIndex)) flagged.delete(currentIndex);
    else flagged.add(currentIndex);
    saveExamState(); // for exam mode
    renderCurrentQuestion();
    updateTopBar();
  };
  titleRow.appendChild(flagBtn);

  card.appendChild(titleRow);

  // answers
  q.a.forEach((ans, ai) => {
    const inputType = mc ? "checkbox" : "radio";

    const input = document.createElement("input");
    input.type = inputType;
    input.name = "q" + currentIndex;
    input.value = ai;
    input.checked = userSet.has(ai);

    input.addEventListener("change", () => handleAnswer(currentIndex, ai, mc));

    const label = document.createElement("label");
    label.className = "answer";
    label.appendChild(input);
    label.append(" " + ans.t);

    card.appendChild(label);
  });

  // practice feedback area
  const feedback = document.createElement("div");
  feedback.className = "feedback";
  card.appendChild(feedback);

  body.appendChild(card);

  // in practice mode: show immediate feedback if answered
  if (mode === "practice") {
    renderPracticeFeedback(card, q, currentIndex);
  }

  // nav buttons
  const prevBtn = document.createElement("button");
  prevBtn.textContent = "← Vorherige";
  prevBtn.disabled = currentIndex === 0;
  prevBtn.onclick = () => {
    currentIndex = Math.max(0, currentIndex - 1);
    renderCurrentQuestion();
    updateTopBar();
  };

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Nächste →";
  nextBtn.disabled = currentIndex === questions.length - 1;
  nextBtn.onclick = () => {
    currentIndex = Math.min(questions.length - 1, currentIndex + 1);
    renderCurrentQuestion();
    updateTopBar();
  };

  const jumpWrap = document.createElement("div");
  jumpWrap.className = "jump";

  const jumpLabel = document.createElement("span");
  jumpLabel.textContent = "Sprung:";
  jumpLabel.style.marginRight = "8px";

  const jumpSel = document.createElement("select");
  for (let i = 0; i < questions.length; i++) {
    const opt = document.createElement("option");
    opt.value = i;
    const a = getSet(i);
    const done = a && a.size > 0 ? "✓" : "•";
    const fl = flagged.has(i) ? "🚩" : "";
    opt.textContent = `${i + 1} ${done} ${fl}`;
    if (i === currentIndex) opt.selected = true;
    jumpSel.appendChild(opt);
  }
  jumpSel.onchange = (e) => {
    currentIndex = parseInt(e.target.value, 10);
    renderCurrentQuestion();
    updateTopBar();
  };

  jumpWrap.appendChild(jumpLabel);
  jumpWrap.appendChild(jumpSel);

  nav.appendChild(prevBtn);
  nav.appendChild(jumpWrap);
  nav.appendChild(nextBtn);

  // exam actions
  if (mode === "exam") {
    const actionWrap = document.createElement("div");
    actionWrap.className = "exam-actions";

    const finishBtn = document.createElement("button");
    finishBtn.textContent = "Prüfung auswerten";
    finishBtn.onclick = finishExam;

    const saveBtn = document.createElement("button");
    saveBtn.textContent = "Zwischenspeichern";
    saveBtn.onclick = () => {
      saveExamState(true);
      toast("✅ Gespeichert.");
    };

    const resetBtn = document.createElement("button");
    resetBtn.textContent = "Prüfung abbrechen";
    resetBtn.onclick = () => {
      if (!confirm("Prüfung wirklich abbrechen? (Fortschritt geht verloren)")) return;
      clearExamState();
      stopTimer();
      mode = "practice";
      questions = [];
      userAnswers = {};
      flagged = new Set();
      currentIndex = 0;
      quizDiv.innerHTML = "";
      resultDiv.innerHTML = "";
      toast("Prüfung abgebrochen.");
    };

    actionWrap.appendChild(finishBtn);
    actionWrap.appendChild(saveBtn);
    actionWrap.appendChild(resetBtn);

    quizDiv.appendChild(actionWrap);
  }

  // keep topbar updated
  updateTopBar();
}

// Practice feedback: show correct/wrong + explanation
function renderPracticeFeedback(card, q, qi) {
  const feedback = card.querySelector(".feedback");
  if (!feedback) return;

  const userSet = getSet(qi);
  if (!userSet || userSet.size === 0) {
    feedback.innerHTML = "";
    card.style.background = "";
    return;
  }

  const ok = isAnswerCorrect(q, userSet);
  card.style.background = ok ? "#d4f8d4" : "#ffd6d6";

  if (ok) {
    feedback.innerHTML = `<p>✅ Richtig</p>`;
  } else {
    const expl = q.e ? q.e : "Keine Erklärung hinterlegt.";
    feedback.innerHTML = `<p>❌ Falsch</p><p class="explain">${expl}</p>`;
  }
}

// simple toast
function toast(msg) {
  // minimal (no css needed)
  console.log(msg);
}

// ---------------- Answer handling ----------------
function handleAnswer(qi, ai, mc) {
  const set = getSet(qi);

  if (mc) {
    set.has(ai) ? set.delete(ai) : set.add(ai);
  } else {
    userAnswers[qi] = new Set([ai]);
  }

  // exam: autosave
  if (mode === "exam") saveExamState();

  renderCurrentQuestion();
}

// ---------------- Exam Timer ----------------
function startTimer() {
  stopTimer();
  examStartedAt = now();
  timerInterval = setInterval(() => {
    updateTopBar();

    if (mode === "exam" && EXAM_TIME_LIMIT_MIN > 0) {
      const elapsed = now() - examStartedAt;
      const remain = EXAM_TIME_LIMIT_MIN * 60 * 1000 - elapsed;
      if (remain <= 0) {
        stopTimer();
        finishExam(true); // forced
      }
    }
  }, 500);
}

function stopTimer() {
  if (timerInterval) clearInterval(timerInterval);
  timerInterval = null;
}

// ---------------- Exam Autosave ----------------
function saveExamState(showConsole = false) {
  if (mode !== "exam") return;

  const payload = {
    v: 1,
    savedAt: now(),
    examStartedAt,
    currentIndex,
    questions, // store full questions for stable restore
    userAnswers: Object.fromEntries(
      Object.entries(userAnswers).map(([k, v]) => [k, setToArray(v)])
    ),
    flagged: [...flagged],
  };

  localStorage.setItem(LS_EXAM_STATE, JSON.stringify(payload));
  if (showConsole) console.log("Saved exam state:", payload);
}

function loadExamState() {
  const raw = localStorage.getItem(LS_EXAM_STATE);
  if (!raw) return null;

  try {
    const data = JSON.parse(raw);
    if (!data || data.v !== 1) return null;
    return data;
  } catch {
    return null;
  }
}

function clearExamState() {
  localStorage.removeItem(LS_EXAM_STATE);
}

// ---------------- Start Modes ----------------
function startPractice(category = null) {
  mode = "practice";
  currentCategory = category;

  const base = Array.isArray(database) ? database : [];
  const filtered = category ? base.filter((q) => q.cat === category) : base;

  questions = shuffle(filtered);
  userAnswers = {};
  flagged = new Set();
  currentIndex = 0;

  stopTimer();
  examStartedAt = null;
  clearExamState();

  renderShell();
  renderCurrentQuestion();
}

function startExam() {
  mode = "exam";
  currentCategory = null;

  // try restore
  const saved = loadExamState();
  if (saved && saved.questions && saved.questions.length) {
    const doRestore = confirm("Találtam egy félbehagyott Prüfungsmodus-t. Folytassuk?");
    if (doRestore) {
      questions = saved.questions;
      userAnswers = Object.fromEntries(
        Object.entries(saved.userAnswers || {}).map(([k, arr]) => [k, arrayToSet(arr)])
      );
      flagged = new Set(saved.flagged || []);
      currentIndex = Math.min(saved.currentIndex || 0, questions.length - 1);
      examStartedAt = saved.examStartedAt || now();
      renderShell();
      renderCurrentQuestion();
      startTimer(); // continues ticking, based on new start (simple)
      return;
    } else {
      clearExamState();
    }
  }

  // new exam
  questions = shuffle(database).slice(0, EXAM_QUESTION_COUNT);
  userAnswers = {};
  flagged = new Set();
  currentIndex = 0;

  renderShell();
  renderCurrentQuestion();
  startTimer();
  saveExamState();
}

// ---------------- Exam Finish + Review ----------------
function finishExam(forcedByTime = false) {
  if (mode !== "exam") return;

  stopTimer();

  let score = 0;
  const wrong = []; // [{qi, q, correctSet, userSet}]

  questions.forEach((q, qi) => {
    const userSet = userAnswers[qi] || new Set();
    const ok = isAnswerCorrect(q, userSet);
    if (ok) score++;
    else {
      wrong.push({
        qi,
        q,
        correctSet: computeCorrectSet(q),
        userSet,
      });
    }
  });

  const total = questions.length || 1;
  const percent = Math.round((score / total) * 100);
  const passed = percent >= EXAM_PASS_PERCENT;

  saveStats(percent);
  clearExamState(); // exam done

  const elapsed = examStartedAt ? now() - examStartedAt : 0;

  resultDiv.innerHTML = `
    <h2>Prüfungsergebnis</h2>
    ${forcedByTime ? `<p>⏰ <b>Zeit abgelaufen</b> — automatisch ausgewertet.</p>` : ""}
    <p><b>${score}</b> / ${total} (${percent}%)</p>
    <p>Zeit: <b>${formatTime(elapsed)}</b></p>
    <p>Status: <b style="color:${passed ? "green" : "red"}">${passed ? "BESTANDEN" : "NICHT BESTANDEN"}</b></p>
    <hr/>
    <h3>Review</h3>
    <p>Falsch: <b>${wrong.length}</b> • Markiert: <b>${flagged.size}</b></p>
    <div id="reviewList"></div>
  `;

  // review list (clickable jump)
  const list = document.getElementById("reviewList");
  if (list) {
    if (wrong.length === 0) {
      list.innerHTML = `<p>✅ Alles korrekt.</p>`;
    } else {
      const ul = document.createElement("ul");
      wrong.slice(0, 50).forEach((w) => {
        const li = document.createElement("li");

        const btn = document.createElement("button");
        btn.textContent = `Zu Frage ${w.qi + 1} springen`;
        btn.onclick = () => {
          // switch to "review mode" inside exam UI
          mode = "exam";
          currentIndex = w.qi;
          renderShell();
          renderCurrentQuestion();

          // show solution AFTER exam (IHK-like: only after)
          showSolutionBox(w.qi);
          resultDiv.scrollIntoView({ behavior: "smooth" });
        };

        li.innerHTML = `<b>${w.qi + 1}.</b> (${w.q.cat}) ${w.q.q}`;
        li.appendChild(document.createElement("br"));
        li.appendChild(btn);

        ul.appendChild(li);
      });
      list.appendChild(ul);
    }
  }

  resultDiv.scrollIntoView({ behavior: "smooth" });
}

function showSolutionBox(qi) {
  const body = document.getElementById("quizBody");
  if (!body) return;

  const q = questions[qi];
  const correctSet = computeCorrectSet(q);

  const box = document.createElement("div");
  box.className = "solution";
  box.style.marginTop = "12px";
  box.style.padding = "10px";
  box.style.border = "1px solid #ddd";
  box.style.borderRadius = "10px";
  box.style.background = "#f7f7f7";

  const correctTexts = q.a
    .map((a, i) => (correctSet.has(i) ? `✅ ${a.t}` : null))
    .filter(Boolean)
    .join("<br/>");

  box.innerHTML = `
    <p><b>Lösung (nach der Prüfung):</b></p>
    <p>${correctTexts}</p>
    ${q.e ? `<p style="opacity:.85"><b>Erklärung:</b> ${q.e}</p>` : ""}
  `;

  body.appendChild(box);
}

// ---------------- Stats ----------------
function saveStats(percent) {
  const stats = JSON.parse(localStorage.getItem(LS_STATS)) || [];
  stats.push({ percent, at: now() });
  localStorage.setItem(LS_STATS, JSON.stringify(stats));
}

function showStats() {
  const stats = JSON.parse(localStorage.getItem(LS_STATS)) || [];
  if (!stats.length) {
    resultDiv.innerHTML = `<h2>Statistik</h2><p>Noch keine Prüfungen.</p>`;
    return;
  }

  const percents = stats.map((s) => s.percent);
  const avg = Math.round(percents.reduce((a, b) => a + b, 0) / percents.length);
  const best = Math.max(...percents);
  const last = percents[percents.length - 1];

  resultDiv.innerHTML = `
    <h2>Statistik</h2>
    <p>Versuche: <b>${stats.length}</b></p>
    <p>Letztes Ergebnis: <b>${last}%</b></p>
    <p>Durchschnitt: <b>${avg}%</b></p>
    <p>Bestes Ergebnis: <b>${best}%</b></p>
    <button id="clearStatsBtn">Statistik löschen</button>
  `;

  const btn = document.getElementById("clearStatsBtn");
  if (btn) {
    btn.onclick = () => {
      if (!confirm("Statistik wirklich löschen?")) return;
      localStorage.removeItem(LS_STATS);
      showStats();
    };
  }
}

// ---------------- iOS Safari FIX ----------------
window.startPractice = startPractice;
window.startExam = startExam;
window.showStats = showStats;
