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
  switch (true) {
    case playerSelection === computerSelection:
      return `you tied: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      return `you lost: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      return `you won: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      return `you won: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      return `you lost: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      return `you lost: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      return `you won: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
  }
}

console.log(playRound("rock", "rock"));
console.log(playRound("rock", "paper"));
console.log(playRound("rock", "scissors"));
