const possibleChoices = ["rock", "paper", "scissors"]
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    const randomChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
    return randomChoice;
}

// Get Playing Card ID and set to playerChoice
const onClick = (event) => {
    const playerChoice = event.srcElement.id
    playRound(playerChoice, getComputerChoice())
}

const playingCards = document.getElementsByClassName('playingCard')
    for (let i = 0; i < playingCards.length; i++) {
        playingCards[i].onclick = onClick;
    }

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        console.log("DRAW!")
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            console.log("You win! Rock beats Scissors")
            playerWins++;
        } else {
            console.log("You lose! Paper beats rock")
            computerWins++;
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            console.log("You win! Paper beats rock")
            playerWins++;
        } else {
            console.log("You lose! Scissors beats paper")
            computerWins++;
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            console.log("You win! Scissors beats paper")
            playerWins++;
        } else {
            console.log("You lose! Rock beats scissors")
            computerWins++;
        }
    }
    displayResults();
}

function displayResults(){
    const resultsNode = document.querySelector(".results")
    results = document.createElement('p')
    results.innerText = `Player - ${playerWins}:${computerWins} - Computer`
    resultsNode.appendChild(results)

}


