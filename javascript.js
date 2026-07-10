// arr with 3 choises
let rockPepperScissors = ['rock', 'papper', 'scissors'];

let humanScore = 0;
let computerScore = 0;

// function take 1 num(max) and return random num(between 0 and max num)
const getRandomOfNum = maxNum => Math.floor(Math.random() * maxNum);

// function return random element from rockPepperScissors arr
function getComputerChoice() {
    return rockPepperScissors[getRandomOfNum(3)];
}

// function return human choise
function getHumanChoice() {
    return prompt('Make choise: rock, papper or scissors').toLowerCase();
}