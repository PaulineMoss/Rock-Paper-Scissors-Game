const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissors = document.getElementById("scissors");
const winnerScore = document.getElementById("score");
const selectionContainer = document.getElementById("selection-container");
const gameContainer = document.getElementById("game-container");
const btnOpenRules = document.getElementById("open-rules-btn");
const btnCloseRules = document.getElementById("close-rules-btn")
const rulesWindow = document.getElementById("rules-window");
const playAgainBtn = document.getElementById("play-again-btn");
const userChoiceImg = document.getElementById("user-choice-img");
const userChoiceResult = document.getElementById("user-choice");
const computerChoiceImg = document.getElementById("computer-choice-img");
const computerChoiceResult = document.getElementById("computer-choice");
const choices = ["r", "p", "s"];

let userScore = 0;
let outcome = document.getElementById("outcome");

btnRock.addEventListener("click", function(){
        selectionContainer.style.visibility = "hidden";
        gameContainer.style.visibility = "visible";
        userChoiceImg.src = "images/icon-rock.svg";
        userChoiceResult.style.borderColor = "hsl(349, 71%, 52%)";
});


btnPaper.addEventListener("click", function(){
    selectionContainer.style.visibility = "hidden";
    gameContainer.style.visibility = "visible";
    userChoiceImg.src = "images/icon-paper.svg";
    userChoiceResult.style.borderColor = "hsl(230, 89%, 62%)";
});

btnScissors.addEventListener("click", function(){
    selectionContainer.style.visibility = "hidden";
        gameContainer.style.visibility = "visible";
        userChoiceImg.src = "images/icon-scissors.svg";
        userChoiceResult.style.borderColor = "hsl(39, 89%, 49%)";
});

//restarts game when plag again button is clicked
playAgainBtn.addEventListener("click", function(){
    selectionContainer.style.visibility = "visible";
    gameContainer.style.visibility = "hidden";
});


//opens rules window
btnOpenRules.addEventListener("click", function(){
    rulesWindow.style.visibility = "visible";
});


//click outside of rulesWindow div to close it?
/*window.onclick = function(event) {
    if (event.target.id !== rulesWindow) {
        if(rulesWindow.style.visibility = "visible"){
        console.log("this")
      rulesWindow.style.visibility = "hidden";
    }}
};*/

//closes rules window
btnCloseRules.addEventListener("click", function(){
    rulesWindow.style.visibility = "hidden";
});



//Rock Paper Scissors Game
function updateScore(){
    userScore++;
    winnerScore.innerHTML = userScore;
};

function getComputerChoice(){
    let computerChoice = choices[Math.floor(Math.random()*3)];
    return computerChoice;
}

function game(userChoice, computerChoice){
    var computerChoice = getComputerChoice();
    displayComputerChoice(computerChoice);
    if(userChoice == "r" && computerChoice == "s" || userChoice == "s" && computerChoice == "p" || userChoice == "p" && computerChoice == "r"){
        win();  
    } else if(userChoice == "r" && computerChoice == "p" || userChoice == "s" && computerChoice == "r" || userChoice == "p" && computerChoice == "s"){
        lose();
    } else if(userChoice == "r" && computerChoice == "r" || userChoice == "s" && computerChoice == "s" || userChoice == "p" && computerChoice == "p") {
        draw();
    }
};

function displayComputerChoice(computerChoice){
    if(computerChoice == "r"){
        selectionContainer.style.visibility = "hidden";
        gameContainer.style.visibility = "visible";
        computerChoiceImg.src = "images/icon-rock.svg";
        computerChoiceResult.style.borderColor = "hsl(349, 71%, 52%)";
    } else if(computerChoice == "p") {
        selectionContainer.style.visibility = "hidden";
        gameContainer.style.visibility = "visible";
        computerChoiceImg.src = "images/icon-paper.svg";
        computerChoiceResult.style.borderColor = "hsl(230, 89%, 62%)";
    } else if(computerChoice == "s") {
        selectionContainer.style.visibility = "hidden";
        gameContainer.style.visibility = "visible";
        computerChoiceImg.src = "images/icon-scissors.svg";
        computerChoiceResult.style.borderColor = "hsl(39, 89%, 49%)";
    }
};

function win(){
    outcome.innerHTML = "YOU WIN";
    updateScore();
};

function lose(){
outcome.innerHTML = "YOU LOSE"
};

function draw(){
    outcome.innerHTML = "IT'S A DRAW"
};

function main(){
btnRock.addEventListener("click", function(){
    game("r");
});

btnPaper.addEventListener("click", function(){
    game("p");
});

btnScissors.addEventListener("click", function(){
  game("s");
});
};

main();