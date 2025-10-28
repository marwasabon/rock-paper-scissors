let humanScore = 0;
let computerScore = 0;


//branch feat getchoice
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}
//branch gethuman choice
function getHumanChoice() {
  let choice = prompt("Enter rock, paper, or scissors:");
  return choice.toLowerCase();
}
//branch play
function playRound(humanChoice, computerChoice) {
  return humanChoice === computerChoice
    ? "It's a tie!"
    : (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper")
    ? "You win!"
    : "You lose!";
}
function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    const result = playRound(humanChoice, computerChoice);
    console.log(result);

    if (result.includes("win")) humanScore++;
    else if (result.includes("lose")) computerScore++;
  }

  console.log(`Final Score: You ${humanScore} - Computer ${computerScore}`);
}
 playGame();
