const min = 1;
const max = 3;
let score_computer = 0;
let score_player = 0;

function getComputerChoice(min,max) { 
    let random_int = Math.floor(Math.random() * (max-min+1)) + min; //getting random value between 1 to 3
    switch(random_int) { //setting value to either Rock, Paper, Scissors depending on random_int
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
    }
}

function getPlayerChoice() {
    let num = "choice";
    while(isNaN(num) === true) { //makes sure num is integer
        do {
            num = prompt("Please input a number between 1-3(1 for Rock, 2 for Paper, 3 for Scissors): ");
        } while(num <= 0 || num > 3); //makes sure num is between 1 to 3
    }
    switch(+num) { //need + to make sure num is a integer, instead of a string number like "1"
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissor";
    }
}

function oneRoundWinner(playerSelection, computerSelection) { //who won based on choices
    if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "paper beats rock, Computer has won";
        } else if (computerSelection === "scissor") {
            return "rock beats scissor, Player has won";
        }
    }

    if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "paper beats rock, Player has won";
        } else if (computerSelection === "scissor") {
            return "scissor beats paper, Computer has won";
        }
    }

    if (playerSelection === "scissor") {
        if (computerSelection === "paper") {
            return "scissor beats paper, Player has won";
        } else if (computerSelection === "rock") {
            return "rock beats scissor, Computer has won";
        }
    }

    if(playerSelection === computerSelection){
        return `${playerSelection} and ${computerSelection} are the same, so it's a tie!`
    }
}

function fullGame() {
    let round_counter = 1;
    while(round_counter < 6) { //game is based on 5 rounds
        console.log("Round " + round_counter);
        let outcome = oneRound(); //one round
        if (outcome.includes("Computer has won")) { //adding scores to player or computer depending on string content of outcome
            score_computer += 1;
        } else if (outcome.includes("Player has won")) {
            score_player += 1; 
        } else if (outcome.includes("tie")) {
            score_player += 1;
            score_computer += 1;
        }
        console.log("Computer score is " + score_computer); //player sees current score after round is finished
        console.log("Player score is " + score_player);
        round_counter += 1; //increments round
    }
    if (score_player > score_computer) {
        return `player has won with ${score_player} score versus computer with ${score_computer} score`;
    } else if (score_player < score_computer) {
        return `computer has won with ${score_computer} score versus player with ${score_player} score`;
    } else {
        return `a tie between player and computer, they both got ${score_player}`;
    }
}

function oneRound() {
    let computerSelection = getComputerChoice(min,max);
    let playerSelection = getPlayerChoice();
    let result = oneRoundWinner(playerSelection, computerSelection);
    console.log("the computer chose " + computerSelection); //prints out computer choice
    console.log("the player chose " + playerSelection); //prints out player choice
    console.log(result); //result of the round one game
    return result;
}

let game = fullGame();
console.log("The game resulted in " + game);