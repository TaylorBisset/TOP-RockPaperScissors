// script.js

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
