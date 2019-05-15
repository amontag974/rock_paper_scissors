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

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        switch(computerSelection) {
            case "Rock":
                console.log("It's a tie! Pick again");
                pickAndPlay();
                break;

            case "Paper":
                lossCount +=1;
                return "You Lose! Paper beats Rock";

            case "Scissors":
                winCount +=1;
                return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection == 'paper') {
        switch(computerSelection) {
            case "Rock":
                winCount +=1;
                return "You Win! Paper beats Rock";

            case "Paper":
                console.log("It's a tie! Pick again");
                pickAndPlay();
                break;

            case "Scissors":
                lossCount +=1;
                return "You Lose! Scissors beats Paper";
        }
    } else if (playerSelection == 'scissors') {
        switch(computerSelection) {
            case "Rock":
                lossCount +=1;
                return "You Lose! Rock beats Scissors";

            case "Paper":
                winCount +=1;
                return "You Win! Scissors beats Paper";

            case "Scissors":
                console.log("It's a tie! Pick again");
                pickAndPlay();
                break;
        }
    } 
}
    
function numWins(winCount) {
    return winCount;
}

function numLosses(lossCount){
    return lossCount;
}

function declareWinner() {
    if (numWins(winCount)>numLosses(lossCount)) {
        return "Player wins!";
    } else (numWins(winCount)<numLosses(lossCount)) 
        return "Computer wins!";
}

function playerPlay(){
    let playerSelection = prompt("Please make your seleciton").toLowerCase();
    while(playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors"){
        playerSelection = prompt("Please enter a vaild choice").toLowerCase();
    }
    return playerSelection;
}

function pickAndPlay() {
    const playerSelection = playerPlay();
    const computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
}
    
let winCount = 0;
let lossCount = 0;
let tieCount = 0;

function game(){

    for (round = 0; round < 5; round++){
        pickAndPlay();
    }
    console.log("Record: " + winCount + "-" + lossCount);
    console.log(declareWinner());
} 
game();