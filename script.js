var secondsLeft = document.querySelector("#seconds-left");
var startButton = document.querySelector("#start-button");
var interval;

secondsLeft.innerHTML = 75;

startButton.addEventListener("click", startCountdown);

function startCountdown() {
    setInterval(tick, 1000);
}

function tick() {
    secondsLeft.innerHTML -= 1;
    console.log(secondsLeft.innerHTML);
}
