const possibleHands = ['rock', 'paper', 'scissor'];

function getComputerChoice() {
    let randomIndex = Math.floor(Math.random() * possibleHands.length);
    let computerChoice = possibleHands[randomIndex];
    return computerChoice;
}

function getPlayerChoice() {
    let playerSelection = prompt("What is your choice?", "rock/paper/scissor");
    return playerSelection;
}