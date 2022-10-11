function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let firstRound;

function playRound(playerChoice, computerChoice) {
  if (playerChoice == "rock" && computerChoice == "scissors") {
    return "Winner! Rock beats Scissors.";
  } else if (playerChoice == "rock" && computerChoice == "paper") {
    return "Loser! Paper beats Rock.";
  } else if (playerChoice == "paper" && computerChoice == "rock") {
    return "Winner! Paper beats Rock.";
  } else if (playerChoice == "paper" && computerChoice == "scissors") {
    return "Loser! Scissors beats Paper.";
  } else if (playerChoice == "scissors" && computerChoice == "paper") {
    return "Winner! Scissors beats Paper.";
  } else if (playerChoice == "scissors" && computerChoice == "rock") {
    return "Loser! Rock beats scissors.";
  } else return "Draw! Try again!";
}

function counter() {
  if (
    firstRound == "Winner! Rock beats Scissors." ||
    firstRound == "Winner! Paper beats Rock." ||
    firstRound == "Winner! Scissors beats Paper."
  ) {
    playerScore++;
  } else if (
    firstRound == "Loser! Paper beats Rock." ||
    firstRound == "Loser! Scissors beats Paper." ||
    firstRound == "Loser! Rock beats scissors."
  ) {
    computerScore++;
  } else {
    ("This round is a draw!");
  }

  console.log(
    `Player Score = ${playerScore}, Computer Score = ${computerScore}`
  );
}

let playerScore = 0;
let computerScore = 0;

for (let i = 0; i < 5; i++) {
  let pChoice = prompt("Rock, paper, or scissors");
  let playerChoice = pChoice.toLowerCase();

  let num = getRandomIntInclusive(1, 3);
  if (num == 1) {
    computerChoice = "rock";
  } else if (num == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  console.log(
    `You chose ${playerChoice} and the computer chose ${computerChoice}.`
  );

  firstRound = playRound(playerChoice, computerChoice);

  counter();
}

if (playerScore > computerScore) {
  console.log("Congratulations, you won best out of five!");
} else {
  console.log("Sorry, you lost best out of five!");
}
