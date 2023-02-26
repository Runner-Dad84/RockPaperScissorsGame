
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
 };

 //Obtain player choice selection
 let getPlayerChoice = window.prompt("Rock, Paper or Scissors?");
 
function playerSelection (){
    return getPlayerChoice.toLowerCase(); 
}

//Play One Round function
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === "rock" && computerSelection === "scissors":
            return("Rock beats scissors, you win!")
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            return("Rock is beat by scissors, you lose!")
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            return("Paper beats rock, you win!")
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            return("Paper is beat by scissors, you lose!")
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            return("Scissors beats paper, you lose!")
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            return("Scissors is beat by rock, you lose!")
            break;
        case playerSelection === computerSelection:
            return("It is a tie!")
            break;
        default:
            return("Please enter rock, paper or scissors");
    }
}

