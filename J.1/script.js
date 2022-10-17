
// so get element by ID means its going to look through the 
// html file for span tags that have the ID of what we set it to.
// Then in our Java script file once we have to assign it to a const
// so that we can access the value. 
const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');

let userChoice;
let computerChoiceNum;
let computerChoice;

let result;

// this picks out all button choices so we can get the values of all the possble choices we have 
// eg : rock paper scissors.
const possibleChoices = document.querySelectorAll('button')
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) => {
userChoice = e.target.id;
userChoiceDisplay.innerHTML= userChoice;
computerChoiceNum = Math.floor(Math.random()*3) + 1;
if(computerChoiceNum === 1) {
    computerChoice = "Rock";
}
if (computerChoiceNum === 2) {
    computerChoice = "Paper";
}
if (computerChoiceNum === 3) {
    computerChoice = "Scissors";
}


computerChoiceDisplay.innerHTML = computerChoice;

if (computerChoice === userChoice) {
    result = "Its a Draw";
}
else if (userChoice === 'Scissors') {
    if (computerChoice === 'Paper') {
        result = "You win!!";
    }
    else {
        result = "You Lose";
    }
}
else if (userChoice === 'Paper') {
    if (computerChoice === 'Rock') {
        result = "You win!!";
    }
    else {
        result = "You Lose";
    }
}
else {
    if (computerChoice === 'Scissors') {
        result = "You win!!";
    }
    else {
        result = "You Lose";
    }
}

resultDisplay.innerHTML = result;
    
}))






