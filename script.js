/*
when button is clicked, round resets and counter adds, you chose "" goes away
*/
let newBtn = document.createElement("button")
let btnContainer = document.querySelector(".btn-container");
let choiceText = document.createElement("p");
let scoreCount = document.querySelector(".score");
let reset = document.createElement("button");
reset.setAttribute("class", "resetbtn")

reset.textContent = "Play Again";
let container = document.querySelector(".container");
let playerScore = 0;
let computerScore = 0;
let playerChoice
let firstRound

const rockBtn = document.querySelector(".rock");
rockBtn.addEventListener("click", () => {
 
  choiceText.textContent = "You chose Rock.";
  btnContainer.appendChild(choiceText);
  playerChoice = "rock";
  
  newBtn.textContent = "Who will win?";
  btnContainer.appendChild(newBtn);
});

const paperBtn = document.querySelector(".paper");
paperBtn.addEventListener("click", () => {
 
  choiceText.textContent = "You chose Paper.";
  btnContainer.appendChild(choiceText);
  playerChoice = "paper";
  
  newBtn.textContent = "Who will win?";
  btnContainer.appendChild(newBtn);
});

const scissorsBtn = document.querySelector(".scissors");
scissorsBtn.addEventListener("click", () => {
 
  choiceText.textContent = "You chose Scissors.";
  btnContainer.appendChild(choiceText);
  playerChoice = "scissors";
  
  newBtn.textContent = "Who will win?";
  btnContainer.appendChild(newBtn);
});


newBtn.addEventListener("click", () => {
  compChoice();
  console.log(playRound(playerChoice, computerChoice));
  choiceText.textContent = playRound(playerChoice, computerChoice);
  counter();
  scoreCount.textContent=`Player Score = ${playerScore}, Computer Score = ${computerScore}`
  newBtn.remove();

  if (playerScore == 3) {
    scoreCount.textContent = "You were first to 3. Congrats!";
    container.appendChild(reset);
  } else if (computerScore == 3) {
    scoreCount.textContent = "The computer was first to 3, Sorry.";
    container.appendChild(reset);
  } else return;
});

reset.addEventListener("click", () => {
  reset.remove()
  choiceText.remove()
  scoreCount.textContent="Player Score = 0, Computer Score = 0"
  playerScore = 0
  computerScore = 0
});





function compChoice() {
  let num = getRandomIntInclusive(1, 3);
  if (num == 1) {
    computerChoice = "rock";
  } else if (num == 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  }

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

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
    return "Loser! Rock beats Scissors.";
  } else return "Draw! Try again!";
}

function counter() {
  if (
    playRound(playerChoice, computerChoice) == "Winner! Rock beats Scissors." ||
    playRound(playerChoice, computerChoice) == "Winner! Paper beats Rock." ||
    playRound(playerChoice, computerChoice) == "Winner! Scissors beats Paper."
  ) {
    playerScore++;
  } else if (
    playRound(playerChoice, computerChoice) == "Loser! Paper beats Rock." ||
    playRound(playerChoice, computerChoice) == "Loser! Scissors beats Paper." ||
    playRound(playerChoice, computerChoice) == "Loser! Rock beats scissors."
  ) {
    computerScore++;
  } else {
    ("This round is a draw!");
  }

  console.log(
    `Player Score = ${playerScore}, Computer Score = ${computerScore}`
  );
}



// for (let i = 0; i < 5; i++) {
//   let pChoice = prompt("Rock, paper, or scissors");
//   let playerChoice = pChoice.toLowerCase();

//   let num = getRandomIntInclusive(1, 3);
//   if (num == 1) {
//     computerChoice = "rock";
//   } else if (num == 2) {
//     computerChoice = "paper";
//   } else {
//     computerChoice = "scissors";
//   }

//   console.log(
//     `You chose ${playerChoice} and the computer chose ${computerChoice}.`
//   );

//   firstRound = playRound(playerChoice, computerChoice);

//   counter();
// }

// if (playerScore > computerScore) {
//   console.log("Congratulations, you won best out of five!");
// } else {
//   console.log("Sorry, you lost best out of five!");
// }
