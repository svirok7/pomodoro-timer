let sessionNumber = 0;
let breakNumber = 0;
let timer;
let isSession = true;

const sessionDisplay = document.getElementById('sessionNumber');
const breakDisplay = document.getElementById('breakNumber');
const timerDisplay = document.getElementById('timer');
const startSessionButton = document.getElementById('startSession');
const startBreakButton = document.getElementById('startBreak');
const resetButton = document.getElementById('reset');

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60).toString().padStart(2, '0');
    const secs = (seconds % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
}

function startTimer(duration, beepTime, callback) {
    let time = duration;
    timerDisplay.textContent = formatTime(time);

    timer = setInterval(() => {
        time--;
        timerDisplay.textContent = formatTime(time);

        if (time === beepTime) {
            new Audio('https://www.soundjay.com/button/beep-07.wav').play();
        }

        if (time <= 0) {
            clearInterval(timer);
            callback();
        }
    }, 1000);
}

startSessionButton.addEventListener('click', () => {
    clearInterval(timer);
    sessionNumber++;
    sessionDisplay.textContent = sessionNumber;
    startTimer(15, 0, () => {
        startTimer(15, 0, () => {});
    });
});

startBreakButton.addEventListener('click', () => {
    clearInterval(timer);
    breakNumber++;
    breakDisplay.textContent = breakNumber;
    startTimer(5, 0, () => {
        startTimer(5, 0, () => {});
    });
});

resetButton.addEventListener('click', () => {
    clearInterval(timer);
    sessionNumber = 0;
    breakNumber = 0;
    sessionDisplay.textContent = sessionNumber;
    breakDisplay.textContent = breakNumber;
    timerDisplay.textContent = "00:00";
});
