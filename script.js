var questions = [
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

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Boom baby");
}

function nextQuestion() {}

function pickAnswer() {}
