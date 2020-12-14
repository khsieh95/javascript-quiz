// TODO:Create a start button
// TODO:Click function start, starts timer
// TODO:Click function, start quiz and display first question
// TODO:4 questions total, one at a time
// TODO:Answers will act as the button itself
// TODO:If question is answered correctly, move on to next question, else, -10 on the timer, move on
// TODO:If timer hits 0 before the end, your score is 0, else score = timer
var questContainer = document.querySelector(".question-container");
var homepage = document.querySelector("#homepage");
var timeElement = document.querySelector(".time");
var questCounter = document.querySelector("#question-count");
var startButton = document.querySelector("#startButton");
var questionsArray = [
  "Which male tennis player holds the title of 'GOAT'?",
  "How many Grand Slams are there?",
  "jibberish",
];
var answersArray = [
  "Roger Federer",
  "Novak Djokovic",
  "Pete Sampras",
  "Rafael Nadal",
  "1",
  "2",
  "3",
  "4",
];
var correctAnswers = ["Roger Federer", "52"];
var questionCount = 0;
var question = document.querySelector(".question");
startButton.addEventListener("click", function () {
  setTime();
  homepage.remove();
  questContainer.classList.remove("question-container");
  question.textContent = questionsArray[0];
  for (var i = 0; i < 4; i++) {
    var answer = document.querySelector(".btn" + (i + 1));
    answer.textContent = answersArray[i];
  }
});

function isCorrect() {
  if (answersArray[i] === correctAnswers[0]) {
    console.log("here");
  }
  console.log(i);
}

var button1 = document.querySelector(".btn1");
button1.addEventListener("click", function () {
  if (button1.textContent === correctAnswers[0]) {
    console.log("hi");
    questionCount++;
  }
});
var button2 = document.querySelector(".btn2");
button2.addEventListener("click", function () {
  if (button2.textContent === correctAnswers[0]) {
    console.log("hi");
  } else {
    secondsLeft;
  }
});
var button3 = document.querySelector(".btn3");
button3.addEventListener("click", function () {
  if (button3.textContent === correctAnswers[0]) {
    console.log("hi");
  }
});
var button4 = document.querySelector(".btn4");
button4.addEventListener("click", function () {
  if (button4.textContent === correctAnswers[0]) {
    console.log("hi");
  }
});

var secondsLeft = 100;

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
