

let rounds = 0; 
let computerScore = 0;
let playerScore = 0; 

function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(3 * Math.random())];
    }


function playRound() {
    
    const computerSelection = getComputerChoice();
    const playerSelection = this.textContent;

    if (rounds < 5) {

        if (playerSelection == computerSelection) {
            resultBox.textContent = 'Tie!';
        }
        else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
            (playerSelection == 'paper' && computerSelection == 'scissors') ||
            (playerSelection == 'scissors' && computerSelection == 'rock')) {
            computerScore++;
            computerScoreBox.textContent = `Computer Score: ${computerScore}`
            resultBox.textContent = `Computer chose ${computerSelection}, so... you LOSE!`;
        }
        else {
            playerScore++;
            playerScoreBox.textContent = `Player Score: ${playerScore}`
            resultBox.textContent = `Computer chose ${computerSelection}, so... you WIN!`;
        }
        rounds++;
    } else {
        resultBox.textContent = `Game Over! Final score: you = ${playerScore} Computer = ${computerScore}. Refresh to play again!`
        playerScore = 0;
        computerScore = 0;
        
    }

}
// oneRound(playerChoice, computerChoice)

/* function game() {
    let you = 0;
    let computer = 0;
    let tie = 0;
   
     for (let i = 1; i <= 5; i++) {
        const computerChoice = getComputerChoice();
        const playerPrompt = prompt("Please enter 'rock' 'paper' or 'scissors' : ");
        const playerChoice = playerPrompt.toLowerCase();
        
        let round = playRound(playerChoice, computerChoice)
            let roundReversed = round.split(' ').reverse();
            if (roundReversed[0] == 'again')
                tie += 1;
            else if (roundReversed[0] == 'LOSE!')
                computer += 1;
            else 
                you +=1; 
    }
console.log('Game Over. Final Score: You = ' + String(you) + ' Computer = ' + String(computer)
+ ' Tie = ' + String(tie))
}
*/

/* const rockButton = document.querySelector('.rock');
const paperButton = document.querySelector('.paper');
const scissorsButton = document.querySelector('.scissors');
const resultBox = document.querySelector('#results');
rockButton.addEventListener('click' , playRound)*/
const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click' , playRound));
const resultBox = document.querySelector('.results');
const playerScoreBox = document.querySelector('.playerScore');
const computerScoreBox = document.querySelector('.computerScore');

// game()