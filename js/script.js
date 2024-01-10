// Gets the computer's random choice of rock, paper, or scissors
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

// Plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection) {
        return "It's a Tie!"
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You Lose! Scissors beats Paper";
        } else {
            return "You Win! Paper beats Rock";
        }
    } else {
        if (computerSelection === "rock") {
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    }
}

// Plays 5 rounds of rock paper scissors
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Enter rock, paper, scissors:")
        console.log(playRound(playerSelection, getComputerChoice()))
    }
}
