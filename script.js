let humanScore = 0;
let computerScore = 0;

//branch feat getchoice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
function getHumanChoice() {
    let choice = prompt("Choose rock, paper, or scissors:").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice. Please choose rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}

function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);

    if (humanChoice === computerChoice) {
        console.log("It's a tie!");
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

function playGame() {
    console.log("Welcome to Rock Paper Scissors! Best of 5 rounds wins.");
    
    for (let i = 0; i < 5; i++) {
        console.log(`\nRound ${i + 1}:`);
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log("\nFinal Scores:");
    console.log(`You: ${humanScore} | Computer: ${computerScore}`);

    if (humanScore > computerScore) {
        console.log("Congratulations! You win the game!");
    } else if (humanScore < computerScore) {
        console.log("Sorry, you lost the game. Better luck next time!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();
