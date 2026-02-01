const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");
const timerEl = document.getElementById("examTimer");

let mode = "practice"; // practice | exam
let questions = [];
let userAnswers = {}; // { qi: Set(ai) }
let examStartedAt = null;
let timerHandle = null;

// --------- utils ----------
function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}
function isMC(questionText) {
  return questionText.includes("(MC)");
}
function nowISO() {
  return new Date().toISOString();
}
function pad2(n) {
  return String(n).padStart(2, "0");
}
function formatMMSS(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${pad2(m)}:${pad2(s)}`;
}
function getCorrectSet(q) {
  return new Set(q.a.map((a, i) => (a.c ? i : null)).filter(v => v !== null));
}
function setsEqual(a, b) {
  if (a.size !== b.size) return false;
  for (const x of a) if (!b.has(x)) return false;
  return true;
}
function clearTimer() {
  if (timerHandle) clearInterval(timerHandle);
  timerHandle = null;
  timerEl.hidden = true;
}
function startTimer() {
  examStartedAt = Date.now();
  timerEl.hidden = false;
  timerEl.textContent = "⏱ 00:00";
  timerHandle = setInterval(() => {
    const sec = Math.floor((Date.now() - examStartedAt) / 1000);
    timerEl.textContent = "⏱ " + formatMMSS(sec);
  }, 250);
}

// --------- modes ----------
function startPractice() {
  clearTimer();
  mode = "practice";
  questions = shuffle(database);
  userAnswers = {};
  renderQuiz();
}

function startExam() {
  clearTimer();
  mode = "exam";

  // IHK-szerű: véletlen 30 kérdés (később lehet súlyozni kategóriánként)
  questions = shuffle(database).slice(0, 30);
  userAnswers = {};
  renderQuiz();
  startTimer();
}

// --------- render ----------
function renderQuiz() {
  quizDiv.innerHTML = "";
  resultDiv.innerHTML = "";

  // Exam header actions
  if (mode === "exam") {
    const examBar = document.createElement("div");
    examBar.className = "exambar";
    examBar.innerHTML = `
      <div class="exambar-left">
        <span class="badge">IHK Prüfungsmodus</span>
        <span class="muted">30 Fragen • Keine Sofort-Lösung</span>
      </div>
      <div class="exambar-right">
        <button class="ghost" onclick="confirmAbortExam()">Abbrechen</button>
        <button class="primary" onclick="finishExam()">Auswerten</button>
      </div>
    `;
    quizDiv.appendChild(examBar);
  }

  questions.forEach((q, qi) => {
    const card = document.createElement("div");
    card.className = "qcard";

    const mc = isMC(q.q);
    const typeLabel = mc ? "MC" : "SC";

    card.innerHTML = `
      <div class="qhead">
        <div class="qmeta">
          <span class="qnum">${qi + 1}</span>
          <span class="pill">${q.cat}</span>
          <span class="pill soft">${typeLabel}</span>
        </div>
        <div class="qtext">${escapeHtml(q.q)}</div>
      </div>
      <div class="answers" id="answers-${qi}"></div>
      <div class="explain" id="explain-${qi}" hidden></div>
    `;

    const answersDiv = card.querySelector(`#answers-${qi}`);

    q.a.forEach((ans, ai) => {
      const inputType = mc ? "checkbox" : "radio";
      const id = `q${qi}_a${ai}`;

      const row = document.createElement("label");
      row.className = "ansrow";
      row.htmlFor = id;

      row.innerHTML = `
        <input id="${id}" type="${inputType}" name="q${qi}" />
        <span class="anstext">${escapeHtml(ans.t)}</span>
      `;

      const input = row.querySelector("input");
      input.addEventListener("change", () => handleAnswer(qi, ai, mc, q, card));

      answersDiv.appendChild(row);
    });

    quizDiv.appendChild(card);
  });

  // bottom controls (practice)
  if (mode === "practice") {
    const bar = document.createElement("div");
    bar.className = "bottombar";
    bar.innerHTML = `
      <button class="ghost" onclick="startPractice()">Neu mischen</button>
      <button class="primary" onclick="startExam()">Zur Prüfung (IHK)</button>
      <button onclick="showStats()">Statistik</button>
    `;
    quizDiv.appendChild(bar);
  }
}

