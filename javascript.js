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

let computerChoice = getComputerChoice();

// function return human choise
function getHumanChoice() {
    return prompt('Make choise: rock, papper or scissors').toLowerCase();
}

let humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock' && computerChoice === 'papper') {
        computerScore++;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
    } else if ( humanChoice === 'rock' && computerChoice === 'rock') {
        computerScore++;
        humanScore++;
    } else if ( humanChoice === 'papper' && computerChoice === 'rock') {
        humanScore++;
    } else if ( humanChoice === 'papper' && computerChoice === 'papper') {
        computerScore++;
        humanScore++;
    } else if ( humanChoice === 'papper' && computerChoice === 'scissors') {
        computerScore++;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
    } else if ( humanChoice === 'scissors' && computerChoice === 'papper') {
        humanScore++;
    } else if ( humanChoice === 'scissors' && computerChoice == 'scissors') {
        computerScore++;
        humanScore++
    }
    console.log(computerScore);
    console.log(humanScore);
}



playRound(humanChoice, computerChoice);