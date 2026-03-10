// grab the elements from the HTML
// the form element
const form = document.querySelector("#gameForm");
// the dropdown
const userChoiceInput = document.querySelector("#userChoice");
// the results box
const resultsDiv = document.querySelector("#results");
// where we show user's choice
const userResultP = document.querySelector("#userResult");
// where we show computer's choice
const computerResultP = document.querySelector("#computerResult");
// where we show who won
const winnerP = document.querySelector("#winner");

// ---- functions ----

// this function runs first when the user clicks Submit
function handleSubmit(event) {
  // step 1: stop the page from reloading
  event.preventDefault();

  // step 2: get the user's choice from the dropdown
  const userChoice = userChoiceInput.value;

  // step 3: get the computer's random choice
  const computerChoice = getComputerChoice();

  // step 4: compare both choices and find the winner
  const winner = decideWinner(userChoice, computerChoice);

  // step 5: show everything on the page
  renderResult(userChoice, computerChoice, winner);
}

// this function picks a random choice for the computer
function getComputerChoice() {
  // array with all 3 options
  const choices = ["rock", "paper", "scissors"];
  // pick a random number (0, 1, or 2)
  const randomIndex = Math.floor(Math.random() * choices.length);
  // return the random choice (rock, paper, or scissors)
  return choices[randomIndex];
}

// this function compares both choices and decides who won
function decideWinner(userChoice, computerChoice) {
  // if both choices are the same, it's a tie
  if (userChoice === computerChoice) {
    return "Tie";
  }
  // if the user wins with one of these combinations, return "You"
  if (
    // rock beats scissors
    (userChoice === "rock" && computerChoice === "scissors") ||
    // paper beats rock
    (userChoice === "paper" && computerChoice === "rock") ||
    // scissors beats paper
    (userChoice === "scissors" && computerChoice === "paper")
  ) {
    return "You";
  }
  // if none of the above, the computer wins
  return "Computer";
}

// this function shows the results on the page
function renderResult(userChoice, computerChoice, winner) {
  // print to the console (for testing/checking)
  console.log("your choice is:", userChoice);
  console.log("the computer's choice is:", computerChoice);
  console.log(winner, "WINNER");

  // show the choices on the page
  userResultP.textContent = "Your choice: " + userChoice;
  computerResultP.textContent = "Computer's choice: " + computerChoice;

  // show who won
  if (winner === "Tie") {
    // if it's a tie
    winnerP.textContent = "It's a Tie!";
  } // when you win
  else if (winner === "You") {
    winnerP.textContent = "You WIN!";
    // when the computer wins
  } else {
    winnerP.textContent = "Computer WINS!";
  }
  // make the results box visible
  resultsDiv.style.display = "block";
}

// When the user submits the form
form.addEventListener("submit", handleSubmit);
