var secondsLeft = document.querySelector("#seconds-left");
var startButton = document.querySelector("#start-button");
var startPage = document.querySelector("#start-page");
var placeholderDiv = document.querySelector("#place-holder");
var allButtons;
var question1Options = ["2", "A string is a datatype", "A string can be mutated", "A string is denoted by quotation marks at the beginning and end", "A string can be saved to local storage on the browser"];
var newQuestion;
var newButton;
var newButtons;
var newBreak;
var currentQuestion = 0;
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
    for (i = 1; i < question1Options.length; i += 1) {
        newButton = document.createElement("button");
        newButton.innerHTML = i + ") " + question1Options[i];
        newButton.classList.add("button");
        newButton.classList.add("answer-button");
        if (parseInt(question1Options[0]) === i) {
            newButton.setAttribute("data-correct", "true");
        } else {
            newButton.setAttribute("data-correct", "false");
        }
        newButton.style.float = "left";
        newQuestion.appendChild(newButton);
        addTwoBreaks(newQuestion);
    }
    placeholderDiv.appendChild(newQuestion);
    addNewEventListeners();
}

function setUpQuestion2() {
    makeNewQuestionContainer();
}

function addTwoBreaks(parentElement) {
    newBreak = document.createElement("br");
    parentElement.appendChild(newBreak);
    newBreak = document.createElement("br");
    parentElement.appendChild(newBreak);
}

function makeNewQuestionContainer() {
    if (newQuestion) {
        newQuestion.remove();
    }
    newQuestion = document.createElement("div");
}

function addNewEventListeners() {
    newButtons = document.getElementsByClassName("answer-button");
    for (i = 0; i < newButtons.length; i += 1) {
        newButtons[i].addEventListener("click", checkIfCorrect);
    }
}

function checkIfCorrect() {
    newHR = document.createElement("hr");
    newQuestion.appendChild(newHR);
    var correct = this.getAttribute("data-correct");
    if (correct === "true") {
        displayCorrect()
    } else {
        displayFalse()
    }
}

function displayCorrect() {
    correctMessage = document.createElement("p");
    correctMessage.innerHTML = "Correct!";
    newQuestion.appendChild(correctMessage);
    setTimeout(nextQuestion, 1000);
}

function displayFalse() {
    incorrectMessage = document.createElement("p");
    incorrectMessage.innerHTML = "Incorrect";
    newQuestion.appendChild(incorrectMessage);
    secondsLeft.innerHTML -= 10;
    setTimeout(nextQuestion, 1000);
}

function nextQuestion() {
    currentQuestion += 1;
    if (currentQuestion === 1) {
        setUpQuestion2();
    } else if (currentQuestion === 2) {
        setUpQuestion3();
    } else {
        setUpQuestion4();
    }
}
