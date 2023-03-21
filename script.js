//Global variables
let computerScore = 0;
let playerScore = 0;

let computerSelection;
let playerSelection;

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

let result = document.getElementById("result");
let score = document.getElementById("score");

//Play One Round function
function playRound(playerSelection, getComputerChoice) {
    switch (true) {
        case playerSelection === "rock" && computerSelection === "scissors":
            playerScore +=1
            result.textContent="Rock beats scissors, you win!"
            score.textContent=`Player = ${playerScore} vs. the Computer = ${computerScore}`
            break;
        case playerSelection === "rock" && computerSelection === "paper":
            computerScore +=1
            result.textContent="Rock is beat by paper, you lose!"
            score.textContent=`Player = ${playerScore} vs. the Computer = ${computerScore}`
            break;
        case playerSelection === "paper" && computerSelection === "rock":
            playerScore +=1
            result.textContent="Paper beats rock, you win!"
            score.textContent=`Player = ${playerScore} vs. the Computer = ${computerScore}`
            break;
        case playerSelection === "paper" && computerSelection === "scissors":
            computerScore +=1
            result.textContent="Paper is beat by scissors, you lose!"
            score.textContent=`Player = ${playerScore} vs. the Computer = ${computerScore}`
            break;
        case playerSelection === "scissors" && computerSelection === "paper":
            playerScore +=1
            result.textContent="Scissors beats paper, you win!"
            score.textContent=`Player = ${playerScore} vs. the Computer = ${computerScore}`
            break;
        case playerSelection === "scissors" && computerSelection === "rock":
            computerScore +=1
            result.textContent="Scissors is beat by rock, you lose!"
            score.textContent=`Player = ${playerScore} vs. the Computer ${computerScore}`
            break;
        case playerSelection === computerSelection:
            result.textContent="It is a tie!"
            score.textContent=`Player = ${playerScore} vs. the Computer ${computerScore}`
            break;
        default:
            return(result.textContent="Please enter rock, paper or scissors");
    }
}

section.addEventListener("click", event => {
    playerSelection = event.target.id;
    getComputerChoice();
    console.log(playRound(playerSelection, getComputerChoice));

    if (playerScore ===3) {
        alert("You win!!!"); computerScore = 0; playerScore = 0} 
    else if (computerScore ===3)  {
        alert("You lose!!"); computerScore = 0; playerScore = 0} 
});


/*Ask for player choice selection and make case insensitive (lowercase)
let playerSelection;

function Input() {
    let ask = window.prompt("Rock, Paper or Scissors?");
    playerSelection = ask.toLowerCase();
    return playerSelection;
}
*/
/*Play Game
function game () {
    computerScore = 0;
    playerScore = 0;

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
*/
