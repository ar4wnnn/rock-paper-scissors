const possibleHands = ['rock', 'paper', 'scissors'];

function getComputerChoice() 
{
    let randomIndex = Math.floor(Math.random() * possibleHands.length);
    let computerSelection = possibleHands[randomIndex];
    return computerSelection;
}

function getPlayerChoice() 
{
    let playerSelection = prompt('What is your choice?', 'rock/paper/scissors');
    return playerSelection;
}

function playRound(playerChoice, computerChoice) 
{
    console.log('Computer chooses ' + computerChoice + '.')
    if ((playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock')) 
    {
        return 'You won this round.';        
    }
    else if ((playerChoice === 'scissors' && computerChoice === 'rock')||
        (playerChoice === 'rock' && computerChoice === 'paper')||
        (playerChoice === 'paper' && computerChoice === 'scissors'))
    {
        return 'You lost this round.'; 
    }
    else if (playerChoice === computerChoice)
    {
        return 'It\'s a tie.';
    }
    else if (playerChoice != possibleHands)
    {
        return 'You need to choose rock, paper or scissors only!';
    }

}

function game() 
{
    for (let i = 0; i < 5; i++) 
    {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
}

game()