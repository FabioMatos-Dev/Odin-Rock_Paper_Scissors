console.log("Hello World!");

// Global variables to track scores
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const number = Math.floor(Math.random() * 3) + 1;

    if (number === 1) {
        return "Rock";
    } else if (number === 2) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function getHumanChoice() {
    let choice = prompt("Please enter Rock, Paper, or Scissors:").trim().toLowerCase();

    if (choice === "rock" || choice === "paper" || choice === "scissors") {
        return choice.charAt(0).toUpperCase() + choice.slice(1); // Capitalize the first letter
    } else {
        alert("Invalid choice! Please enter Rock, Paper, or Scissors.");
        return getHumanChoice();
    }
}

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();

    // Compare choices and decide winner
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
        return;
    }

    if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        console.log(`You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}`);
        humanScore++;
    } else {
        console.log(`You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)}`);
        computerScore++;
    }
}

function playGame() {
    humanScore = 0;
    computerScore = 0;

    // Play 5 rounds
    for (let i = 1; i <= 5; i++) {
        console.log(`Round ${i}:`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`Score: You - ${humanScore}, Computer - ${computerScore}\n`);
    }

    // Final result
    if (humanScore > computerScore) {
        console.log(`Congrats! You won the game with a score of ${humanScore} to ${computerScore}.`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game. The computer won with a score of ${computerScore} to ${humanScore}.`);
    } else {
        console.log(`It's a tie! Final score: ${humanScore} to ${computerScore}.`);
    }
}

// Start the game
playGame();
