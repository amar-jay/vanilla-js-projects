const quizData = [{
        question: "Where is Turkey located",
        a: "Europe",
        b: "Asia",
        c: "Eurasia",
        d: "North America",
        correct: "c",
    },
    {
        question: "Who is the President of Turkey?",
        a: "Amar jay",
        b: "Abdel-manan A.R.",
        c: "Ivan Saldano",
        d: "Recep Tayyip Erdogan",
        correct: "b",
    },
    {
        question: "Standard Means of Exams was first applied in?",
        a: "1960",
        b: "1970",
        c: "1980",
        d: "1990",
        correct: "b",
    },
    {
        question: "Which if these cities is one of Turkey's premier tourist resorts?",
        a: "Anatalya",
        b: "Zonguldak",
        c: "Amasra",
        d: "none of the ",
        correct: "b",
    },
    {
        question: "Which part of turkey is in Europe?",
        a: "East Turkey",
        b: "Anatalya",
        c: "Eastern Thrace",
        d: "none of the above",
        correct: "1",
    },
    {
        question: "how many borders does Turkey have?",
        a: "5",
        b: "6",
        c: "7",
        d: "none of the above",
        correct: "d",
    },
    {
        question: "What is the highest mountain in Turkey?",
        a: "Mount Arafa",
        b: "Mount Arat",
        c: "Mount Turkey",
        d: "Ararat Peak",
        correct: "d",
    },
    {
        question: "What is the Largest Lake in Turkey?",
        a: "Lake Adana",
        b: "Lake Van",
        c: "Lake Izmir",
        d: "Lake Vanspor",
        correct: "a",
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()" class="reload">Reload</button>
            `;
        }
    }
});