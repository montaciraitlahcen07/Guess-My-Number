"use strict";
function something() {
  return parseInt(Math.random() * 21);
}
let random = something();
let score = 20;
let hightscore = 0;
document.querySelector(".btn").addEventListener("click", function () {
  let value = document.querySelector(".inpt").value;
  if (!value)
    document.querySelector(".guessing").textContent = "❌ not a number";
  else if (value == random && score >= 1) {
    document.querySelector(".number").textContent = value;
    document.querySelector(".something").style.width = "20rem";
    document.querySelector(".parent").style.backgroundColor = "#60b347";
    document.querySelector(".guessing").textContent = "🎉 the right number";
    if (score > hightscore) hightscore = score;
    document.querySelector(".highscore").textContent = hightscore;
  } else if (value !== random) {
    if (score <= 1) {
      document.querySelector(".guessing").textContent =
        "❌ failed all your guess's";
      score = 0;
      document.querySelector(".score").textContent = score;
      document.querySelector(".modal-window").classList.remove("hidden");
      document
        .querySelector(".modal-button")
        .addEventListener("click", function () {
          document.querySelector(".inpt").value = "";
          document.querySelector(".guessing").textContent = "Start guessing...";
          random = something();
          score = 20;
          document.querySelector(".number").textContent = "?";
          document.querySelector(".score").textContent = score;
          document.querySelector(".parent").style.backgroundColor = "#222222";
          document.querySelector(".something").style.width = "148px";
          document.querySelector(".modal-window").classList.add("hidden");
        });
      return 0;
    }
    score--;
    document.querySelector(".guessing").textContent =
      value > random ? "📈 to hight" : "📉 to low";
    document.querySelector(".score").textContent = score;
  }
});
document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".inpt").value = "";
  document.querySelector(".guessing").textContent = "Start guessing...";
  random = something();
  score = 20;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".score").textContent = score;
  document.querySelector(".parent").style.backgroundColor = "#222222";
  document.querySelector(".something").style.width = "148px";
});
