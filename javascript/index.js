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
    // CHeck what has been picked and display a message
    // let playerScore = 0;
    // let computerScore = 0;

    // while(playerScore <= 5 || computerScore <= 5){
    if (playerChoice === computerChoice) {

        const playersChoices = document.querySelector(".choices-message")
        console.log(playersChoices)
        // Manipuate the dom and show on browser
        // const computerChoiceText = document.querySelector("#computer-selection");
        // const playerChoiceText = document.querySelector("#player-selection");

        // computerChoiceText.textContent = `Computer selected: ${computerChoice}`;
        // playerChoiceText.textContent = `Player Selected: ${playerChoice}`;
        // }
    }
}