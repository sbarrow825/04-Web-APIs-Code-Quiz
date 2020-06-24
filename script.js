var secondsLeft = document.querySelector("#seconds-left");
var startButton = document.querySelector("#start-button");
var startPage = document.querySelector("#start-page");
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
}
