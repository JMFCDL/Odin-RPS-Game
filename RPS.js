const min = 1
const max = 3
let choice;

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

function getPlayerChoice(choice) {
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

function oneRound(playerSelection, computerSelection) {
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

let computerSelection = getComputerChoice(min,max);
let playerSelection = getPlayerChoice(choice);
let result = oneRound(playerSelection, computerSelection)
console.log("the computer chose " + computerSelection) //prints out computer choice
console.log("the player chose " + playerSelection) //prints out player choice
console.log(result) //result of the round one game