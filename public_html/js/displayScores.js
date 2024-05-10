// div要素を生成
let dispScores = document.createElement('div');
// classを追加
dispScores.className = 'dispScores';
// 生成したdiv要素を追加する
document.getElementById("display_scores").appendChild(dispScores);

//shootingのハイスコア表示
let shootingHighScore = document.createElement("div");
shootingHighScore.textContent = "ShootingHighScore : "+ localStorage.getItem("ShootingScore");
dispScores.appendChild(shootingHighScore);

//puzzleのハイスコア表示
//後で書く

//リセットボタン作成
var resetButton = document.createElement('button');
resetButton.className = 'resetButton';
resetButton.textContent = "resetButton"
dispScores.appendChild(resetButton);

resetButton.addEventListener("click", () => {
    console.log("Reset!");
    //リセットしたいものをここに書く
    localStorage.setItem("ShootingScore", 0);
    shootingHighScore.textContent = "ShootingHighScore : "+ localStorage.getItem("ShootingScore");
  });