// div要素を生成
let dispScores = document.createElement('div');
// classを追加
dispScores.className = 'dispScores';
// 生成したdiv要素を追加する
document.getElementById("logo-div").appendChild(dispScores);

//shootingのハイスコア表示
let shootingHighScore = document.createElement("div");
shootingHighScore.textContent = "ShootingHighScore : "+ localStorage.getItem("ShootingScore");
shootingHighScore.style.textAlign = "right";
dispScores.appendChild(shootingHighScore);

//puzzleのハイスコア表示
let puzzleHighScore = document.createElement("div");
puzzleHighScore.textContent = "PuzzleHighScore : "+ localStorage.getItem("PuzzleScore");
puzzleHighScore.style.textAlign = "right";
dispScores.appendChild(puzzleHighScore);

// //リセットボタン作成
// var resetButton = document.createElement('button');
// resetButton.className = 'resetButton';
// resetButton.textContent = "resetButton";
// dispScores.appendChild(resetButton);

// resetButton.addEventListener("click", () => {
//     console.log("Reset!");
//     //リセットしたいものをここに書く
//     // localStorage.setItem("ShootingScore", 0);
//     // localStorage.setItem("PuzzleScore", 0);
//     // localStorage.removeItem("ShootingScore");
//     // localStorage.removeItem("PuzzleScore");
//     localStorage.clear();
//     shootingHighScore.textContent = "ShootingHighScore : "+ localStorage.getItem("ShootingScore");
//     puzzleHighScore.textContent = "PuzzleHighScore : "+ localStorage.getItem("PuzzleScore");
//   });