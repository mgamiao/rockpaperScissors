let computerScore = 0;
let playerScore = 0;

function computerPlay() {
    const weapon = ['rock', 'paper', 'scissors'];
    let selectWeapon = Math.floor(Math.random() * weapon.length);
    return weapon[selectWeapon];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'paper') {
      computerScore++;
      document.getElementById("result").textContent = 'You lose! Paper beats Rock.';
      return ('You lose! Paper beats Rock.');

    } else if (playerSelection.toLowerCase() == 'rock' && computerSelection == 'scissors') {
      playerScore++;
      document.getElementById("result").textContent = 'You win! Rock beats Scissors.';
      return ('You win! Rock beats Scissors.');

    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'rock') {
      playerScore++;
      document.getElementById("result").textContent = 'You win! Paper beats Rock.';
      return ('You win! Paper beats Rock.');

    } else if (playerSelection.toLowerCase() == 'paper' && computerSelection == 'scissors') {
      computerScore ++;
      document.getElementById("result").textContent = 'You lose! Scissors beats Paper.';
      return ('You lose! Scissors beats Paper');

    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'rock') {
      computerScore ++;
      document.getElementById("result").textContent = 'You lose! Rock beats Scissors.';
      return ('You lose! Rock beats Scissors');

    } else if (playerSelection.toLowerCase() == 'scissors' && computerSelection == 'paper') {
      playerScore++;
      document.getElementById("result").textContent = 'You win! Scissors beats Paper.';
      return ('You win! Scissors beats Paper');

    } else {
      document.getElementById("result").textContent = "It's a tie!";
      return ("It's a tie!");
    }
}

function game() {
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        let playerSelection = button.id;
        playRound(playerSelection, computerPlay());
        document.getElementById("playerScore").textContent = `Player: ` + playerScore; 
        document.getElementById("computerScore").textContent = `Computer: ` + computerScore;

        if (playerScore < 5 && computerScore < 5) {

        } else {
          if (playerScore > computerScore) {
            alert('You won!');
            round.textContent = "Score";
            playerScore = 0;
            computerScore = 0;
            document.getElementById("playerScore").textContent = "Player: 0";
            document.getElementById("computerScore").textContent = "Computer: 0";
            document.getElementById("result").textContent = "";

          } else if (playerScore < computerScore) {
            alert('You lose!');
            round.textContent = "Score";
            playerScore = 0;
            computerScore = 0;
            document.getElementById("playerScore").textContent = "Player: 0";
            document.getElementById("computerScore").textContent = "Computer: 0";
            document.getElementById("result").textContent = "";
            
            
          }
      }
    });
    });
}
game();