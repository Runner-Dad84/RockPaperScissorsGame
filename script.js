//Randomly select computer choice
let computerSelection;

function getComputerChoice () {
    computerSelection = Math.floor(Math.random() * 100);
 
     if (computerSelection <= 33){
        computerSelection = "rock";
     } else if (computerSelection >= 67){
        computerSelection = "scissors";
     } else {
        computerSelection = "paper";
     }
    return computerSelection;
}

//Ask for player choice selection and make case insensitive (lowercase)
let playerSelection;

function Input() {
    let ask = window.prompt("Rock, Paper or Scissors?");
    playerSelection = ask.toLowerCase();
    return playerSelection;
}

//Global Score Variables
let computerScore = 0;
let playerScore = 0;

//Play One Round function
function playRound(Input, getComputerChoice) {
    switch (true) {
        case playerSelection === "rock" && computerSelection === "scissors":
            playerScore +=1
            console.log("Rock beats scissors, you win!")
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            computerScore +=1
            console.log("Rock is beat by paper, you lose!")
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            playerScore +=1
            console.log("Paper beats rock, you win!")
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            computerScore +=1
            console.log("Paper is beat by scissors, you lose!")
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            playerScore +=1
            console.log("Scissors beats paper, you win!")
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            computerScore +=1
            console.log("Scissors is beat by rock, you lose!")
            break;
        case playerSelection === computerSelection:
            console.log("It is a tie!")
            break;
        default:
            return("Please enter rock, paper or scissors");
    }
}

//Play Game
function game () {
    while (computerScore < 3 && playerScore < 3){
        getComputerChoice();
        Input();
        playRound();
        console.log(`The score is player ${playerScore} vs. the computer ${computerScore} `)
    };
    if (playerScore === 3) {alert("You win!!!")} else {
        alert("You lose!!");
    };
}

