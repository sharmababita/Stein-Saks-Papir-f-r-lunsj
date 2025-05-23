const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');



const displayYourChoice = document.querySelector('#yourChoice');
const displayComputerChoice = document.querySelector('#computerChoice');
const displayResults = document.querySelector('#results');

const displayWins = document.querySelector("#wins");
const displayDraws = document.querySelector("#draws");
const displayLosses = document.querySelector("#losses");
const displayCash = document.querySelector("#displayCash");
const displayCost = document.querySelector("#displayCost");

let wins = 0;
let draws = 0;
let losses = 0;
let cash = 1000;
let cost = 100 ;
let yourChoice;

const choices = ['rock', 'paper', 'scissors'];

displayCash.innerHTML =  "Cash: " + cash;
displayCost.innerHTML =  "Cost: " + cost;
displayWins.innerHTML =  "Draws: " + draws;
displayWins.innerHTML =  "wins: " + wins;
displayWins.innerHTML =  "Losses: " + losses;

function selectRock() {
  
  yourChoice = 'rock';


  computerChoice();
}



rockButton.addEventListener('click', selectRock);

function selectPaper() {
  yourChoice = 'paper';
  computerChoice();
}

paperButton.addEventListener('click', selectPaper);

function selectScissors() {
  yourChoice = 'scissors';
  computerChoice();
}

scissorsButton.addEventListener('click', selectScissors);

displayCash.innerHTML ="Cash: " + cash;
displayWins.innerHTML ="Wins: " + wins;
displayDraws.innerHTML ="Draws: " + draws;
displayLosses.innerHTML ="Losses: " + losses;

function computerChoice() {
  
  let computerNumber = choices[Math.floor(Math.random() * 3)];
  
  displayYourChoice.innerHTML = yourChoice;
  displayComputerChoice.innerHTML = computerNumber;
  

  if (yourChoice === computerNumber) {
    displayResults.innerHTML = 'Its a draw!';
    draws++
displayDraws.innerHTML ="Draws: " + draws;
    
  } else if (computerNumber === 'rock' && yourChoice === 'paper') {
    displayResults.innerHTML = 'You win!';
    wins++
    displayWins.innerHTML =  "wins: " + wins;
  } else if (computerNumber === 'paper' && yourChoice === 'scissors') {
    displayResults.innerHTML = 'You win!';
    wins++
    displayWins.innerHTML =  "wins: " + wins;

  } else if (computerNumber === 'scissors' && yourChoice === 'rock') {
    displayResults.innerHTML = 'You win!';
   wins++
   displayWins.innerHTML =  "wins: " + wins;

  } else {
    displayResults.innerHTML = 'You lose!';
    losses++
    displayLosses.innerHTML = "losses: " + losses;

  }
}

// Da var du ferdig!
