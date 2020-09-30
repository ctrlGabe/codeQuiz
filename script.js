var questions = [
  {
    question: "Who created Javascript?",
    answers: ["Arnold Schwarzenegger", "Brendan Eich", "Bill Gates", "Al Gore"],
    correct: "Brendan Eich",
  },
  {
    question: "Inside which HTML element do we write Javascript?",
    answers: ["<body>", "<scripting>", "<script>", "<javascript>"],
    correct: "<script>",
  },
  {
    question: "How do you create a function in Javascript?",
    answers: [
      "function = myFunction()",
      "myFunction() = function",
      "function:myFunction()",
      "function myFunction()",
    ],
    correct: "function myFunction()",
  },
  {
    question: "Which symbol is used to wrap an array?",
    answers: ["[]", "()", "{}", "//"],
    correct: "[]",
  },
  {
    question: "How do you declare a Javascript variable?",
    answers: [
      "variable = myName;",
      " v myName;",
      "var myName;",
      "variable myName;",
    ],
    correct: "var myName;",
  },
];

var startButton = document.getElementById("start");

var preQuiz = document.getElementById("preQuiz");

var questionEl = document.getElementById("question");

var answerEl = document.getElementById("answer");

var quizContainer = document.getElementById("quiz");

var questionCount = 0;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Start game works");
  startButton.classList.add("hide");
  preQuiz.classList.add("hide");
  quizContainer.classList.remove("hide");
  // startTimer()
  startQuiz();
}

function startQuiz() {
  console.log("start quiz works");
  questionCount = 0;
  showQuestion(questions[questionCount]);
}

questions[questionCount].answers.textContent

function showQuestion(question) {
  console.log("show question works");
  reset();
  questionEl.textContent = question.question;

  for (let i = 0; i < question.answers.length; i++) {
    var help = question.answers[i];
    var button = document.createElement("button");
    button.innerText = help.innerText;
    button.classList.add("btn");
    answerEl.appendChild(button);
  }

  // question.answers.forEach(function () {
  //   var button = document.createElement("button");
  //   button.innerText = question.answers;
  //   console.log(question.answers);
  //   button.classList.add("btn");
  //   // if (answer.correct) {
  //   //   button.dataset.correct = answer.correct;
  //   // }
  //   button.addEventListener("click", pickAnswer);
  //   answerEl.appendChild(button);
  // });
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  document.getElementById("btn-1").textContent =
    questions[questionCount].answers[0];
  document.getElementById("btn-2").textContent =
    questions[questionCount].answers[1];
  document.getElementById("btn-3").textContent =
    questions[questionCount].answers[2];
  document.getElementById("btn-4").textContent =
    questions[questionCount].answers[3];
}
document.getElementById("btn-1").addEventListener("click", pickAnswer);
document.getElementById("btn-2").addEventListener("click", pickAnswer);
document.getElementById("btn-3").addEventListener("click", pickAnswer);
document.getElementById("btn-4").addEventListener("click", pickAnswer);

function reset() {
  while (answerEl.firstChild) {
    answerEl.removeChild(answerEl.firstChild);
  }
}

function pickAnswer() {
  questionCount++;
  showQuestion(questions[questionCount]);
}

// justin
