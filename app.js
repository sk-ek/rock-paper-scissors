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
      return "Tie";
      break;
    case playerSelection === "rock" && computerSelection === "paper":
      return "You Lost";
      break;
    case playerSelection === "rock" && computerSelection === "scissors":
      return "You Won";
      break;
    case playerSelection === "paper" && computerSelection === "rock":
      return "You Won";
      break;
    case playerSelection === "paper" && computerSelection === "scissors":
      return "You Lost";
      break;
    case playerSelection === "scissors" && computerSelection === "rock":
      return "You Lost";
      break;
    case playerSelection === "scissors" && computerSelection === "paper":
      return "You Won";
      break;
  }
}

console.log(playRound("rock", "rock"));
console.log(playRound("rock", "paper"));
console.log(playRound("rock", "scissors"));
