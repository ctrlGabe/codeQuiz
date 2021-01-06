var questions = [
  {
    question: "What is the function that can be used to check if the number is an integer or not?",
    answers: [
      "Integer(value)",
      "ifInteger(value)",
      "isInteger(value)",
      "ifinteger(value)",
    ],
    correct: "isInteger(value)",
  },
  {
    question: "Which of the following is an advantage of using JavaScript?",
    answers: [
      "Increased interactivity.",
      "Less server interaction.",
      "Immediate feedback from the users.",
      "All of the above.",
    ],
    correct: "All of the above.",
  },
  {
    question: "Which function of an Array object calls a function for each element in the array?",
    answers: ["forEach()", "every()", "forEvery()", "each()"],
    correct: "forEach()",
  },
  {
    question: "JavaScript is a ________ Side Scripting Language.",
    answers: ["Server", "ISP", "Browser", "None of the above"],
    correct: "Browser",
  },
  {
    question: "Which was the first browser to support JavaScript?",
    answers: [
      "Mozilla Firefox",
      "Netscape",
      "Google Chrome",
      "Internet Explorer",
    ],
    correct: "Netscape",
  },
];

var startButton = document.getElementById("start");
var preQuiz = document.getElementById("preQuiz");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var quizContainer = document.getElementById("quiz");
var questionCount = 0;
var score = 0;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Start game works");
  startButton.classList.add("hide");
  preQuiz.classList.add("hide");
  quizContainer.classList.remove("hide");
  startTimer();
  startQuiz();
}

function startTimer() {}

function startQuiz() {
  console.log("start quiz works");
  questionCount = 0;
  showQuestion(questions[questionCount]);
}

function showQuestion(question) {
  // console.log("show question works");
  questionEl.innerText = question.question;
  document.getElementById("btn-1").textContent = questions[questionCount].answers[0];
  document.getElementById("btn-2").textContent = questions[questionCount].answers[1];
  document.getElementById("btn-3").textContent = questions[questionCount].answers[2];
  document.getElementById("btn-4").textContent = questions[questionCount].answers[3];
}

document.getElementById("btn-1").addEventListener("click", pickAnswer);
document.getElementById("btn-2").addEventListener("click", pickAnswer);
document.getElementById("btn-3").addEventListener("click", pickAnswer);
document.getElementById("btn-4").addEventListener("click", pickAnswer);

function pickAnswer() {
  console.log( "chosen answer", this.textContent)
  if ( this.textcontent === questions[questionCount].correct) {
    score++
    console.log(questions[questionCount])
  } else {
    // "time minus ten seconds"
    console.log(questions[questionCount])
  }
  questionCount++;
  if (questions.length >= questionCount + 1) {
    showQuestion(questions[questionCount]);
  } else stopQuiz();
}

function stopQuiz() {
  window.location.href = "highscores.html";
}