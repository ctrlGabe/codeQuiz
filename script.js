var questionChoices = [
  {
    question: "What is javascript?",
    choices: ["hippo", "12", "code", "purple"],
    correctAnswer: 2,
  },
  {
    question: "What is html?",
    choices: ["hippo", "12", "code", "purple"],
    correctAnswer: 2,
  },
  {
    question: "What is css?",
    choices: ["hippo", "12", "code", "purple"],
    correctAnswer: 2,
  },
  {
    question: "What is jquery?",
    choices: ["hippo", "12", "code", "purple"],
    correctAnswer: 2,
  },
];

var startButton = document.getElementById("start");

var preQuiz = document.getElementById("preQuiz");

var questionEl = document.getElementById("question");

var answerEl = document.getElementById("answer");

startButton.addEventListener("click", startGame);

quizContainer = document.getElementById("quiz");

function startGame() {
  console.log("Boom baby");
  startButton.classList.add("hide");
  preQuiz.classList.add("hide");
  quizContainer.classList.remove("hide");
  questionCount = 0;
  nextQuestion();
}

function nextQuestion() {
  showQuestion(questionCount);
}
function showQuestion(question) {
  questionEl.textContent = questionChoices.question;
}

function pickAnswer() {
  questionCount++;
}
