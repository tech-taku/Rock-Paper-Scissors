const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");

let playerScore = 0;
let computerScore = 0;
let gameEnded = false;

const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
};

const handleRockButtonClick = () => {
    const playerChoice = "rock";
    const computerChoice = generateComputerChoice();
    if (!gameEnded) {
        playRound(playerChoice, computerChoice);
    }
};

const handlePaperButtonClick = () => {
    const playerChoice = "paper";
    const computerChoice = generateComputerChoice();
    if (!gameEnded){
        playRound(playerChoice, computerChoice);
    }
};

const handleScissorsButtonClick = () => {
    const playerChoice = "scissors";
    const computerChoice = generateComputerChoice();
    if (!gameEnded) {
        playRound(playerChoice, computerChoice);
    }
};

rockButton.addEventListener("click", handleRockButtonClick);
paperButton.addEventListener("click", handlePaperButtonClick);
scissorsButton.addEventListener("click", handleScissorsButtonClick);

const displayImage = (playerChoice, computerChoice) => {
    const playerChoiceImg = document.querySelector(".player-choice-img");
    const computerChoiceImg = document.querySelector(".computer-choice-img");
    playerChoiceImg.textContent = "";
    computerChoiceImg.textContent = "";

    const createImage = (src) => {
        const choiceImg = document.createElement("img");
        choiceImg.src = src;
        choiceImg.style.width = "140px";
        choiceImg.style.height = "auto";
        return choiceImg;
    };

    const playerImg = createImage(`images/${playerChoice}.png`);
    playerChoiceImg.appendChild(playerImg);

    const computerImg = createImage(`images/${computerChoice}.png`);
    computerChoiceImg.appendChild(computerImg);
};

const displayScore = () => {
    const totalPlayerScore = document.querySelector(".player-score");
    const totalComputerScore = document.querySelector(".computer-score");

    totalPlayerScore.textContent = "";
    totalComputerScore.textContent = "";

    const playerScoreDisplayed = document.createElement("h3");
    playerScoreDisplayed.textContent = `Player: ${playerScore}`;

    const computerScoreDisplayed = document.createElement("h3");
    computerScoreDisplayed.textContent = `Computer: ${computerScore}`;

    totalPlayerScore.appendChild(playerScoreDisplayed);
    totalComputerScore.appendChild(computerScoreDisplayed);
};

const roundMessages = (playerChoice, computerChoice) => {
    const playersChoices = document.querySelector("#choices-message");
    playersChoices.textContent = "";
    playersChoices.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}`;
};

const resultMessage = document.querySelector("#results-message");

const playRound = (playerChoice, computerChoice) => {
    const roundMessage = roundMessages(playerChoice, computerChoice);

    if (playerChoice === computerChoice) {
        roundMessage;
        resultMessage.textContent = "";
        resultMessage.textContent = `It is a tie`;
        displayImage(playerChoice, computerChoice);
        displayScore();
        checkWinner();
    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
               playerChoice === "scissors" && computerChoice === "paper" ||
               playerChoice === "paper" && computerChoice === "rock") {
        roundMessage;
        resultMessage.textContent = "";
        resultMessage.textContent = `You win!`;
        displayImage(playerChoice, computerChoice);
        playerScore++;
        displayScore();
        checkWinner();
    } else {
        roundMessage;
        resultMessage.textContent = "";
        resultMessage.textContent = `Computer Wins!`;
        displayImage(playerChoice, computerChoice);
        computerScore++;
        displayScore();
        checkWinner();
    }
};

const checkWinner = () => {
    if (playerScore === 5){
        winnerMessage("Player");
        gameEnded = true;
    } else if (computerScore === 5) {
        winnerMessage("Computer");
        gameEnded = true;
    }
};

const winnerMessage = (winner) => {
    const  gameWon = document.querySelector("#choices-message");
    gameWon.textContent = `${winner} scored 5 first. ${winner} wins! Refresh Page to Play Again.`;
};

