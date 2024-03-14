// script.js

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection; 

    if (randomNumber === 1) {
        computerSelection = "rock";
    } else if (randomNumber === 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }

    return computerSelection;
}

function getPlayerChoice() {
    let playerSelection = window.prompt("Choose: Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection != "rock" || "paper" || "scissors") {
        playerSelection = window.prompt("Choose: Rock, Paper, or Scissors");
    } else {
        return playerSelection;
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = window.prompt("Choose: Rock, Paper, or Scissors");
        playerSelection = playerSelection.toLowerCase();
        getComputerChoice();
        function playRound(playerSelection, computerSelection) {
        // your code here!
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
