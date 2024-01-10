// Gets the computer's random choice of rock, paper, or scissors
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

// Plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a Tie!");
    } else if (playerSelection === 1) {
        if (computerSelection === 2) {
            console.log("You Lose! Paper beats Rock");
        } else {
            console.log("You Win! Rock beats Scissors");
        }
    } else if (playerSelection === 2) {
        if (computerSelection === 3) {
            console.log("You Lose! Scissors beats Paper");
        } else {
            console.log("You Win! Paper beats Rock");
        }
    } else {
        if (computerSelection === 3) {
            console.log("You Lose! Rock beats Scissors");
        } else {
            console.log("You Win! Scissors beats Paper");
        }
    }
}

let playerScore = 0;
let computerScore = 0;

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound(1, getComputerChoice()))
paperButton.addEventListener("click", () => playRound(2, getComputerChoice()))
scissorsButton.addEventListener("click", () => playRound(3, getComputerChoice()))