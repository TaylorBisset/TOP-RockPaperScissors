// script.js

let computerSelection;
let playerSelection;

let playerWins = 0;
let computerWins = 0;
let ties = 0;

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3) + 1;

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
    playerSelection = window.prompt("Choose: Rock, Paper, or Scissors");
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
        playerSelection = window.prompt("Choose: Rock, Paper, or Scissors");
    }
    
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {

    if (playerSelection === "rock") {
        if (computerSelection === "scissors")
        {
            console.log("You win this round! \nRock beats Scissors!")
            playerWins++;
        } else if (computerSelection === "paper") {
            console.log("You lose this round! \nPaper beats Rock!")
            computerWins++;
        } else {
            console.log("It's a tie!")
            ties++;
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock")
        {
            console.log("You win this round! \nPaper beats Rock!")
            playerWins++;
        } else if (computerSelection === "scissors") {
            console.log("You lose this round! \nScissors beats Paper!")
            computerWins++;
        } else {
            console.log("It's a tie!")
            ties++;
        }
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();
        playRound(playerSelection, computerSelection);
    }
}

console.log(playRound(playerSelection, computerSelection));
