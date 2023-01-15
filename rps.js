function getComputerChoice() {
    const options = ['rock' , 'paper' , 'scissors'];
    const random = Math.floor(Math.random() * options.length);
    console.log(options[random] + " = computer choice");
    return options[random];
}

let playerWins = 0;
let computerWins = 0;

function playRound() {
    let computerSelection = getComputerChoice();
    let playerSelection = prompt("get choice","");
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if (playerSelection == 'rock' && computerSelection == 'paper'){
        computerWins++;
        return "Computer Wins";
    }
    else if (computerSelection == 'rock' && playerSelection == 'paper'){
        playerWins++;
        return "Player Wins";
    }
    else if (playerSelection == 'rock' && computerSelection == 'scissors'){
        playerWins++;
        return "Player Wins";
    }
    else if (computerSelection == 'rock' && playerSelection == 'scissors'){
        computerWins++;
        return "Computer Wins";
    }
    else if (playerSelection == 'paper' && computerSelection == 'scissors'){
        computerWins++;
        return "Computer Wins";
    }
    else if (computerSelection == 'paper' && playerSelection == 'scissors'){
        playerWins++;
        return "Player Wins";
    }
  }
const rounds = 5
function game (){
    for (let i = 0; i<rounds; i++){
        let result = playRound()
        console.log(result);
    }}

game();

function overallWinner(){
    if (computerWins > playerWins){
        console.log("Computer is the Overall Winner")
    }
    else{
        console.log("Player is the Overal Winner")
    }
}

console.log(overallWinner());