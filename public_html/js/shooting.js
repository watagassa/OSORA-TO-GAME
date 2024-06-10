const container = document.querySelector(".container");
const info = document.querySelector(".info");
const header = document.querySelector(".header-7");
const bloodSpot = document.querySelector(".bloodSpot");
const startBtn = document.querySelector(".startBtn");
const cursor = document.querySelector(".cursor");
const enemy = document.getElementById("enemy");
weather = localStorage.getItem("Weather");
switch (weather) { //上記で取得したjsonに含まれている天気情報によって天気アイコンを変更

  case 'Mist':
      weather = "Clouds";
      break;

  case 'Haze':
    weather = "Clouds";
      break;
  case 'noImage':
    weather = "Clouds";
      break;
  default:
}
enemy.src = `img-shooting/${weather}_enemy.png`;

const enemySize = parseInt(
  window.getComputedStyle(enemy).getPropertyValue("height")
);
console.log(info.offsetHeight);
const contHeight = container.offsetHeight; //borderまでの大きさ
const contWidth = container.offsetWidth; //borderまでの大きさ

let score = 0;
let playing = false;
let displayTimer = document.getElementById("timer");
let timer = 20;
let high_score = localStorage.getItem("ShootingScore");
console.log(high_score);
function showTimer() {
  timer--;
  displayTimer.innerText = `残り時間: ${timer}`;
  if (timer === 0) {
    if (high_score <= score) {
      localStorage.setItem("ShootingScore", score);
      high_score = localStorage.getItem("ShootingScore");
    }
    alert("終了！");
    location.reload();
  }
}

window.addEventListener("mousemove", (e) => {
  cursor.style.top = e.pageY - info.offsetHeight - header.offsetHeight + "px";
  cursor.style.left = e.pageX + "px";
});

window.addEventListener("click", (e) => {
  bloodSpot.style.display = "block";
  bloodSpot.style.top =
    e.pageY - info.offsetHeight - header.offsetHeight + "px";
  bloodSpot.style.left = e.pageX + "px";

  if (e.target === enemy) {
    score++;
  }
  if (playing == true) {
    startBtn.innerText = "SCORE: " + score;
  }
});

startBtn.addEventListener("click", () => {
  startBtn.disabled = "true";
  playing = true;
  enemy.style.display = "block";

  startBtn.innerText = "SCORE: " + score;
  setInterval(showTimer, 1000);
});

setInterval(() => {
  const randTop = Math.random() * (contHeight - enemySize);
  const randLeft = Math.random() * (contWidth - enemySize);
  enemy.style.top = randTop + "px";
  enemy.style.left = randLeft + "px";
}, 700);
