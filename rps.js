const buttons = document.querySelectorAll('input');
const result = document.querySelector("#result");

buttons.forEach(button=>{button.addEventListener('click',()=>{
    const playerSelection = button.value.toUpperCase();
    const computerSelection = getComputerChoice();
    result.textContent = (playRound(playerSelection, computerSelection));
})
})

function getComputerChoice() {
    let cThrow = Math.floor(Math.random() * 3) + 1;
    if (cThrow == 1) return "ROCK";
    if (cThrow == 2) return "PAPER";
    if (cThrow == 3) return "SCISSORS";
}

function playRound(playerSelection, computerSelection){
    var outcome, outcomeVerb;
    if (playerSelection == computerSelection){
        outcome = "TIED";
        outcomeVerb = " ties ";
    }
    else if ((playerSelection == "ROCK" && computerSelection == "SCISSORS") ||
             (playerSelection == "SCISSORS" && computerSelection == "ROCK")){
        outcome = "LOST";
        outcomeVerb = " loses to ";
    }
    else {
        outcome = "WON";
        outcomeVerb = " beats ";
    }
    return 'You ' + outcome + '! ' + playerSelection + outcomeVerb + computerSelection;
}