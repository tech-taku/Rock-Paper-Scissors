const choices = ['Rock', 'Paper', 'Scissors']

// Declare an array choices to select our choices from.

const playerChoice = prompt("This is a 'Rock', 'Paper', 'Scissors' game. Which do you choose? ").toLowerCase();

const computerChoice = choices[Math.floor(Math.random() * choices.length)].toLowerCase();


console.log('Player chose: ', playerChoice)
console.log('Computer chose', computerChoice)



if (playerChoice === computerChoice) {

    console.log(`Player chose ${playerChoice} and Computer chose ${computerChoice}. it is a draw`)
} else if ((playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'scissors' && computerChoice === 'paper') ||
    (playerChoice === 'paper' && computerChoice === 'rock')) {
    console.log(`Player choice is ${playerChoice} and Computer choice is ${computerChoice}. Player Wins`);
} else {
    console.log(`Computer choice is ${computerChoice} and Player choice is ${playerChoice}. Computer Wins`);
}