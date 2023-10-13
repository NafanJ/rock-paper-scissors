const possibleChoices = ["rock", "paper", "scissors"]

function getComputerChoice(){
    const randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return randomChoice;
}

function getPlayerChoice(){
    let playerChoice = prompt("Rock, Paper or Scissors?");
    if (!playerChoice) {
        alert("You didn't choose anything! Try again!")
        getPlayerChoice();
    } 
    return playerChoice.toLowerCase();
}

function playRound(playerSelection, computerSelection){
    if (!possibleChoices.includes(playerSelection)){
        alert("That isn't one of the options! Try again!")
        playRound(getPlayerChoice(), getComputerChoice());
    }

    if (playerSelection === computerSelection){
        console.log("DRAW!")
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors"){
            console.log("You win! Rock beats Scissors")
        } else {
            console.log("You lose! Paper beats rock")
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock"){
            console.log("You win! Paper beats rock")
        } else {
            console.log("You lose! Scissors beats paper")
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper"){
            console.log("You win! Scissors beats paper")
        } else {
            console.log("You lose! Rock beats scissors")
        }
    }
}

function game(){
    for (let i = 0; i < 5; i++){
        console.log(`Round ${i + 1}`)
        playRound(getPlayerChoice(), getComputerChoice());
    }
}

game();
