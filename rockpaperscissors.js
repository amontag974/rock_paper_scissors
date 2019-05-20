function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);

    if (randomNumber == 0) {
        return 'Rock';
    } else if (randomNumber == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playerPlay(e) {
    let playerSelection = e.target.id;
    return playerSelection;
}

function playRound(e) {
    let computerSelection = computerPlay();
    let playerSelection = playerPlay(e);
    if (playerSelection == 'rock') {
        switch(computerSelection) {
            case "Rock":
                roundAlert.textContent = "It's a tie! Pick again"
                break;

            case "Paper":
                roundAlert.textContent = "Computer Wins! Paper beats Rock";
                updateComputerScore();
                break;

            case "Scissors":
                roundAlert.textContent = "You Win! Rock beats Scissors";
                updatePlayerScore();
                break;
        }
    } else if (playerSelection == 'paper') {
        switch(computerSelection) {
            case "Rock":
                roundAlert.textContent = "You Win! Paper beats Rock";
                updatePlayerScore();
                break;

            case "Paper":
                roundAlert.textContent = "It's a tie! Pick again"
                break;

            case "Scissors":
                roundAlert.textContent = "Computer Wins! Scissors beats Paper";
                updateComputerScore();
                break;
        }
    } else if (playerSelection == 'scissors') {
        switch(computerSelection) {
            case "Rock":
                roundAlert.textContent = "Computer Wins! Rock beats Scissors";
                updateComputerScore();
                break;

            case "Paper":
                roundAlert.textContent = "You Win! Scissors beats Paper";
                updatePlayerScore();
                break;

            case "Scissors":
                roundAlert.textContent = "It's a tie! Pick again"
                break;
        }
    }
    declareWinner();
}

function updateComputerScore() {
    computerScore.textContent = parseInt(computerScore.textContent) + 1;
}

function updatePlayerScore(){
    playerScore.textContent = parseInt(playerScore.textContent) + 1;
}

function declareWinner() {

    if (playerScore.textContent == "5") {
        roundAlert.textContent = "You Win!"
        buttons.forEach(button => button.removeEventListener('click', playRound));
        resetGame();
    } else if (computerScore.textContent == "5") {
        roundAlert.textContent = "Computer Wins!";
        buttons.forEach(button => button.removeEventListener('click', playRound));
        resetGame();
    }
}

function resetGame() {
    const div = document.createElement('div');
    div.setAttribute('class','reset');
    div.innerHTML = "<h3>RESET</h3>";
    body.appendChild(div);
    const resetButton = document.querySelector('.reset');
    resetButton.addEventListener('click', reset);

}

function reset(e) {
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    roundAlert.textContent = "Select to start the game. First to 5 wins";
    this.removeEventListener('click', reset);
    body.removeChild(this);
    const buttons = document.querySelectorAll('.button');
    buttons.forEach(button => button.addEventListener('click', playRound));

}

let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.comp-score');
let roundAlert = document.querySelector('.round-alert')
let body = document.querySelector('body');

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', playRound));
