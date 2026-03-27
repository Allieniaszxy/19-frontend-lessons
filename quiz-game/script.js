const startScreen = document.querySelector("#start-quiz");
const quizScreen = document.querySelector("#quiz-container");
const resultScreen = document.querySelector("#result-container");
const startBtn = document.querySelector("#start-btn");
const questionsText = document.querySelector(".questions");
const answersContainer = document.querySelector("#quiz-answers");
const progressBar = document.querySelector(".progress");
const currentQuestionCount = document.querySelector("#question-count");
const totalQuestionsCount = document.querySelector("#total-questions");
const scoreSpan = document.querySelector("#score");
const finalScore = document.querySelector("#final-score");
const totalScoreAttainable = document.querySelector("#total-score-attainable");
const resultMessage = document.querySelector(".result-message");
const restartBtn = document.querySelector("#restart-btn");

const quizQuestions = [
  {
    id: 1,
    question: "What is the capital of Nigeria?",
    options: [
      { id: "A", text: "Lagos" },
      { id: "B", text: "Abuja" },
      { id: "C", text: "Kano" },
      { id: "D", text: "Ibadan" },
    ],
    correctAnswer: "B",
  },
  {
    id: 2,
    question: "Which language is primarily used for React?",
    options: [
      { id: "A", text: "Python" },
      { id: "B", text: "Java" },
      { id: "C", text: "JavaScript" },
      { id: "D", text: "C#" },
    ],
    correctAnswer: "C",
  },
  {
    id: 3,
    question: "What does HTTP stand for?",
    options: [
      { id: "A", text: "HyperText Transfer Protocol" },
      { id: "B", text: "HighText Transfer Protocol" },
      { id: "C", text: "HyperText Transmission Process" },
      { id: "D", text: "Hyper Transfer Text Protocol" },
    ],
    correctAnswer: "A",
  },
  {
    id: 4,
    question: "Which company developed Android?",
    options: [
      { id: "A", text: "Apple" },
      { id: "B", text: "Google" },
      { id: "C", text: "Microsoft" },
      { id: "D", text: "Samsung" },
    ],
    correctAnswer: "B",
  },
  {
    id: 5,
    question: "Which data structure uses FIFO?",
    options: [
      { id: "A", text: "Stack" },
      { id: "B", text: "Queue" },
      { id: "C", text: "Tree" },
      { id: "D", text: "Graph" },
    ],
    correctAnswer: "B",
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionsCount.textContent = quizQuestions.length;
totalScoreAttainable.textContent = quizQuestions.length;

startBtn.addEventListener("click", startQuiz);
restartBtn.addEventListener("click", restartQuiz);

function startQuiz() {
  currentCurrentIndex = 0;
  score = 0;
  scoreSpan.textContent = score;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionCount.textContent = currentQuestionIndex + 1;

  const progressPercent =
    ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";
  questionsText.textContent = currentQuestion.question;

  answersContainer.innerHTML = "";

  currentQuestion.options.forEach((option) => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.classList.add("answer-btn");
    button.dataset.correct = option.id === currentQuestion.correctAnswer;

    button.addEventListener("click", selectedAnswer);

    answersContainer.appendChild(button);
  });
}

function selectedAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });
  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    if (currentQuestionIndex < quizQuestions.length) {
      answersDisabled = false;
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScore.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius.";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  answersDisabled = false;

  resultScreen.classList.remove("active");
  startScreen.classList.add("active");
}
