// script.js

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;
    let computerSelection; 
    
    // if 1 then computerSelection = rock
    // if 2 then computerSelection = paper
    // if 3 then computerSelection = scissors

    return computerSelection;
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
