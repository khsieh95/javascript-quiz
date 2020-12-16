// TODO:Create a start button
// TODO:Click function start, starts timer
// TODO:Click function, start quiz and display first question
// TODO:4 questions total, one at a time
// TODO:Answers will act as the button itself
// TODO:If question is answered correctly, move on to next question, else, -10 on the timer, move on
// TODO:If timer hits 0 before the end, your score is 0, else score = timer

// Set global variables
var questContainerEl = document.querySelector(".question-container");
var homepageEl = document.querySelector("#homepage");
var timeEl = document.querySelector(".time");
var questCounterEl = document.querySelector("#question-count");
var startButtonEl = document.querySelector("#startButton");
var questionEl = document.querySelector(".question");
var buttonOneEl = document.querySelector(".btn1");
var buttonTwoEl = document.querySelector(".btn2");
var buttonThreeEl = document.querySelector(".btn3");
var buttonFourEl = document.querySelector(".btn4");
var finalScore = document.querySelector(".final-score");
var timerContainer = document.querySelector(".timer-container");
var submitButtonEl = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
var stopTimer = false;
var userValues = JSON.parse(localStorage.getItem("userValues") || "[]");

var secondsLeft = 100;
var questionIndex = 0;
var questionsList = [
  {
    question: "Which male tennis player holds the title of 'GOAT'?",
    answers: [
      "Roger Federer",
      "Novak Djokovic",
      "Pete Sampras",
      "Rafael Nadal",
    ],
    correctAnswer: "Roger Federer",
  },
  {
    question: "How many Grand Slams are there?",
    answers: ["1", "2", "3", "4"],
    correctAnswer: "4",
  },
  {
    question: "Where is Rafael Nadal from?",
    answers: ["Portugal", "Mexico", "Spain", "USA"],
    correctAnswer: "Spain",
  },
];
questContainerEl.style.display = "none";
function startQuizSelected() {
  startTimer();
  homepageEl.remove();
  questContainerEl.style.display = "block";
  // questContainerEl.classList.remove("question-container");
  questionEl.textContent = questionsList[0].question;
  for (var i = 0; i < 4; i++) {
    var answer = document.querySelector(".btn" + (i + 1));
    answer.textContent = questionsList[questionIndex].answers[i];
  }
}

function handleWrongAnswerSelected() {
  secondsLeft -= 10;
  alert("Wrong! -10 Points");
}

function buttonOneSelected() {
  if (buttonOneEl.textContent !== questionsList[questionIndex].correctAnswer) {
    handleWrongAnswerSelected();
  }

  nextQuestion();
}

function buttonTwoSelected() {
  if (buttonTwoEl.textContent === questionsList[questionIndex].correctAnswer) {
  } else {
    handleWrongAnswerSelected();
  }
  nextQuestion();
}

function buttonThreeSelected() {
  if (
    buttonThreeEl.textContent === questionsList[questionIndex].correctAnswer
  ) {
  } else {
    handleWrongAnswerSelected();
  }
  nextQuestion();
}

function buttonFourSelected() {
  if (buttonFourEl.textContent === questionsList[questionIndex].correctAnswer) {
  } else {
    handleWrongAnswerSelected();
  }
  nextQuestion();
}

// function that runs to input second question in place of the first

function nextQuestion() {
  questionIndex++;

  if (questionIndex > questionsList.length - 1) {
    endQuiz();
    return;
  }

  questionEl.textContent = questionsList[questionIndex].question;
  for (var i = 0; i < questionsList.length + 1; i++) {
    var answer = document.querySelector(".btn" + (i + 1));
    answer.textContent = questionsList[questionIndex].answers[i];
    // If questionIndex is > questionArray.Length then end quiz
  }
}

function endQuiz() {
  // Display results
  console.log("hi kevin");
  finalScore.style.display = "block";
  // Stop timer when this function runs
  stopTimer = true;
  // Local storage
  // Hide Questions
  questContainerEl.style.display = "none";
}

// Timer that counts down from 100 that will act as final score of user
function startTimer() {
  if (stopTimer === false) {
    timerContainer.textContent = secondsLeft;
    var timerInterval = setInterval(function () {
      secondsLeft--;
      timerContainer.textContent = secondsLeft;
      if (secondsLeft === 0 || stopTimer === true) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }
}

function saveHighScore(event) {
  event.preventDefault();

  var userScore = { Name: [initialsEl.value], Score: [secondsLeft] };

  userValues.push(userScore);
  console.log(userValues);
  localStorage.setItem("userValues", JSON.stringify(userValues));
  console.log(localStorage);
}

// Start button that starts the quiz when user is ready
startButton.addEventListener("click", startQuizSelected);

// Submit Button that adds input to local storage
submitButtonEl.addEventListener("click", saveHighScore);

// Buttons and functions that will follow the question
buttonOneEl.addEventListener("click", buttonOneSelected);
buttonTwoEl.addEventListener("click", buttonTwoSelected);
buttonThreeEl.addEventListener("click", buttonThreeSelected);
buttonFourEl.addEventListener("click", buttonFourSelected);
