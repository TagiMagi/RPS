

function getComputerChoice() {
    choices = ['rock', 'paper', 'scissors']
    return choices[Math.floor(3 * Math.random())];
    }

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        alert('Computer chose ' + String(computerSelection) + '. Tie!') ;
        return('Tie! Play again');
    }
    else if ((playerSelection == 'rock' && computerSelection == 'paper') ||
        (playerSelection == 'paper' && computerSelection == 'scissors') ||
        (playerSelection == 'scissors' && computerSelection == 'rock')) {
        alert('Computer chose ' + String(computerSelection) + '. You LOSE!');
        return('Computer chose ' + computerSelection + ' ,so... you LOSE!');
        }
    else {
        alert('Computer chose ' + String(computerSelection) + '. You WIN!');
        return('Computer chose ' + computerSelection + ' ,so... you WIN!');
    }
}

// oneRound(playerChoice, computerChoice)

function game() {
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

game()