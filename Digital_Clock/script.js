const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let date = new Date();
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();

let hrPosition = (hr * 360 / 12) + (min * (360 / 60) / 12);
let minPosition = (min * 360 / 60) + (sec * (360 / 60) / 60);
let secPosition = sec * 360 / 60;

function runTheClock() {
  hrPosition += 3 / 360;
  minPosition += 6 / 60;
  secPosition += 6;

  HOURHAND.style.transform = `rotate(${hrPosition}deg)`;
  MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;
  SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
}

setInterval(runTheClock, 1000);

// DIGITAL CLOCK & DATE
function showTime() {
  const date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let session = "AM";

  if (hr == 0) hr = 12;
  if (hr > 12) {
    hr -= 12;
    session = "PM";
  }

  hr = hr < 10 ? "0" + hr : hr;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  const time = `${hr}:${min}:${sec} ${session}`;
  document.getElementById("digitalClock").textContent = time;

  const dateString = date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
  document.getElementById("date").textContent = dateString;

  setTimeout(showTime, 1000);
}

showTime();

// AUDIO CONTROL
const audioBtn = document.getElementById("audioBtn");
const clockAudio = document.getElementById("clockAudio");

let isPlaying = false;
audioBtn.addEventListener("click", () => {
  if (!isPlaying) {
    clockAudio.play();
    audioBtn.textContent = "Pause Clock Sound";
  } else {
    clockAudio.pause();
    audioBtn.textContent = "Play Clock Sound";
  }
  isPlaying = !isPlaying;
});
