// TODO:Create a start button
// TODO:Click function start, starts timer
// TODO:Click function, start quiz and display first question
// TODO:4 questions total, one at a time
// TODO:Answers will act as the button itself
// TODO:If question is answered correctly, move on to next question, else, -10 on the timer, move on
// TODO:If timer hits 0 before the end, your score is 0, else score = timer

// Set global variables
var questContainer = document.querySelector(".question-container");
var secondsLeft = 100;
var homepage = document.querySelector("#homepage");
var timeElement = document.querySelector(".time");
var questCounter = document.querySelector("#question-count");
var startButton = document.querySelector("#startButton");
var questionsArray = [
  "Which male tennis player holds the title of 'GOAT'?",
  "How many Grand Slams are there?",
  "Where is Rafael Nadal from?",
];
var answersArray = [
  ["Roger Federer", "Novak Djokovic", "Pete Sampras", "Rafael Nadal"],
  ["1", "2", "3", "4"],
  ["Portugal", "Mexico", "Spain", "USA"],
];
var questionCount = 0;
var question = document.querySelector(".question");
var correctAnswer = ["Roger Federer", "4", "Spain"];

// Start button that starts the quiz when user is ready
startButton.addEventListener("click", function () {
  setTime();
  homepage.remove();
  questContainer.classList.remove("question-container");
  question.textContent = questionsArray[0];
  for (var i = 0; i < 4; i++) {
    var answer = document.querySelector(".btn" + (i + 1));
    answer.textContent = answersArray[questionCount][i];
  }
});

// function that runs to input second question in place of the first
function secondQuestion() {
  questionCount++;
  question.textContent = questionsArray[questionCount];
  for (var i = 0; i < 4; i++) {
    var answer = document.querySelector(".btn" + (i + 1));

    answer.textContent = answersArray[questionCount][i];

    console.log("correct");
  }
}
// Buttons and functions that will follow the question
var button1 = document.querySelector(".btn1");
button1.addEventListener("click", function () {
  if (button1.textContent === correctAnswer[questionCount]) {
  } else {
    secondsLeft -= 10;
  }
  secondQuestion();
});
var button2 = document.querySelector(".btn2");
button2.addEventListener("click", function () {
  if (button2.textContent === correctAnswer[questionCount]) {
    console.log("hi");
  } else {
    secondsLeft -= 10;
  }
  secondQuestion();
});
var button3 = document.querySelector(".btn3");
button3.addEventListener("click", function () {
  if (button3.textContent === correctAnswer[questionCount]) {
  } else {
    secondsLeft -= 10;
  }
  secondQuestion();
});
var button4 = document.querySelector(".btn4");
button4.addEventListener("click", function () {
  if (button4.textContent === correctAnswer[questionCount]) {
  } else {
    secondsLeft -= 10;
  }
  secondQuestion();
});

// Timer that counts down from 100 that will act as final score of user
function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeElement.textContent = secondsLeft;
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      console.log("zero");
    }
  }, 1000);
}
