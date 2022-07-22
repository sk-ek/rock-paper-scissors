const choiceList = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return choiceList[Math.floor(Math.random() * choiceList.length)];
}

function playRound(playerSelection, computerSelection) {
  if (choiceList.includes(playerSelection)) {
  }
  playerSelection = playerSelection.toLowerCase();
  switch (true) {
    case playerSelection === computerSelection:
      return `you tied: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      return `you won: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      return `you won: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      return `you won: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
    default:
      return `you lost: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("choose one (rock, paper, scissors) : ");
    console.log(playRound(playerSelection, getComputerChoice()));
  }
}

game();
