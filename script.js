const possibleHands = ['rock', 'paper', 'scissors'];
let computerScore = 0;
let playerScore = 0;
let totalScore = 0;

function getComputerChoice() 
{
    let randomIndex = Math.floor(Math.random() * possibleHands.length);
    let computerSelection = possibleHands[randomIndex];
    return computerSelection;
}

function getPlayerChoice() 
{
    let playerSelection = prompt('What is your choice?', 'rock/paper/scissors') || '';
    return playerSelection.toLowerCase();
}

function playRound(playerChoice, computerChoice) 
{
    console.log('Computer chooses ' + computerChoice + '.')
    if ((playerChoice === 'scissors' && computerChoice === 'paper') ||
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock')) 
    {   
        totalScore++;
        playerScore++;
        return 'You won this round.';        
    }
    else if ((playerChoice === 'scissors' && computerChoice === 'rock')||
        (playerChoice === 'rock' && computerChoice === 'paper')||
        (playerChoice === 'paper' && computerChoice === 'scissors'))
    {
        totalScore++;
        computerScore++;
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
    for (totalScore = 0; totalScore < 5;) 
    {
        console.log(playRound(getPlayerChoice(), getComputerChoice()));
    }
    if (playerScore > computerScore) 
    {
    console.log('You won the whole game ' + playerScore + ' to ' + computerScore + '!');
    } 
    else 
    {
    console.log('You lost the game ' + computerScore + ' to ' + playerScore + '!');
    }
}

game()