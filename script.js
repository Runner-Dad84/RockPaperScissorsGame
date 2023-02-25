
//Randomly select computer choice
function getComputerChoice () {
    let computerPick = Math.floor(Math.random() * 100);
 
     if (computerPick <= 33){
         computerPick = "Rock";
     } else if (computerPick >= 67){
         computerPick = "Scissor";
     } else {
         computerPick = "Paper";
     }
 
     return computerPick;
 };