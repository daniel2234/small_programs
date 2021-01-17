//Rock Paper Scissors Lizard Spock

const readline = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

let totalComputerScore = 0;
let totalPlayerScore = 0;
let play = true;

function prompt(message) {
  console.log(`=> ${message}`);
}

function shortenedInputPrompt(choices) {
  let shortenedChoices = choices.map((choice) => `${choice[0]} for ${choice}`);
  return shortenedChoices;
}

function shortenedChoices(choices) {
  let shortenedChoices = choices.map((choice) => choice[0]);
  return shortenedChoices;
}

function shortenCharacterChoice(choice) {
  switch (choice) {
    case 'r': return VALID_CHOICES[0];
    case 's':
      while (!['scissors', 'spock'].includes(choice)) {
        prompt( "'s' for 'scissors' or 's' for 'spock' Please type the word:");
        choice = readline.question().toLowerCase();
      }
      if (choice === 'scissors') {
        return VALID_CHOICES[2];
      } else if (choice === 'spock') {
        return VALID_CHOICES[4];
      }
      break;
    case 'p': return VALID_CHOICES[1];
    case 'l': return VALID_CHOICES[3];
  }
  return choice;
}

function didPlayerWin(choice, computerChoice) {
  return (choice === 'rock' && computerChoice === 'scissors') ||
    (choice === 'paper' && computerChoice === 'rock') ||
    (choice === 'scissors' && computerChoice === 'paper') ||
    (choice === 'lizard' && computerChoice === 'spock') ||
    (choice === 'rock' && computerChoice === 'lizard') ||
    (choice === 'spock' && computerChoice === 'scissors') ||
    (choice === 'spock' && computerChoice === 'rock') ||
    (choice === 'lizard' && computerChoice === 'paper') ||
    (choice === 'paper' && computerChoice === 'spock') ||
    (choice === 'scissors' && computerChoice === 'lizard');
}

function didComputerWin(choice, computerChoice) {
  return !didPlayerWin(choice, computerChoice);
}

function trackPlayerScore(choice, computerChoice) {
  let playerScore = 0;
  let playerWin = didPlayerWin(choice, computerChoice);
  if (playerWin) {
    playerScore += 1;
  }
  return playerScore;
}

function trackComputerScore(choice, computerChoice) {
  let computerScore = 0;
  let computerWin = didComputerWin(choice, computerChoice);
  if (computerWin) {
    computerScore += 1;
  }
  return computerScore;
}

function displayResults(
  choice,
  computerChoice,
  playerScore,
  computerScore,
  totalPlayerScore,
  totalComputerScore) {
  prompt(`Your choice: ${choice}`);
  prompt(`Computer choice: ${computerChoice}`);
  prompt(`Player round score:${playerScore}`);
  prompt(`Computer round score: ${computerScore}`);
  prompt(`Player Total Score: ${totalPlayerScore}`);
  prompt(`Total Computer Score: ${totalComputerScore}`);
}

function playAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();
  console.log(answer[0]);
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer === 'n') {
    play = false;
  }
  resetScore();
}

function resetScore() {
  totalComputerScore = 0;
  totalPlayerScore = 0;
}
while (play) {

  prompt(`Choose one: ${shortenedInputPrompt(VALID_CHOICES).join(', ')}`);
  let choice = readline.question();

  while (!shortenedChoices(VALID_CHOICES).includes(choice)) {
    prompt("Thats not a valid choice");
    choice = readline.question();
  }

  choice = shortenCharacterChoice(choice);

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];

  let playerDidWinRound = didPlayerWin(choice, computerChoice);
  let computerDidWinRound = didComputerWin(choice, computerChoice);
  let playerScore = trackPlayerScore(choice, computerChoice);
  let computerScore = trackComputerScore(choice, computerChoice);

  if (playerDidWinRound) {
    totalPlayerScore += playerScore;
  } else if (computerDidWinRound) {
    totalComputerScore += computerScore;
  } else {
    prompt(`its tie round`);
  }

  displayResults(
    choice,
    computerChoice,
    playerScore,
    computerScore,
    totalPlayerScore,
    totalComputerScore);

  if (totalComputerScore === 5) {
    prompt("Computer won the game.");
    playAgain();
  } else if (totalPlayerScore === 5) {
    prompt("Player wins the game");
    playAgain();
  }
}