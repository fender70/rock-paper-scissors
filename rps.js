let humanScore = 0;
let computerScore = 0;

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?").toLowerCase();
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanSelection, computerSelection) {
    if (humanSelection === computerSelection) {
        console.log(`It's a tie! You both chose ${humanSelection}.`);
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore += 1;
        console.log(`You win! ${humanSelection} beats ${computerSelection}.`);
    } else if (
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore += 1;
        console.log(`You lose! ${computerSelection} beats ${humanSelection}.`);
    } else {
        console.log("Invalid input. Please choose rock, paper, or scissors.");
    }

    console.log(`Score — You: ${humanScore}, Computer: ${computerScore}`);
}

// One round example:
const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

playRound(humanChoice, computerChoice);
