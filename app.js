function getComputerChoice() {
  randomNumber = Math.floor(Math.random() * 3 + 1);
  switch (randomNumber) {
    case 1:
      computerChoice = "rock";
      break;
    case 2:
      computerChoice = "paper";
      break;
    case 3:
      computerChoice = "scissors";
      break;
  }

  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
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
