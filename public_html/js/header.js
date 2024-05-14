let headerButtons = document.createElement("header");

let ul = document.createElement("ul");
// classを追加
ul.className = "buttons";

//weather画面遷移ボタン
let we_button = document.createElement("button");
we_button.textContent = "wether";
ul.appendChild(we_button);

//shooting画面遷移ボタン
let sh_button = document.createElement("button");
sh_button.textContent = "shooting";
ul.appendChild(sh_button);

//puzzle画面遷移ボタン
let pu_button = document.createElement("button");
pu_button.textContent = "puzzle";
ul.appendChild(pu_button);

headerButtons.appendChild(ul);
document.querySelector("body").appendChild(headerButtons);


we_button.addEventListener("click", () => {
    location.replace("weather.html");
  });
sh_button.addEventListener("click", () => {
  location.replace("shooting.html");
});
pu_button.addEventListener("click", () => {
    location.replace("puzzle.html");
  });


