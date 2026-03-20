const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const timerDisplay = document.querySelector(".timer h2");

let time = 25 * 60; // 25 minutes in seconds
let interval = null;

function updateDisplay() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  timerDisplay.textContent = `${String(minutes).padStart(2, "0")}:${String(
    seconds
  ).padStart(2, "0")}`;
}

startBtn.addEventListener("click", () => {
  if (interval) return;
  interval = setInterval(() => {
    if (time > 0) {
      time--;
      updateDisplay();
    } else {
      clearInterval(interval);
    }
  }, 1000);
});

pauseBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;

  time = 25 * 60;
  updateDisplay();
});

updateDisplay();
