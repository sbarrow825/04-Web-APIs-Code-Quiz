var secondsLeft = document.querySelector("#seconds-left");
var startButton = document.querySelector("#start-button");
var startPage = document.querySelector("#start-page");
var placeholderDiv = document.querySelector("#place-holder");
var allButtons;
var question1Options = ["2", "A string is a datatype", "A string can be mutated", "A string is denoted by quotation marks at the beginning and end", "A string can be saved to local storage on the browser"];
var question2Options = ["1", "Python", "JavaScript", "CSS", "html"];
var question3Options = ["4", "var = x = 5", "int x = 5", "integer x = 5", "var x = 5"];
var question4Options = ["4", "(type)=", "==", "(type)==", "==="];
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
    var question2Prompt = document.createElement("h1");
    question2Prompt.innerHTML = "Which of these programming languages is not considered a web-development language";
    newQuestion.appendChild(question2Prompt);
    addTwoBreaks(newQuestion);
    for (i = 1; i < question2Options.length; i += 1) {
        newButton = document.createElement("button");
        newButton.innerHTML = i + ") " + question2Options[i];
        newButton.classList.add("button");
        newButton.classList.add("answer-button");
        if (parseInt(question2Options[0]) === i) {
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

function setUpQuestion3() {
    makeNewQuestionContainer();
    var question3Prompt = document.createElement("h1");
    question3Prompt.innerHTML = "Which of these options is the correct JavaScript syntax for setting the variable x to the integer value of 5";
    newQuestion.appendChild(question3Prompt);
    addTwoBreaks(newQuestion);
    for (i = 1; i < question3Options.length; i += 1) {
        newButton = document.createElement("button");
        newButton.innerHTML = i + ") " + question3Options[i];
        newButton.classList.add("button");
        newButton.classList.add("answer-button");
        if (parseInt(question3Options[0]) === i) {
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

function setUpQuestion4() {
    makeNewQuestionContainer();
    var question4Prompt = document.createElement("h1");
    question4Prompt.innerHTML = "Which of these options is the correct JavaScript syntax for comparing both the type and value of two elements";
    newQuestion.appendChild(question4Prompt);
    addTwoBreaks(newQuestion);
    for (i = 1; i < question4Options.length; i += 1) {
        newButton = document.createElement("button");
        newButton.innerHTML = i + ") " + question4Options[i];
        newButton.classList.add("button");
        newButton.classList.add("answer-button");
        if (parseInt(question4Options[0]) === i) {
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
    } else if (currentQuestion === 3) {
        setUpQuestion4();
    } else {
        displayEndScreen();
    }
}
