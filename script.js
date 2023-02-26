
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

