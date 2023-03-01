
//Randomly select computer choice
function getComputerChoice () {
    let computerPick = Math.floor(Math.random() * 100);
 
     if (computerPick <= 33){
         computerPick = "rock";
     } else if (computerPick >= 67){
         computerPick = "scissors";
     } else {
         computerPick = "paper";
     }
    return computerPick;
}

 //Ask for player choice selection
 let getInput = window.prompt("Rock, Paper or Scissors?");
 
 //Return player choice - case insenitive (lowercase)
 function playerSelection (){
    let getPlayerChoice = getInput.toLowerCase();
    return getPlayerChoice;
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


