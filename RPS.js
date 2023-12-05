
const min = 1;
const max = 3;
let score_computer = 0;
let score_player = 0;
let player_choice = "";
let waitForBtnClickResolve;

function getComputerChoice(min,max) { 
    let random_int = Math.floor(Math.random() * (max-min+1)) + min; //getting random value between 1 to 3
    switch(random_int) { //setting value to either Rock, Paper, Scissors depending on random_int
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

let buttons = document.querySelector("#buttons");
let rdybtn = document.querySelector("#ready");

buttons.addEventListener("click", (event) => {
    let target = event.target; 

    switch(target.id) {
        case "rock":
            player_choice = "rock";
            check_button = true;
            break;
        case "paper":
            player_choice = "paper";
            check_button = true;
            break;
        case "scissors": 
            player_choice = "scissors";
            check_button = true;
            break;
    }
});

function waitForBtnClick() { 
    return new Promise(resolve => waitForBtnClickResolve = resolve);
}

function btnResolver() {
    if(waitForBtnClickResolve) {
        waitForBtnClickResolve()
    };
}

function oneRoundWinner(player_choice, computerSelection) { //who won based on choices
    if (player_choice === "rock") {
        if (computerSelection === "paper") {
            return "paper beats rock, Computer has won";
        } else if (computerSelection === "scissors") {
            return "rock beats scissors, Player has won";
        }
    }

    if (player_choice === "paper") {
        if (computerSelection === "rock") {
            return "paper beats rock, Player has won";
        } else if (computerSelection === "scissors") {
            return "scissors beats paper, Computer has won";
        }
    }

    if (player_choice === "scissors") {
        if (computerSelection === "paper") {
            return "scissors beats paper, Player has won";
        } else if (computerSelection === "rock") {
            return "rock beats scissors, Computer has won";
        }
    }

    if(player_choice === computerSelection){
        return `${player_choice} and ${computerSelection} are the same, so it's a tie!`
    }
}

function oneRound() { 
    let computerSelection = getComputerChoice(min,max);
    let result = oneRoundWinner(player_choice, computerSelection);
    console.log("the computer chose " + computerSelection); //prints out computer choice
    console.log("the player chose " + player_choice); //prints out player choice
    console.log(result); //result of the round one game
    return result;
}

function gameScore() {
    if (score_player > score_computer) { //tells player who won after 5 rounds
        return `player has won with ${score_player} score versus computer with ${score_computer} score`;
    } else if (score_player < score_computer) {
        return `computer has won with ${score_computer} score versus player with ${score_player} score`;
    } else {
        return `a tie between player and computer, they both got ${score_player}`;
    }
}

async function fullGame() {
    let round_counter = 1;
    rdybtn.addEventListener("click", btnResolver);
    while(round_counter <= 5) { //game is based on 5 rounds; changed to one round
        console.log("Round " + round_counter);
        await waitForBtnClick();
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
    rdybtn.removeEventListener("click", btnResolver);
    let gameFinished = gameScore();
    console.log(gameFinished)
}

fullGame();