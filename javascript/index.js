const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");


// when we click button say rock playerChoice becomes rock then computer choice becomes abc randomly picked...

const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
}

const displayImage = (playerChoice, computerChoice) => {
    const playerChoiceImg = document.querySelector(".player-choice-img");
    const computerChoiceImg = document.querySelector(".computer-choice-img");
    // const choiceButton = document.createElement("button");

    playerChoiceImg.innerHTML = "";
    computerChoiceImg.innerHTML = "";

    const createImage = (src) => {
        const choiceImg = document.createElement("img");
        choiceImg.src = src;
        choiceImg.style.width = "140px";
        choiceImg.style.height = "auto";
        return choiceImg;
    }

    const playerImg = createImage(`images/${playerChoice}.png`);
    playerChoiceImg.appendChild(playerImg);

    const computerImg = createImage(`images/${computerChoice}.png`);
    computerChoiceImg.appendChild(computerImg);
}

const playRound = (playerChoice, computerChoice) => {

    const resultMessage = document.querySelector("#results-message");
    const roundMessage = roundMessages(playerChoice, computerChoice);

    if (playerChoice === computerChoice) {
        roundMessage;
        resultMessage.textContent = "";
        resultMessage.textContent = `It is a tie`;
        displayImage(playerChoice, computerChoice);

    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock") {
        roundMessage;
        resultMessage.textContent = "";
        resultMessage.textContent = `You win!`;
        displayImage(playerChoice, computerChoice);

        console.log(`player choice: ${playerChoice}, computer choice: ${computerChoice}`);
    } else {
        console.log(`player choice: ${playerChoice}, computer choice: ${computerChoice}`);
        roundMessage;
        resultMessage.textContent = "";
        resultMessage.textContent = `Computer Wins!`;
        displayImage(playerChoice, computerChoice)

    }
}

const roundMessages = (playerChoice, computerChoice) => {
    const playersChoices = document.querySelector("#choices-message");
    playersChoices.textContent = "";
    playersChoices.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}`;
}

rockButton.addEventListener("click", () => {
    const playerChoice = "rock";
    const computerChoice = generateComputerChoice();
    playRound(playerChoice, computerChoice)
})

paperButton.addEventListener("click", () => {
    const playerChoice = "paper";
    const computerChoice = generateComputerChoice();
    playRound(playerChoice, computerChoice)
})

scissorsButton.addEventListener("click", () => {
    const playerChoice = "scissors";
    const computerChoice = generateComputerChoice()
    playRound(playerChoice, computerChoice)
})
