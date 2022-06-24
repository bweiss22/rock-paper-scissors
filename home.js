
function computerPlay(){
    var num = (Math.floor(Math.random()*3));
    if(num==0){
        return "rock";
    }else if(num==1){
        return "paper";
    }else if(num==2){
        return "scissors";
    }
}

//computerPlay();

let computerSelection;
let playerSelection;
let computerScore = 0;
let playerScore =0;


function playRound(playerSelection, computerSelection){
    computerSelection = computerPlay().toLowerCase();
    playerSelection = prompt("Choose rock paper or scissors").toLowerCase();
    if(playerSelection === computerSelection){
       // return "Its a tie";
    }else if(playerSelection === "rock" && computerSelection==="scissors"){
        return playerScore += 1;
        //return "You win! Rock beats scissors";
    }else if(computerSelection === "rock" && playerSelection==="scissors"){
        return computerScore += 1;
        //return "You lose! Rock beats scissors";
    }else if(playerSelection === "paper" && computerSelection ==="rock"){
        return playerScore+=1;
        //return "You Win! Paper covers rock";
    }else if(computerSelection === "paper" && playerSelection ==="rock"){
        return computerScore += 1;
        //return "You lose! Paper covers rock";
    }else if(playerSelection ==="scissors" && computerSelection ==="paper"){
        return playerScore+=1;
        //return "You Win! scissors cuts paper";
    }else{
        return computerScore+=1;
        //return "you Lose! scissors cuts paper";
    }

    
}

//console.log("Computer selection: "+ computerSelection);
//console.log(playRound(playerSelection, computerSelection));

function game(){

    for(let i=0;i<5;i++){
        
        console.log(playRound(playerSelection, computerSelection));
    }
    console.log("Player score: "+playerScore);
    console.log("Computer score: "+computerScore);
    if(playerScore>computerScore){
        return "You win!";
    }else if(playerScore == computerScore){
        return "its a tie!";
    }else{
        return "You lose!";
    }

   
    
}

console.log(game());


