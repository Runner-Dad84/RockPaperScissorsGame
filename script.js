let playerSelection;
let computerSelection;

//Randomly select computer choice
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

 //Ask for player choice selection
 let getInput = window.prompt("Rock, Paper or Scissors?");
 
 //Return player choice - case insenitive (lowercase)
 function getPlayerChoice (){
    playerSelection = getInput.toLowerCase();
    return playerSelection;
}
//Global Score Variables
let computerScore = 0;
let playerScore = 0;

//Play One Round function
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === "rock" && computerSelection === "scissors":
            playerScore +=1
            return("Rock beats scissors, you win!")
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            computerScore +=1
            return("Rock is beat by scissors, you lose!")
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            playerScore +=1
            return("Paper beats rock, you win!")
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            computerScore +=1
            return("Paper is beat by scissors, you lose!")
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            playerScore +=1
            return("Scissors beats paper, you win!")
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            computerScore +=1
            return("Scissors is beat by rock, you lose!")
            break;
        case playerSelection === computerSelection:
            return("It is a tie!")
            break;
        default:
            return("Please enter rock, paper or scissors");
    }
}

//Play Game
function game (playRound) {
    for (i = 0; i < 5; i++) {
            console.log(`The score is player ${playerScore} vs. the computer ${computerScore} `)
            
        }
}


