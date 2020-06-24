var secondsLeft = document.querySelector("#seconds-left");
var startButton = document.querySelector("#start-button");
var startPage = document.querySelector("#start-page");
var placeholderDiv = document.querySelector("#place-holder");
var question1Options = ["A string is a datatype", "A string can be mutated", "A string is denoted by quotation marks at the beginning and end", "A string can be saved to local storage on the browser"];
var newQuestion;
var newButton;
var newBreak;
// var introTextTitle = document.querySelector("#intro-text-title");
// var startButtonText = document.querySelector("#start-button-text");

secondsLeft.innerHTML = 75;
// introTextTitle.innerHTML = "Coding Quiz Challenge";
// startButton.innerHTML = "Start Quiz";

startButton.addEventListener("click", startCountdown);

function startCountdown() {
    setUpQuiz();
    setInterval(tick, 1000);
}

function tick() {
    secondsLeft.innerHTML -= 1;
    console.log(secondsLeft.innerHTML);
}

function setUpQuiz() {
    startPage.remove();
    setUpQuestion1();
}

function setUpQuestion1() {
    makeNewQuestionContainer();
    var question1Prompt = document.createElement("h1");
    question1Prompt.innerHTML = "Which of these is not true of a string";
    newQuestion.appendChild(question1Prompt);
    addTwoBreaks(newQuestion);
    for (i = 0; i < question1Options.length; i += 1) {
        newButton = document.createElement("button");
        newButton.innerHTML = (i+1) + ") " + question1Options[i];
        newButton.classList.add("button");
        newButton.classList.add("answer-button");
        newButton.style.float = "left";
        newQuestion.appendChild(newButton);
        addTwoBreaks(newQuestion);
    }
    placeholderDiv.appendChild(newQuestion);
}

function addTwoBreaks(parentElement) {
    newBreak = document.createElement("br");
    parentElement.appendChild(newBreak);
    newBreak = document.createElement("br");
    parentElement.appendChild(newBreak);
}

function makeNewQuestionContainer() {
    newQuestion = document.createElement("card");
}
