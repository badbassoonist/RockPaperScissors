let playerScore = 0;
let compScore = 0;
let rounds = 0;
let currentlyPlaying = true;
let result;

let scoreboard = document.getElementById('scoreboard');
let round = document.getElementById('round');
let rock = document.getElementById('rock'); 
let paper = document.getElementById('paper'); 
let scissors = document.getElementById('scissors');
let gameStatus = document.getElementById('status');

// User choice:
rock.addEventListener('click', function() {
  if (rounds < 5) {
    return playRound('rock');
  } else {
    currentlyPlaying === false;
  }
});

paper.addEventListener('click', function() {
  if (rounds < 5) {
    return playRound('paper');
  } else {
    currentlyPlaying === false;
  }
});

scissors.addEventListener('click', function() {
  if (rounds < 5) {
    return playRound('scissors');
  } else {
    currentlyPlaying === false;
  }
});

// Get computer choice
function computerPlay() {
  let random = Math.floor(Math.random() * 3),
  choice;
  switch(random) {
    case 0:
      choice = 'rock';
      break;
    case 1:
      choice = 'paper';
      break;
    case 2:
      choice = 'scissors';
      break;
  }
  return choice;
}

function playRound(playerSelection) {
  let computerSelection = computerPlay();
  rounds++;
  // To avoid having "Round 6/5" display or game ending a round early:
  rounds < 5 ? round.textContent = `Round ${rounds + 1}/5` : round.textContent = `Round ${rounds}/5`;

  // Draw
  if (playerSelection === computerSelection) {
    scoreboard.textContent = `${playerScore} : ${compScore}`;
  }
  // Player Wins
  else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') || (playerSelection === 'paper' && computerSelection === 'rock') || (playerSelection === 'scissors' && computerSelection === 'paper')) {
    playerScore++;
    scoreboard.textContent = `${playerScore} : ${compScore}`;
  }
  // Computer Wins
  else if (
    (computerSelection === 'rock' && playerSelection === 'scissors') || (computerSelection === 'paper' && playerSelection === 'rock') || (computerSelection === 'scissors' && playerSelection === 'paper')) {
    compScore++;
    scoreboard.textContent = `${playerScore} : ${compScore}`;
  }

  // Update game status
  if (playerScore > compScore) {
    gameStatus.textContent = `I chose ${computerSelection}. You're ahead! For now...`;
  } else if (playerScore < compScore) {
    gameStatus.textContent = `I chose ${computerSelection}. Better catch up!`;
  } else if (playerScore === compScore) {
    gameStatus.textContent = `I chose ${computerSelection}. It seems I am only as worthy as you, human.`;
  }
  if (rounds === 5) {
      if (playerScore > compScore) result = 'You win';
      else if (compScore > playerScore) result = 'You lose';
      else result = 'It\'s a draw';
      round.textContent = 'GAME OVER';
      gameStatus.style.backgroundColor = '#ddd';
      gameStatus.innerHTML = `I chose ${computerSelection}. ${result}! <br><strong style="calc(font-size: 1.3rem + 0.6vw)">Play again?</strong>`;
  }
  return gameStatus;
}

gameStatus.addEventListener('click', reset);

function reset() {
  if (rounds === 5) {
    return playerScore = 0,
    compScore = 0,
    rounds = 0,
    scoreboard.textContent = `${playerScore} : ${compScore}`,
    round.textContent = `Round ${rounds + 1}/5`,
    gameStatus.textContent = 'Good luck!',
    gameStatus.style.backgroundColor = '#fff',
    currentlyPlaying = true;
  } else {
    return gameStatus.textContent = 'Finish the game, silly!';
  }
}