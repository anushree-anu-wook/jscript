//elements 
const game = document.getElementById('game');
const guessInput = document.getElementById('guess-input');
const guessValue = document.getElementById('guess-value');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const message = document.querySelector('.message');

//variables 

let min = 0;
let max = 10;
let guessLeft = 3;
let win = Math.floor(((Math.random()*max)+min)-min)
//console.log(win)

minNum.innerHTML = min;
maxNum.innerHTML = max;
console.log(win)

//add eventlistener
guessValue.addEventListener('click', playGame)
game.addEventListener('mousedown',playAgain);
//playGame function 
function playGame(e){
    if(guessInput.value == '' || guessInput.value == NaN){
//enter a valid number
        msgColor('red',' please enter a value')
    }else if(guessInput.value < min || guessInput.value > max){
//enter a number betwen min and max
        msgColor('red',` please enter a number between ${min} and ${max} `)
    }else if(guessInput.value == win){
//you win
        guessValue.className += 'play-again';
        guessValue.value = 'play Again';
        msgColor('green',`${win} is correct! you win`);
    }else if(guessInput.value !== win){
        guessLeft--;
 //try again 
        msgColor('red',`wrong number you steel have ${guessLeft} guesses`)
        if(guessLeft == 0){
            //you lost
            guessValue.value = 'play Again';
            guessValue.className += 'play-again';
            msgColor('red',`Game Over the corect numbre was ${win}`);
            guessInput.disabled = true;
        }
    }
    e.preventDefault();
}
//function message color
function msgColor(color, msg){
    if(color == 'red'){
        message.innerHTML = msg;
        message.style.color = color;
        guessInput.style.borderColor = color;
        guessInput.value = '';
    }else if(color == 'green'){
        message.innerHTML = msg;
        message.style.color = color;
        guessInput.style.borderColor = color;
        guessInput.disabled = true;
    }
}

