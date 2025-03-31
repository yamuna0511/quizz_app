const questions = [
    {
        question: "Which is the largest animal in the world?",
        options: ["Shark", "Blue whale", "Elephant", "Giraffe"],
        answer: "Blue whale"
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which language is used for web development?",
        options: ["Python", "Java", "JavaScript", "C++"],
        answer: "JavaScript"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "Who developed the theory of relativity?",
        options: ["Isaac Newton", "Nikola Tesla", "Albert Einstein", "Galileo Galilei"],
        answer: "Albert Einstein"
    },
    {
        question: "What is the chemical symbol for water?",
        options: ["O2", "H2O", "CO2", "N2"],
        answer: "H2O"
    },
    {
        question: "Which is the tallest mountain in the world?",
        options: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        answer: "Mount Everest"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Platinum"],
        answer: "Diamond"
    },
    {
        question: "Which is the fastest land animal?",
        options: ["Cheetah", "Lion", "Horse", "Leopard"],
        answer: "Cheetah"
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Mark Twain"],
        answer: "William Shakespeare"
    }
];


let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsContainer = document.getElementById("answer-button");
    const nextButton = document.querySelector(".next-btn");

    // Reset previous options
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";

    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`;

    // Create buttons for options
    currentQuestion.options.forEach(option => {
        const button = document.createElement("button");
        button.classList.add("btn");
        button.textContent = option;
        button.onclick = () => selectAnswer(button, option);
        optionsContainer.appendChild(button);
    });
}

function selectAnswer(button, selectedOption) {
    const correctAnswer = questions[currentQuestionIndex].answer;
    const buttons = document.querySelectorAll(".btn");

    // Disable all buttons after selection
    buttons.forEach(btn => btn.disabled = true);

    if (selectedOption === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");
    }

    // Show the "Next" button
    document.querySelector(".next-btn").style.display = "block";
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    document.querySelector(".quiz").innerHTML = `<h2>Your Score: ${score}/${questions.length}</h2>`;
}

// Load the first question on page load
document.addEventListener("DOMContentLoaded", loadQuestion);
