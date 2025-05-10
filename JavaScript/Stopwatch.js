let [hours, minutes, seconds] = [0, 0, 0];
let timer = null;
let running = false;

const display = document.getElementById("display");
const laps = document.getElementById("laps");

function updateDisplay() {
  let h = String(hours).padStart(2, '0');
  let m = String(minutes).padStart(2, '0');
  let s = String(seconds).padStart(2, '0');
  display.innerText = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }
  updateDisplay();
}

document.getElementById("startBtn").onclick = () => {
  if (!running) {
    timer = setInterval(stopwatch, 1000);
    running = true;
  }
};

document.getElementById("pauseBtn").onclick = () => {
  clearInterval(timer);
  running = false;
};

document.getElementById("resetBtn").onclick = () => {
  clearInterval(timer);
  [hours, minutes, seconds] = [0, 0, 0];
  updateDisplay();
  laps.innerHTML = "";
  running = false;
};

document.getElementById("lapBtn").onclick = () => {
  const li = document.createElement("li");
  li.textContent = display.innerText;
  laps.appendChild(li);
};