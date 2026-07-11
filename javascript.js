// arr with 3 choises
let rockPepperScissors = ['rock', 'papper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

// function take 1 num(max) and return random num(between 0 and max num)
let getRandomOfNum = maxNum => Math.floor(Math.random() * maxNum);


// function return random element from rockPepperScissors arr
function getComputerChoice() {
    return rockPepperScissors[getRandomOfNum(3)];
}

// function return human choise
function getHumanChoice() {
    return prompt('Make choise: rock, papper or scissors').toLowerCase();
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'papper') {
        computerScore++;
        alert('Computer win round');
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        alert('Human win round');
    } else if ( humanChoice === 'rock' && computerChoice === 'rock') {
        alert('DRAW');
    } else if ( humanChoice === 'papper' && computerChoice === 'rock') {
        humanScore++;
        alert('Human win round');
    } else if ( humanChoice === 'papper' && computerChoice === 'papper') {
        alert('DRAW');
    } else if ( humanChoice === 'papper' && computerChoice === 'scissors') {
        computerScore++;
        alert('Computer win round');
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        alert('Computer win round');
    } else if ( humanChoice === 'scissors' && computerChoice === 'papper') {
        humanScore++;
        alert('Human win round');
    } else if ( humanChoice === 'scissors' && computerChoice == 'scissors') {
        alert('DRAW');
    }

}


let rounds = 5;

// 
 function playGame() {
    do {
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();

        playRound(humanChoice, computerChoice);
        rounds--;
    } while (rounds > 0);
    alert( humanScore > computerScore ? 'Human WIN': 'Computer WIN');
}

playGame();
