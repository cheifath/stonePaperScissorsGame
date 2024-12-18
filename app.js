
// getting random choices from the computer
const genCompChoice = () => {
    let values = ['rock', 'paper', 'scissor'];
    /* math.random() generates random values eg; 0.35651351 by adding *3 the number will in the range of 0 - 2
    eg; 2.54346993 to remove the boolean we use Math.floor */
    const rndmIndx = Math.floor(Math.random() * 3);
    let compChoice = values[rndmIndx];
    console.log("computer choice = ",compChoice);
    return compChoice;
}

// getting the chocie user clicked
let choices = document.querySelectorAll(".choice");
choices.forEach((choice)=> {
    choice.addEventListener("click", ()=> {
        userChoice = choice.getAttribute("id");
        console.log("user choice = ",userChoice);
        playGame(userChoice);
    });
});

const playGame = (userChoice)=> {
    const compChoice = genCompChoice();
    let userWin;

    if(compChoice === userChoice){
        console.log("Draw");
        userWin = 'draw';
    }else {
        userWin = 'true';
        if(userChoice === 'rock') {
            //compChoice = paper / scissor
            userWin = compChoice === 'scissor' ? 'false':'true';
        }else if(userChoice === 'scissor') {
            //compChoice = rock / paper
            userWin = compChoice === 'rock' ? 'false':'true';
        }else{
            //compChoice = rock / scissor
            userWin = compChoice === 'scissor' ? 'false':'true';
        }
    }
    showWinner(userWin, userChoice, compChoice);
}


let compScore = 0;
let userScore = 0;
let message = document.querySelector("#message");
let youScore = document.querySelector("#user-scoreprint");
let computerScore = document.querySelector("#comp-scoreprint");

const showWinner= (userWin, userChoice, compChoice)=>{
    console.log("Use Win=", userWin, "\nUser Choice=", userChoice, "\nComputer Choice=", compChoice);
    if(userWin==='true'){
        userScore++;
        message.textContent=`You win!. Your ${userChoice} beats ${compChoice}`;
        youScore.textContent = userScore;
    }else if(userWin==='false') {
        compScore++;
        computerScore.textContent = compScore;
        message.textContent=`You Lose. ${compChoice} beats your ${userChoice}`;
        

    }else {
        message.textContent=`Draw`;
    }
}
