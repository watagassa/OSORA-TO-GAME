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
let puzzleHighScore = document.createElement("div");
puzzleHighScore.textContent = "PuzzleHighScore : "+ localStorage.getItem("PuzzleScore");
dispScores.appendChild(puzzleHighScore);

//リセットボタン作成
var resetButton = document.createElement('button');
resetButton.className = 'resetButton';
resetButton.textContent = "resetButton"
dispScores.appendChild(resetButton);

resetButton.addEventListener("click", () => {
    console.log("Reset!");
    //リセットしたいものをここに書く
    localStorage.setItem("ShootingScore", 0);
    localStorage.setItem("PuzzleScore", 0);
    shootingHighScore.textContent = "ShootingHighScore : "+ localStorage.getItem("ShootingScore");
    shootingHighScore.textContent = "PuzzleHighScore : "+ localStorage.getItem("PuzzleScore");
  });