function handleAnswer(qi, ai, mc, q, card) {
  if (!userAnswers[qi]) userAnswers[qi] = new Set();

  if (mc) {
    userAnswers[qi].has(ai) ? userAnswers[qi].delete(ai) : userAnswers[qi].add(ai);
  } else {
    userAnswers[qi] = new Set([ai]);
  }

  // Practice: azonnali feedback + magyarázat hibánál
  if (mode === "practice") {
    const correctSet = getCorrectSet(q);
    const isCorrect = setsEqual(correctSet, userAnswers[qi]);

    card.classList.toggle("ok", isCorrect);
    card.classList.toggle("bad", !isCorrect);

    const exp = card.querySelector(`#explain-${qi}`);
    if (!isCorrect) {
      exp.hidden = false;
      exp.textContent = "❌ " + (q.e || "Keine Erklärung vorhanden.");
    } else {
      exp.hidden = true;
    }
  }
}

// --------- exam evaluation ----------
function confirmAbortExam() {
  if (confirm("Prüfung wirklich abbrechen?")) {
    clearTimer();
    startPractice();
  }
}

async function finishExam() {
  // Examben nincs azonnali feedback → itt számolunk
  clearTimer();

  let score = 0;
  const perCat = {}; // {cat: {ok, total}}

  const wrongList = [];

  questions.forEach((q, qi) => {
    const correctSet = getCorrectSet(q);
    const userSet = userAnswers[qi] || new Set();
    const ok = setsEqual(correctSet, userSet);

    if (ok) score++;
    else wrongList.push({ qi, q });

    if (!perCat[q.cat]) perCat[q.cat] = { ok: 0, total: 0 };
    perCat[q.cat].total++;
    if (ok) perCat[q.cat].ok++;
  });

  const total = questions.length;
  const percent = Math.round((score / total) * 100);

  const durationSec = examStartedAt ? Math.floor((Date.now() - examStartedAt) / 1000) : 0;

  // Mentés: ha login → Firestore, ha nem → local
  const attempt = {
    mode: "exam",
    score,
    total,
    percent,
    durationSec,
    categoryBreakdown: perCat,
    ts: Date.now(),
    tsISO: nowISO()
  };

  const savedCloud = await safeSaveAttempt(attempt);

  renderExamResult(score, total, percent, durationSec, perCat, wrongList, savedCloud);
}

function renderExamResult(score, total, percent, durationSec, perCat, wrongList, savedCloud) {
  const cats = Object.keys(perCat).sort((a, b) => a.localeCompare(b));

  const catRows = cats.map(cat => {
    const c = perCat[cat];
    const p = Math.round((c.ok / c.total) * 100);
    return `
      <div class="row">
        <div class="row-left"><span class="pill">${escapeHtml(cat)}</span></div>
        <div class="row-mid">${c.ok}/${c.total}</div>
        <div class="row-right">${p}%</div>
      </div>
    `;
  }).join("");

  const wrongHtml = wrongList.length
    ? `
      <details class="wrongbox">
        <summary>Falsche Fragen anzeigen (${wrongList.length})</summary>
        ${wrongList.map(({ qi, q }) => `
          <div class="wrongitem">
            <div class="wrongq"><b>${qi + 1}. (${escapeHtml(q.cat)})</b> ${escapeHtml(q.q)}</div>
            <div class="wrongexp">${q.e ? "💡 " + escapeHtml(q.e) : ""}</div>
          </div>
        `).join("")}
      </details>
    `
    : `<div class="okbox">✅ Perfekt! Keine Fehler.</div>`;

  resultDiv.innerHTML = `
    <div class="resultcard">
      <h2>Ergebnis</h2>

      <div class="bigscore">${score}/${total} <span class="muted">(${percent}%)</span></div>
      <div class="muted">Dauer: ${formatMMSS(durationSec)} • Speicherung: ${savedCloud ? "Cloud ✅" : "Lokal ✅"}</div>

      <div class="section">
        <h3>Kategorien</h3>
        <div class="catlist">
          <div class="row head">
            <div class="row-left">Kategorie</div>
            <div class="row-mid">Punkte</div>
            <div class="row-right">%</div>
          </div>
          ${catRows}
        </div>
      </div>

      <div class="section">
        <h3>Analyse</h3>
        ${wrongHtml}
      </div>

      <div class="result-actions">
        <button class="primary" onclick="startExam()">Neue Prüfung</button>
        <button onclick="startPractice()">Üben</button>
        <button class="ghost" onclick="showStats()">Statistik</button>
      </div>
    </div>
  `;

  // görgetés eredményre
  resultDiv.scrollIntoView({ behavior: "smooth", block: "start" });
}

// --------- stats (local + cloud) ----------
function getLocalStats() {
  return JSON.parse(localStorage.getItem("stats_v2") || "[]");
}
function setLocalStats(arr) {
  localStorage.setItem("stats_v2", JSON.stringify(arr));
}
function addLocalAttempt(attempt) {
  const stats = getLocalStats();
  stats.push(attempt);
  setLocalStats(stats);
}

