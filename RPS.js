const min = 1;
const max = 3;
let score_computer = 0;
let score_player = 0;
let player_choice = "";
let waitForBtnClickResolve;
let round_counter = 1;

const buttons = document.querySelector("#buttons");
const rdybtn = document.querySelector("#ready");
const container = document.querySelector("#container");
const playerimage = document.querySelector("#playerChoiceImg");
const computerimage = document.querySelector("#computerChoiceImg");
const images = document.querySelector("#images");
const pastPlayerImg = document.querySelector("#pastPlayerImg");
const computerImg = document.querySelector("#computerImg");
const currentPlayerImg = document.querySelector("#currentPlayerImg");
const current = document.querySelector("#current");
const playarea = document.querySelector("#play-area");

const roundText = document.createElement("h1");
roundText.setAttribute("id","roundtext");
roundText.textContent = `Round ${round_counter}`;
container.insertBefore(roundText, container.firstChild);

const computerChoiceText = document.createElement("div");
computerChoiceText.setAttribute("id", "computer choice");
computerChoiceText.textContent = "The computer chose nothing yet";
computerimage.appendChild(computerChoiceText);

const playerChoiceText = document.createElement("div");
playerChoiceText.setAttribute("id", "Player choice");
playerChoiceText.textContent = "You chose nothing so far";
playerimage.appendChild(playerChoiceText)

const computerScoreText = document.createElement("div");
computerScoreText.setAttribute("id","computer score");
computerScoreText.textContent = `Computer score: ${score_computer}`; 
container.append(computerScoreText);

const playerScoreText = document.createElement("div");
playerScoreText.setAttribute("id", "player score");
playerScoreText.textContent = `Player score: ${score_player}`;
container.append(playerScoreText);

const resultText = document.createElement("h3");
resultText.setAttribute("id", "result text");
resultText.textContent = "The game hasn't started yet";
container.insertBefore(resultText, computerScoreText);

const gameFinishedText = document.createElement("h1");
gameFinishedText.setAttribute("id", "game done");
gameFinishedText.textContent = "The game isn't done yet";
container.append(gameFinishedText);

const PreviousRoundText = document.createElement("h2");
PreviousRoundText.setAttribute("id", "Previous round");
PreviousRoundText.textContent = "Previous Round Information";
container.insertBefore(PreviousRoundText, images)

const currentPlayerChoiceText = document.createElement("div");
currentPlayerChoiceText.setAttribute("id", "current-choice");
currentPlayerChoiceText.textContent = "You chose nothing yet";
current.insertBefore(currentPlayerChoiceText, currentPlayerImg)


document.getElementById("container").style.textAlign = "center";
document.getElementById("images").style.justifyContent = "center";
document.getElementById("play-area").style.justifyContent = "center";

function getComputerChoice(min,max) { 
    let random_int = Math.floor(Math.random() * (max-min+1)) + min; //getting random value between 1 to 3
    switch(random_int) { //setting value to either Rock, Paper, Scissors depending on random_int
        case 1:
            document.getElementById("computerImg").src = "images/rock-right.jpeg";
            computerImg.style.height = "250px";
            computerImg.style.width = "250px";
            return "rock";
        case 2:
            document.getElementById("computerImg").src = "images/paper.jpeg";
            computerImg.style.height = "250px";
            computerImg.style.width = "250px";
            return "paper";
        case 3:
            document.getElementById("computerImg").src = "images/scissors-right.jpeg";
            computerImg.style.height = "250px";
            computerImg.style.width = "250px";
            return "scissors";
    }
}

buttons.addEventListener("click", (event) => {
    let target = event.target; 

    switch(target.id) {
        case "rock":
            player_choice = "rock";
            document.getElementById("currentPlayerImg").src = "images/rock-left.jpeg";
            currentPlayerChoiceText.textContent = "Your choice is currently rock";
            currentPlayerImg.style.height = "250px";
            currentPlayerImg.style.width = "250px";
            break;
        case "paper":
            player_choice = "paper";
            document.getElementById("currentPlayerImg").src = "images/paper.jpeg";
            currentPlayerChoiceText.textContent = "Your choice is currently paper";
            currentPlayerImg.style.height = "250px";
            currentPlayerImg.style.width = "250px";
            break;
        case "scissors": 
            player_choice = "scissors";
            document.getElementById("currentPlayerImg").src = "images/scissors-left.jpeg";
            currentPlayerChoiceText.textContent = "Your choice is currently scissors";
            currentPlayerImg.style.height = "250px";
            currentPlayerImg.style.width = "250px";
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
    computerChoiceText.textContent = `The computer chose ${computerSelection}`;
    playerChoiceText.textContent = `You chose ${player_choice}`;
    resultText.textContent = `${result}`
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

function pastImg() {
    if(player_choice === "rock") {
        document.getElementById("pastPlayerImg").src = "images/rock-left.jpeg";
        pastPlayerImg.style.height = "250px";
        pastPlayerImg.style.width = "250px";
    } else if (player_choice === "paper") {
        document.getElementById("pastPlayerImg").src = "images/paper.jpeg";
        pastPlayerImg.style.height = "250px";
        pastPlayerImg.style.width = "250px";
    } else if (player_choice === "scissors") {
        document.getElementById("pastPlayerImg").src = "images/scissors-left.jpeg";
        pastPlayerImg.style.height = "250px";
        pastPlayerImg.style.width = "250px";
    }
}
async function fullGame() {
    rdybtn.addEventListener("click", btnResolver);
    while(round_counter <= 5) { //game is based on 5 rounds; changed to one round
        roundText.textContent = `Round ${round_counter}`;
        await waitForBtnClick();
        let outcome = oneRound(); //one round
        pastImg();
        if (outcome.includes("Computer has won")) { //adding scores to player or computer depending on string content of outcome
            score_computer += 1;
        } else if (outcome.includes("Player has won")) {
            score_player += 1; 
        } else if (outcome.includes("tie")) {
            score_player += 1;
            score_computer += 1;
        }
        computerScoreText.textContent = `Computer score: ${score_computer}`;  //updates text for score on page
        playerScoreText.textContent = `Player score: ${score_player}`;
        round_counter += 1; //increments round
    }
    rdybtn.removeEventListener("click", btnResolver);
    let gameFinished = gameScore();
    gameFinishedText.textContent = `${gameFinished}`;
}

fullGame();