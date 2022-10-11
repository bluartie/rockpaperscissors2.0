//playerChoice function/ prompt, lower case

function promptChoice() {
  let lowerCaseChoice;
  let result = prompt("Choose between rock, paper, or scissors.");
  lowerCaseChoice = result.toLowerCase();
  console.log(lowerCaseChoice);
}

//computerChoice function/ random number function/num to choice function
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let computerChoice;

for (let i = 0; i < 5; i++) {
  let num = getRandomIntInclusive(1, 3);

  if (num == 1) {
    computerChoice = "rock";
  } else if (num == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  promptChoice();
  console.log(computerChoice);
}

//playRound function/ else if branches for computerChoice/playerChoice

//counter function /else if branches for playRound results

//let player score = 0/ let computer score = 0

/*5 round loop
playerChoice function
computerChoice function
playRound function
counter function*/

//if else for final score
