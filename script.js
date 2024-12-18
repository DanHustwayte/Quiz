const quizData = [
    {
        question: "How do you usually find out about an assignment deadline?",
        a: "My planner reminds me in advance.",
        b: "I see it in an email... usually at the last minute.",
        c: "Someone else tells me (hopefully).",
        d: "Wait, there was an assignment due?",
        correct: "a"
    },
    {
        question: "When you have a big task to complete, you...",
        a: "Break it into smaller steps and schedule time for each.",
        b: "Think about it, then procrastinate a little.",
        c: "Panic two hours before the deadline.",
        d: "Forget until someone asks, 'Have you done it yet?'",
        correct: "a"
    },
    {
        question: "How do you keep track of your tasks?",
        a: "I use a to-do list or app religiously.",
        b: "Sticky notes or scraps of paper (if I can find them).",
        c: "It’s all in my head—until I forget.",
        d: "I don’t. I just hope for the best.",
        correct: "a"
    },
    {
        question: "How do you name your digital files?",
        a: "“MathAssignment_Term1_Final.docx” (very clear and consistent).",
        b: "“MathStuff.docx” (close enough).",
        c: "“Untitled(23).docx” (I think this is it?).",
        d: "I save everything to the desktop and hope I remember.",
        correct: "a"
    },
    {
        question: "Your favourite time to start working on an assignment is...",
        a: "As soon as I get it—I like to get ahead.",
        b: "A couple of days before the deadline—I need a little pressure.",
        c: "The night before, fuelled by adrenaline and snacks.",
        d: "After the deadline, begging for an extension.",
        correct: "a"
    }
];

const quiz = document.getElementById('quiz');
const submitBtn = document.getElementById('submit');
const results = document.getElementById('results');

let currentQuiz = 0;
let score = 0;

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    quiz.innerHTML = `
        <div class="quiz-question">${currentQuizData.question}</div>
        <label>
            <input type="radio" name="answer" value="a">
            ${currentQuizData.a}
        </label>
        <label>
            <input type="radio" name="answer" value="b">
            ${currentQuizData.b}
        </label>
        <label>
            <input type="radio" name="answer" value="c">
            ${currentQuizData.c}
        </label>
        <label>
            <input type="radio" name="answer" value="d">
            ${currentQuizData.d}
        </label>
    `;
}

function getSelected() {
    const answers = document.querySelectorAll('input[name="answer"]');
    let selectedAnswer;
    answers.forEach(answer => {
        if (answer.checked) {
            selectedAnswer = answer.value;
        }
    });
    return selectedAnswer;
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score += 3;
        } else if (answer === 'b') {
            score += 2;
        } else if (answer === 'c') {
            score += 1;
        }
        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            results.innerHTML = `
                <h2>Your Score: ${score}</h2>
                <p>${getResultMessage(score)}</p>
            `;
            quiz.innerHTML = '';
            submitBtn.style.display = 'none';
        }
    }
});

function getResultMessage(score) {
    if (score >= 12) {
        return "Organizational Superstar! 🌟";
    } else if (score >= 8) {
        return "You’re on the right track—keep building those habits! ✅";
    } else if (score >= 4) {
        return "Chaotic Neutral—there’s room for improvement. 🚧";
    } else {
        return "Organizational Emergency! Time to get some tools in place. 🚨";
    }
}

loadQuiz();