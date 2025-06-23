let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_b = document.querySelector(".result > b");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
  const choices = ["r", "p", "s"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function convertToWorld(letter) {
  if (letter === "r") return "Rock";
  if (letter === "p") return "Paper";
  if (letter === "s") return "Scissors";
}
function win(userChoice, computerChoice) {
  userScore++;
  userScore_span.textContent = userScore;
  computerScore_span.textContent = computerScore;
  result_b.textContent = `${convertToWorld(userChoice)} beats ${convertToWorld(
    computerChoice
  )} .You WIN! 🎉`;
}
function lose(userChoice, computerChoice) {
  // console.log("LOSE");
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_b.innerHTML = `${convertToWorld(userChoice)} loses to ${convertToWorld(
    computerChoice
  )} .Computer WIN! 👎`;
}
function draw(userChoice, computerChoice) {
  // userScore++;
  // userScore_span.innerHTML = userScore;
  // computerScore_span.innerHTML = computerScore;
  result_b.innerHTML = `${convertToWorld(
    userChoice
  )} is equal to ${convertToWorld(computerChoice)} .Draw! 🤝`;
}

function game(userChoice) {
  const computerChoice = getComputerChoice();

  const result = userChoice + computerChoice;
  if (result === "rs" || result === "sp" || result === "pr") {
    win(userChoice, computerChoice);
  } else if (result === "sr" || result === "ps" || result === "rp") {
    lose(userChoice, computerChoice);
  } else {
    draw(userChoice, computerChoice);
  }
  // switch (userChoice + computerChoice) {
  //   case "rs":
  //   case "sp":
  //   case "pr":
  //     win(userChoice, computerChoice);
  //     break;
  //   case "sr":
  //   case "ps":
  //   case "rp":
  //     lose(userChoice, computerChoice);
  //     break;
  //   case "ss":
  //   case "pp":
  //   case "rr":
  //     draw(userChoice, computerChoice);
  //     break;
  // }
}
function main() {
  rock_div.addEventListener("click", function () {
    game("r");
  });
  paper_div.addEventListener("click", function () {
    game("p");
  });
  scissors_div.addEventListener("click", function () {
    game("s");
  });
}

main();
