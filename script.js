
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

//Play One Round
function playRound(playerSelection, computerSelection) {
    switch (true) {
        case playerSelection === "rock" && computerSelection === "scissors":
            console.log("Rock beats scissors, you win!")
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            console.log("Rock is beat by scissors, you lose!")
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            console.log("Paper beats rock, you win!")
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            console.log("Paper is beat by scissors, you lose!")
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            console.log("Scissors beats paper, you lose!")
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            console.log("Scissors is beat by rock, you lose!")
            break;
        case playerSelection === computerSelection:
            console.log("It is a tie!")
            break;
        default:
            console.log("Please enter rock, paper or scissors");
    }
}

