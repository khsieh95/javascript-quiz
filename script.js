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
var startButton = document.querySelector("#startButton");
var questionsArray = [
  "Which of the following is not a javascript data type?",
  "Which one of these is falsey?",
  "jibberish",
];
var answers = ["1","1","1","1","1","1","1","1","1","1",];
var correctAnswers = [];
var questionCount = 0;
var question = document.querySelector(".question");
startButton.addEventListener("click", function () {
  setTime();
  homepage.remove();
  questContainer.classList.remove("question-container");
  question.textContent = questionsArray[0];
  for (var i=0; i<4; i++){
      var 
  }

});

var secondsLeft = 100;

function setTime() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeElement.textContent = secondsLeft;
  }, 1000);
}
