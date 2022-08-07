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
    // if all the above doesn't get executed then the player lost so we just need to default it and not make another 3 cases
    default:
      return `you lost: player: ${playerSelection} | computer: ${computerSelection}`;
      break;
  }
}

function getPlayerChoice() {
  box.forEach((boxItem) =>
    boxItem.addEventListener("click", (e) => console.log(e.target.id))
  );
}

// function to play rock paper scissors 5 times
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }
}

function promptChoice() {
  let playerSelection = "";
  /*
  while the playerSelection
  (the string that the player input into the prompt 
  (although the first value of playerSelection will be undefined because we did let playerSelection ))
  is not in choiceList, it will prompt the prompt forever until it's in choiceList 
  
  */
  while (!choiceList.includes(playerSelection)) {
    playerSelection = prompt("choose one (rock, paper, scissors) : ");
    playerSelection =
      typeof playerSelection === "string" ? playerSelection.toLowerCase() : "";
  }
  return playerSelection;
}
