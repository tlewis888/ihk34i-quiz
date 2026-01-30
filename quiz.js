const quizDiv = document.getElementById("quiz");
const resultDiv = document.getElementById("result");

let mode = "practice";
let questions = [];
let userAnswers = {};

function shuffle(arr) {
    return [...arr].sort(() => Math.random() - 0.5);
}

function isMC(questionText) {
    return questionText.includes("(MC)");
}

function startPractice() {
    mode = "practice";
    questions = shuffle(database);
    userAnswers = {};
    renderQuiz();
}

function startExam() {
    mode = "exam";
    questions = shuffle(database).slice(0, 30);
    userAnswers = {};
    renderQuiz();
}

function renderQuiz() {
    quizDiv.innerHTML = "";
    resultDiv.innerHTML = "";

    questions.forEach((q, qi) => {
        const div = document.createElement("div");
        div.className = "question";

        const mc = isMC(q.q);
        div.innerHTML = `<p><b>${qi + 1}. (${q.cat}) ${q.q}</b></p>`;

        q.a.forEach((ans, ai) => {
            const inputType = mc ? "checkbox" : "radio";

            const input = document.createElement("input");
            input.type = inputType;
            input.name = "q" + qi;
            input.onchange = () => handleAnswer(qi, ai, mc, q, div);

            const label = document.createElement("label");
            label.appendChild(input);
            label.append(" " + ans.t);

            div.appendChild(label);
            div.appendChild(document.createElement("br"));
        });

        quizDiv.appendChild(div);
    });

    if (mode === "exam") {
        const btn = document.createElement("button");
        btn.textContent = "Test auswerten";
        btn.onclick = finishExam;
        quizDiv.appendChild(btn);
    }
}

function handleAnswer(qi, ai, mc, q, div) {
    if (!userAnswers[qi]) userAnswers[qi] = new Set();

    if (mc) {
        userAnswers[qi].has(ai)
            ? userAnswers[qi].delete(ai)
            : userAnswers[qi].add(ai);
    } else {
        userAnswers[qi] = new Set([ai]);
    }

    if (mode === "practice") {
        const correctSet = new Set(
            q.a.map((a, i) => a.c ? i : null).filter(i => i !== null)
        );

        const isCorrect =
            correctSet.size === userAnswers[qi].size &&
            [...correctSet].every(i => userAnswers[qi].has(i));

        div.style.background = isCorrect ? "#d4f8d4" : "#ffd6d6";

        const explain = div.querySelector(".explain");
        if (!explain && !isCorrect) {
            const p = document.createElement("p");
            p.className = "explain";
            p.innerText = "❌ " + q.e;
            div.appendChild(p);
        }
    }
}

function finishExam() {
    let score = 0;

    questions.forEach((q, qi) => {
        const correctSet = new Set(
            q.a.map((a, i) => a.c ? i : null).filter(i => i !== null)
        );
        const userSet = userAnswers[qi] || new Set();

        const ok =
            correctSet.size === userSet.size &&
            [...correctSet].every(i => userSet.has(i));

        if (ok) score++;
    });

    const percent = Math.round(score / questions.length * 100);
    saveStats(percent);

    resultDiv.innerHTML = `
        <h2>Ergebnis</h2>
        <p>${score}/${questions.length} (${percent}%)</p>
    `;
}

function saveStats(percent) {
    const stats = JSON.parse(localStorage.getItem("stats")) || [];
    stats.push(percent);
    localStorage.setItem("stats", JSON.stringify(stats));
}
