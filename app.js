const box = document.querySelectorAll(".box");

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
      console.log(
        `you tied: player: ${playerSelection} | computer: ${computerSelection}`
      );
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      console.log(
        `you won: player: ${playerSelection} | computer: ${computerSelection}`
      );
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      console.log(
        `you won: player: ${playerSelection} | computer: ${computerSelection}`
      );
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      console.log(
        `you won: player: ${playerSelection} | computer: ${computerSelection}`
      );
      break;
    // if all the above doesn't get executed then the player lost so we just need to default it and not make another 3 cases
    default:
      console.log(
        `you lost: player: ${playerSelection} | computer: ${computerSelection}`
      );
      break;
  }
}

function playGame() {
  box.forEach((boxItem) =>
    boxItem.addEventListener("click", (e) =>
      playRound(e.target.id, getComputerChoice())
    )
  );
}

playGame();
