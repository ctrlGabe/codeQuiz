var questions = [
  {
    question: "What is the function that can be used to check if the number is an integer or not?",
    answers: [
      { a: "Integer(value)", correct: false },
      { a: "ifInteger(value)", correct: false },
      { a: "isInteger(value)", correct: true },
      { a: "ifinteger(value)", correct: false }
    ]
  },
  {
    question: "Which of the following is an advantage of using JavaScript?",
    answers: [
      { a: "Increased interactivity.", correct: false },
      { a: "Less server interaction.", correct: false },
      { a: "Immediate feedback from the users.", correct: false },
      { a: "All of the above.", correct: true }
    ]
  },
  {
    question: "Which function of an Array object calls a function for each element in the array?",
    answers: [
      { a: "forEach()", correct: true },
      { a: "every()", correct: false },
      { a: "forEvery()", correct: false },
      { a: "each()", correct: false }
    ],
  },
  {
    question: "JavaScript is a ________ Side Scripting Language.",
    answers: [
      { a: "Server", correct: false },
      { a: "ISP", correct: false },
      { a: "Browser", correct: true },
      { a: "None of the above", correct: false }
    ],
  },
  {
    question: "Which was the first browser to support JavaScript?",
    answers: [
      { a: "Mozilla Firefox", correct: false },
      { a: "Netscape", correct: true },
      { a: "Google Chrome", correct: false },
      { a: "Internet Explorer", correct: false }
    ],
  },
];

var startButton = document.getElementById("start");
var preQuiz = document.getElementById("preQuiz");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var quizContainer = document.getElementById("quiz");
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var questionCount = 0;
var score = 0;
var time = 60;

startButton.addEventListener("click", startGame);

function startGame() {
  console.log("Start game works");
  startButton.classList.add("hide");
  preQuiz.classList.add("hide");
  quizContainer.classList.remove("hide");
  startTimer();
  startQuiz();
}

function startTimer() {
  // console.log(time);
  setInterval(function () {
    document.getElementById('timer').textContent = "Time Remaining = " + time;
    time--;
    if (time === 0) {
      window.location.href = "highscores.html";
    }
  }, 1000);
}

function startQuiz() {
  console.log("start quiz works");
  questionCount = 0;
  showQuestion(questions[questionCount]);
}

function showQuestion(question) {
  questionEl.innerText = question.question;
  btn1.textContent = questions[questionCount].answers[0].a;
  btn1.setAttribute("correct", questions[questionCount].answers[0].correct);
  // console.log("btn1", btn1.getAttribute("correct"));
  btn2.textContent = questions[questionCount].answers[1].a;
  btn2.setAttribute("correct", questions[questionCount].answers[1].correct);
  // console.log("btn2", btn2.getAttribute("correct"));
  btn3.textContent = questions[questionCount].answers[2].a;
  btn3.setAttribute("correct", questions[questionCount].answers[2].correct);
  // console.log("btn3", btn3.getAttribute("correct"));
  btn4.textContent = questions[questionCount].answers[3].a;
  btn4.setAttribute("correct", questions[questionCount].answers[3].correct);
  // console.log("btn4", btn4.getAttribute("correct"));
}

btn1.addEventListener("click", pickAnswer);
btn2.addEventListener("click", pickAnswer);
btn3.addEventListener("click", pickAnswer);
btn4.addEventListener("click", pickAnswer);

function pickAnswer() {
  var isCorrect = this.getAttribute("correct")
  if (isCorrect === "true") {
    alert('correct')
    // localStorage.setItem('userScore', score);
  } else {
    time = time - 10;
    alert('incorrect')
  }
  questionCount++;
  if (questionCount < 5) {
    showQuestion(questions[questionCount]);
  } else stopQuiz();
}

function stopQuiz() {
  score = time
  window.location.href = "highscores.html";
}