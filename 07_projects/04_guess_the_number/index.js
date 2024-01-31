// Math.random() 0 to 0.99999 :  Never touches one
// (Math.random() * 10) : shifting one decimal place
// (Math.random() * 10) + 1 : making sure that 0 never comes Range (1, 10)

// STEP 1 : Generate a random number between 1 to 100 and store it in a variable
let randomNumber = Math.floor((Math.random() * 100) + 1);

const form = document.querySelector('form');
const lowOrHi = document.querySelector('.lowOrHi');
const remainingGuesses = document.querySelector('.lastResult');
const guesses = document.querySelector('.guesses');
const button = document.querySelector('#subt');
const resultParas = document.querySelector('.resultParas');
const p = document.createElement('p');


const prevGuesses = [];
let chances = 1;
let canPlay = true;


if (canPlay) {
    // All the logic goes here
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        const guess = parseInt(document.querySelector('#guessField').value);

        // Let' us check if the user has given a valid input
        isValid(guess);
    })

}

// helper functions
function isValid(guess) {
    if (isNaN(guess) || guess < 1 || guess > 101) {
        lowOrHi.innerHTML = "Please enter a valid number";
    } else {
        if (chances > 0 && chances < 11) {
            checkGuess(guess);
        } else {
            endGame();
            canPlay = false;
        }
    }
}

function checkGuess(guess) {
    if (guess < randomNumber) {
        cleanInputField();
        chances++;
        prevGuesses.push(guess);
        guesses.innerText += `${guess}, `
        remainingGuesses.innerHTML = `${11 - chances}`;
        displayMessage('Your guess is tooooo LOW');
    } else if (guess > randomNumber) {
        cleanInputField();
        chances++;
        prevGuesses.push(guess);
        guesses.innerText += `${guess}, `
        remainingGuesses.innerHTML = `${11 - chances}`;
        displayMessage('Your guess is toooo HIGH');
    } else {
        chances++;
        remainingGuesses.innerHTML = `${11 - chances}`;
        endGame();
        displayMessage('BRAVO!!! You guessed it right!!!');
    }
}

function restartGame() {
    displayMessage('You are out of moves, kindly Restart the game!');
    button.value = 'Submit guess';
    document.querySelector('#guessField').removeAttribute('readOnly');
    resultParas.removeChild(p);
    guesses.innerText = '';
    randomNumber = Math.floor((Math.random() * 100) + 1);
    chances = 1;
    prevGuesses = [];
    canPlay = true;
}

function endGame() {
    cleanInputField();
    displayMessage('Game Over, kindly Restart the game!');
    document.querySelector('#guessField').setAttribute('readOnly', '');
    p.innerHTML = `<span>Random Number was : ${randomNumber}</span>`
    resultParas.appendChild(p);
    button.value = 'Restart Game';
    button.addEventListener('click', function () {
        restartGame();
    })
}

function cleanInputField() {
    document.querySelector('#guessField').value = '';
}

function displayMessage(message) {
    lowOrHi.innerHTML = message;
}




