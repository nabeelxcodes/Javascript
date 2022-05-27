console.log('hello ji')
const computer = document.getElementById('computer-choice')
const yourChoice = document.getElementById('your-choice')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')


let userChoice 
let computerChoice 
let results


possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{
userChoice = e.target.id
yourChoice.innerHTML = userChoice


makeComputerChoice()
getResult()
}))

function makeComputerChoice(){
    const random = Math.floor(Math.random() * possibleChoice.length) + 1
    console.log(random)
    if (random === 1){
    computerChoice = 'rock'}
    if (random === 2){
    computerChoice = 'paper'}
    if (random === 1){
    computerChoice = 'scissors'}
    computer.innerHTML = computerChoice
}

function getResult(){
    if (computerChoice === userChoice){
        results = 'Its a tie!'
    }
    if (computerChoice === 'rock'  && userChoice === 'paper'){
        results = 'You win'
    }
    if (computerChoice === 'rock'  && userChoice === 'scissors'){
        results = 'You lose'
    }
    if (computerChoice === 'paper'  && userChoice === 'rock'){
        results = 'You lose'
    }
    if (computerChoice === 'paper'  && userChoice === 'scissors'){
        results = 'You win'
    }
    if (computerChoice === 'scissors'  && userChoice === 'rock'){
        results = 'You win'
    }
    if (computerChoice === 'scissors'  && userChoice === 'paper'){
        results = 'You lose'
    }
    resultDisplay.innerHTML = results
}  