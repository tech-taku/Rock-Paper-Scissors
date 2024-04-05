const rockButton = document.querySelector("#rock-btn");
const paperButton = document.querySelector("#paper-btn");
const scissorsButton = document.querySelector("#scissors-btn");


// when we click button say rock playerChoice becomes rock then computer choice becomes abc randomly picked...

const generateComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)]
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

const playRound = (playerChoice, computerChoice) => {

    const resultMessage = document.querySelector("#results-message");
    const roundMessage = roundMessages(playerChoice, computerChoice);

    if (playerChoice === computerChoice) {
        roundMessage;
        resultMessage.textContent = "";
        resultMessage.textContent = `It is a tie`;

    } else if (playerChoice === "rock" && computerChoice === "scissors" ||
        playerChoice === "scissors" && computerChoice === "paper" ||
        playerChoice === "paper" && computerChoice === "rock") {
        roundMessage;
        resultMessage.textContent = "";
        resultMessage.textContent = `You win!`;

        console.log(`player choice: ${playerChoice}, computer choice: ${computerChoice}`);
    } else {
        console.log(`player choice: ${playerChoice}, computer choice: ${computerChoice}`);
        roundMessage;
        resultMessage.textContent = "";
        resultMessage.textContent = `Computer Wins!`;

    }
}

const roundMessages = (playerChoice, computerChoice) => {
    const playersChoices = document.querySelector("#choices-message");
    playersChoices.textContent = "";
    playersChoices.textContent = `You chose ${playerChoice} and computer chose ${computerChoice}`;
}