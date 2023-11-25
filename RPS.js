const min = 1
const max = 3
let choice;

function getComputerChoice(min,max) { 
    let random_int = Math.floor(Math.random() * (max-min+1)) + min; //getting random value between 1 to 3
    switch(random_int) { //setting value to either Rock, Paper, Scissors depending on random_int
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors"
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
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors"
    }
}

let computerSelection = getComputerChoice(min,max);
let playerSelection = getPlayerChoice(choice);
console.log(computerSelection)
console.log(playerSelection)