async function safeSaveAttempt(attempt) {
  try {
    if (window.auth?.currentUser && window.saveAttemptToCloud) {
      await window.saveAttemptToCloud(attempt);
      return true;
    }
  } catch (e) {
    console.warn("Cloud save failed:", e);
  }
  addLocalAttempt(attempt);
  return false;
}

async function showStats() {
  clearTimer();
  quizDiv.innerHTML = "";
  resultDiv.innerHTML = `<div class="loading">⏳ Statistik wird geladen…</div>`;

  const local = getLocalStats();
  let cloud = [];
  try {
    if (window.auth?.currentUser && window.loadAttemptsFromCloud) {
      cloud = await window.loadAttemptsFromCloud(100);
    }
  } catch (e) {
    console.warn("Cloud load failed:", e);
  }

  // összeolvasztás (egyszerűen egymás alá)
  const all = [...local, ...cloud].sort((a, b) => (b.ts || 0) - (a.ts || 0));
  const exams = all.filter(x => x.mode === "exam");

  if (!exams.length) {
    resultDiv.innerHTML = `
      <div class="resultcard">
        <h2>Statistik</h2>
        <p>Noch keine Prüfungen gespeichert.</p>
        <div class="result-actions">
          <button class="primary" onclick="startExam()">Prüfung starten</button>
          <button onclick="startPractice()">Üben</button>
        </div>
      </div>
    `;
    return;
  }

  const percents = exams.map(x => x.percent || 0);
  const best = Math.max(...percents);
  const avg = Math.round(percents.reduce((a, b) => a + b, 0) / percents.length);

  const last10 = exams.slice(0, 10).map(a => `
    <div class="row">
      <div class="row-left">${new Date(a.ts).toLocaleString()}</div>
      <div class="row-mid">${a.score}/${a.total}</div>
      <div class="row-right">${a.percent}%</div>
    </div>
  `).join("");

  resultDiv.innerHTML = `
    <div class="resultcard">
      <h2>Statistik</h2>

      <div class="kpis">
        <div class="kpi"><div class="kpi-n">${exams.length}</div><div class="kpi-l">Versuche</div></div>
        <div class="kpi"><div class="kpi-n">${avg}%</div><div class="kpi-l">Ø</div></div>
        <div class="kpi"><div class="kpi-n">${best}%</div><div class="kpi-l">Best</div></div>
      </div>

      <div class="section">
        <h3>Letzte 10</h3>
        <div class="catlist">
          <div class="row head">
            <div class="row-left">Datum</div>
            <div class="row-mid">Punkte</div>
            <div class="row-right">%</div>
          </div>
          ${last10}
        </div>
      </div>

      <div class="result-actions">
        <button class="primary" onclick="startExam()">Prüfung starten</button>
        <button onclick="startPractice()">Üben</button>
      </div>
    </div>
  `;
}

// --------- extra: local->cloud sync + wipe ----------
window.syncLocalToCloud = async function () {
  const user = window.auth?.currentUser;
  if (!user) return alert("Bitte zuerst einloggen.");

  const local = getLocalStats();
  if (!local.length) return alert("Keine lokalen Daten vorhanden.");

  let ok = 0;
  for (const attempt of local) {
    try {
      await window.saveAttemptToCloud(attempt);
      ok++;
    } catch (e) {
      console.warn(e);
    }
  }
  alert(`✅ ${ok}/${local.length} lokale Versuche in die Cloud kopiert.`);
};

window.wipeLocalStats = function () {
  if (!confirm("Lokale Statistik wirklich löschen?")) return;
  localStorage.removeItem("stats_v2");
  alert("✅ Lokale Statistik gelöscht.");
};

// --------- UI: auth panel toggle ----------
(function initAuthPanel() {
  const panel = document.getElementById("authPanel");
  const toggle = document.getElementById("toggleAuthBtn");
  const close = document.getElementById("closeAuthBtn");

  function openPanel() { panel.hidden = false; panel.classList.add("open"); }
  function closePanel() { panel.classList.remove("open"); setTimeout(() => panel.hidden = true, 150); }

  toggle?.addEventListener("click", () => panel.hidden ? openPanel() : closePanel());
  close?.addEventListener("click", closePanel);

  // klik a háttérre zárja
  panel?.addEventListener("click", (e) => {
    if (e.target === panel) closePanel();
  });
})();

// --------- HTML escape (biztonság) ----------
function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

/* =========================================================
   🔴 iOS SAFARI FIX – szükséges (onclick miatt)
   ========================================================= */
window.startPractice = startPractice;
window.startExam = startExam;
window.showStats = showStats;
window.finishExam = finishExam;
window.confirmAbortExam = confirmAbortExam;
