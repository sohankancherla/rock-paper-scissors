// Gets the computer's random choice of rock, paper, or scissors
function getComputerChoice() {
    return Math.floor(Math.random() * 3) + 1;
}

// Change the player and CPU image based on their choice
function changeImage(player, choice) {
    if (player) {
        if (choice===1) {
            playerChoiceImg.src = "./images/rock128.png";
            playerChoiceImg.alt = "rock";
        }
        else if (choice===2) {
            playerChoiceImg.src = "./images/paper128.png";
            playerChoiceImg.alt = "paper";
        }
        else {
            playerChoiceImg.src = "./images/scissors128.png";
            playerChoiceImg.alt = "scissors";
        }
    }
    else {
        if (choice===1) {
            computerChoiceImg.src = "./images/rock128.png";
            computerChoiceImg.alt = "rock";
        }
        else if (choice===2) {
            computerChoiceImg.src = "./images/paper128.png";
            computerChoiceImg.alt = "paper";
        }
        else {
            computerChoiceImg.src = "./images/scissors128.png";
            computerChoiceImg.alt = "scissors";
        }
    }
}

// Plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    roundNum++;
    roundLabel.textContent = "Round " + roundNum;
    changeImage(true, playerSelection);
    changeImage(false, computerSelection);
    
}

let playerScore = 0;
let computerScore = 0;
let roundNum = 0;

const roundLabel = document.querySelector("#round-counter");
const resultLabel = document.querySelector("#result-message");
const playerScoreLabel = document.querySelector("#player-score");
const playerChoiceImg = document.querySelector("#player-choice");
console.log(playerChoiceImg)
const computerScoreLabel = document.querySelector("#cpu-score");
const computerChoiceImg = document.querySelector("#cpu-choice");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound(1, getComputerChoice()));
paperButton.addEventListener("click", () => playRound(2, getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound(3, getComputerChoice()));