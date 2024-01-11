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

// End the game when CPU or player wins
function endGame(playerWin) {
    console.log("test")
    playerSelectContainer.style.display = "none";
    if (playerWin) {
        endMessage.style.color = "#018786";
        endMessage.textContent = "Congratulations, you win!"
    }
    else {
        endMessage.style.color = "#b00020";
        endMessage.textContent = "Unlucky, you lost!"
    }
    replayContainer.style.display = "flex";
}

// Plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    roundNum++;
    roundLabel.textContent = "Round " + roundNum;
    changeImage(true, playerSelection);
    changeImage(false, computerSelection);
    // win = 1, lose = 0, tie = 2
    let win = 1;
    if (playerSelection===computerSelection) {
        resultLabel.style.color = "#ffffff";
        resultLabel.textContent = "It's a Tie!"
        win = 2;
    }
    else if (playerSelection===1 && computerSelection===2) {
        win = 0;
    }
    else if (playerSelection===2 && computerSelection===3) {
        win = 0;
    }
    else if (playerSelection===3 && computerSelection===1) {
        win = 0;
    }
    if (win===0) {
        computerScore++;
        resultLabel.style.color = "#b00020"
        resultLabel.textContent = "You lost!";
        computerScoreLabel.textContent = computerScore;
    }
    else if (win===1) {
        playerScore++;
        resultLabel.style.color = "#018786"
        resultLabel.textContent = "You won!";
        playerScoreLabel.textContent = playerScore;
    }
    console.log(playerScore)
    if (playerScore>=3) {
        endGame(true);
    }
    else if (computerScore>=3) {
        endGame(false);
    }
}

let playerScore = 0;
let computerScore = 0;
let roundNum = 0;

const roundLabel = document.querySelector("#round-counter");
const resultLabel = document.querySelector("#result-message");
const playerScoreLabel = document.querySelector("#player-score");
const playerChoiceImg = document.querySelector("#player-choice");
const computerScoreLabel = document.querySelector("#cpu-score");
const computerChoiceImg = document.querySelector("#cpu-choice");

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

rockButton.addEventListener("click", () => playRound(1, getComputerChoice()));
paperButton.addEventListener("click", () => playRound(2, getComputerChoice()));
scissorsButton.addEventListener("click", () => playRound(3, getComputerChoice()));

// Needed to restart the game
const playerSelectContainer = document.querySelector(".player-select");
const replayContainer = document.querySelector(".replay");
const endMessage = document.querySelector("#game-over");
const playAgain = document.querySelector("#play-again");

playAgain.addEventListener("click", () => location.reload());