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
