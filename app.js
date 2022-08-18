const boxImg = document.querySelectorAll(".box-img");

const result = document.querySelector(".result");

const pSelection = document.querySelector(".player-selection");

const cSelection = document.querySelector(".computer-selection");

let playerScore = 0;

let computerScore = 0;

const pScore = document.querySelector(".player-score");

const cScore = document.querySelector(".computer-score");

// list for the options in rock paper scissors
const choiceList = ["rock", "paper", "scissors"];
// function for getting a random element in choiceList
function getComputerChoice() {
  return choiceList[Math.floor(Math.random() * choiceList.length)];
}
// function to play a round of rock paper scissors
function playRound(playerSelection, computerSelection) {
  // switch case to check who won based on the playerSelection and the computerSelection
  switch (true) {
    case playerSelection === computerSelection:
      result.textContent = "you tied";
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
    case playerSelection === "paper" && computerSelection === "rock":
    case playerSelection === "scissors" && computerSelection === "paper":
      result.textContent = "you won";

      playerScore++;
      pScore.innerHTML = `player: ${playerScore}`;
      break;
    // if all the above doesn't get executed then the player lost so we just need to default it and not make another 3 cases
    default:
      result.textContent = "you lost";
      computerScore++;
      cScore.textContent = `computer: ${computerScore}`;
      break;
  }

  displayOptionSelected(playerSelection, computerSelection);
}

function displayOptionSelected(playerSelection, computerSelection) {
  pSelection.src = `img/${playerSelection}.svg`;
  cSelection.src = `img/${computerSelection}.svg`;
}

function playGame() {
  boxImg.forEach((boxItem) =>
    boxItem.addEventListener("click", (e) =>
      playRound(e.target.id, getComputerChoice())
    )
  );
}

playGame();
