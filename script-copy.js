function playRound(playerSelection, computerSelection) {
  let playerChoice = playerSelection.toLowerCase();
  // Draw
  if (playerChoice === computerSelection) {
    return 'Draw';
  } 
  // Player Wins
  else if ((playerChoice === 'rock' && computerSelection === 'scissors') || (playerChoice === 'paper' && computerSelection === 'rock') || (playerChoice === 'scissors' && computerSelection === 'paper')) {
    return `You win! ${playerChoice[0].toUpperCase() + playerChoice.slice(1)} beats ${computerSelection[0].toUpperCase() + computerSelection.slice(1)}.`; 
  } 
  // Computer Wins
  else {
    return `You lose! ${computerSelection[0].toUpperCase() + computerSelection.slice(1)} beats ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}.`;
  }
}

function game(user) {
  /*let user = prompt('Rock, paper, or scissors?')*/
  for (let i = 0; i < 5; i++) {
    document.write(playRound(user, computerPlay()) + '<br>');
  }
}

//game();