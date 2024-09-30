
let choices = ["rock", "paper", "scissors"];
let playerDisplay = document.getElementById("playerDisplay");
let computerDisplay = document.getElementById("computerDisplay");
let resultDisplay = document.getElementById("resultDisplay");
let playerScoreDisplay = document.getElementById("playerScoreDisplay");
let computerScoreDisplay = document.getElementById("computerScoreDisplay");
let tieScoreDisplay = document.getElementById("tieScoreDisplay");

let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

function PlayGame(PlayerChoice) {
    let computerChoice = choices[Math.floor(Math.random() * 3)];
    let result = "";  

    if (PlayerChoice.toLowerCase() === computerChoice) { 
        result = "IT'S A TIE!";
        tieScore++;
        tieScoreDisplay.textContent = tieScore;
    } else {
        switch (PlayerChoice.toLowerCase()) {
            case "rock":
            result = (computerChoice === "scissors") ? "YOU WIN!" : "YOU LOSE!";
            break;
            case "paper":
            result = (computerChoice === "rock") ? "YOU WIN!" : "YOU LOSE!";
            break;
            case "scissors":
            result = (computerChoice === "paper") ? "YOU WIN!" : "YOU LOSE!";
            break;
        }
        if (result === "YOU WIN!") {
            playerScore++;
            playerScoreDisplay.textContent = playerScore;
        } else if (result === "YOU LOSE!") {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
        }
    }
    playerDisplay.textContent = `Player: ${PlayerChoice}`;
    computerDisplay.textContent = `Computer: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText", "tieText");

    if (result === "YOU WIN!") {
        resultDisplay.classList.add("greenText");
    } else if (result === "YOU LOSE!") {
        resultDisplay.classList.add("redText");
    } else if (result === "IT'S A TIE!") {
        resultDisplay.classList.add("tieText");
    }
}
    
    