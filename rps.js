let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanSelection) {

    let computerSelection = getComputerChoice();
    let result = "";

    if (humanSelection === computerSelection) {
        result = `It's a tie! You both chose ${humanSelection}.`;
    } else if (
        (humanSelection === "rock" && computerSelection === "scissors") ||
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper")
    ) {
        humanScore += 1;
        result = `You win! ${humanSelection} beats ${computerSelection}.`;
    } else if (
        (humanSelection === "rock" && computerSelection === "paper") ||
        (humanSelection === "paper" && computerSelection === "scissors") ||
        (humanSelection === "scissors" && computerSelection === "rock")
    ) {
        computerScore += 1;
        result = `You lose! ${computerSelection} beats ${humanSelection}.`;
    } else {
        result = "Invalid input. Please choose rock, paper, or scissors.";
    }

    document.getElementById("results").textContent = result;
    document.getElementById("score").textContent = `Score — You: ${humanScore}, Computer: ${computerScore}`;
}