// ----------------------------------------Variables for Score Board
var wins = 0;
var ties = 0;
var losses = 0;

// ----------------------------------------Array for the cumputer to choose from
var options = ["R", "P", "S"];

// ----------------------------------------Alert
// window.alert("Want to play Rock, Paper, Scissors?");

// ----------------------------------------prompt
var playGame = function() {
var playerChoice = window.prompt("Type, R, P or S to play");

// ----------------------------------------If user pressed Cancel, immediately end function
 if (!playerChoice) {
  return;
}

// ----------------------------------------Convert to uppercase to make comparisons easier
playerChoice = playerChoice.toUpperCase();

// ----------------------------------------Get random index from array of options
var index = Math.floor(Math.random() * options.length);
var computerChoice = options[index];

// ----------------------------------------Alert + Aray
window.alert("Computer Chooses: " + computerChoice)
if (playerChoice === computerChoice) {
    ties++;
    window.alert("It's a tie!");

// ----------------------------------------check every win condition for the player
} else if (
  (playerChoice === "R" && computerChoice === "S") ||
  (playerChoice === "P" && computerChoice === "R") ||
  (playerChoice === "S" && computerChoice === "P")
){
  wins++;
  window.alert("You Win!");
// ----------------------------------------If above conditions failed, assume player lost
} else {
  losses++;
  window.alert("You Lost!");
} 

// ----------------------------------------Print stats with line breaks
window.alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties);

// ----------------------------------------Alert #2 Ask player to play again?
var playAgain = window.confirm("Do you want to play again?");

// ----------------------------------------If yes (ok) run the function again:
if (playAgain) {
  playGame();
  }
};

playGame();
