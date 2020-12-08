var startButton = document.querySelector("start");
var timeReadout = document.querySelector("timer");

var totalSeconds = 300;
var interval;

function startQuiz() {
    for (x = 300; x > 0; x--) {
        console.log(x);
    }
}

startQuiz();
startButton.addEventListener("click", startQuiz);