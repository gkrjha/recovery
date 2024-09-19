// Get elements from the DOM
const guessInput = document.getElementById('guessInput');
const guessBtn = document.getElementById('guessBtn');
const message = document.getElementById('message');
const attemptsLeft = document.getElementById('attemptsLeft');
const resetBtn = document.getElementById('resetBtn');

// Variables for game logic
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

let attempts = 10;

// Function to check the guess
function checkGuess() {
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        message.textContent = 'Please enter a number between 1 and 100!';
        return;
    }

    attempts--;

    if (userGuess === randomNumber) {
        message.textContent = `Congratulations! You guessed the correct number: ${randomNumber}.`;
        endGame();
    } else if (attempts > 0) {
        if (userGuess > randomNumber) {
            message.textContent = 'Too high! Try again.';
        } else {
            message.textContent = 'Too low! Try again.';
        }
        attemptsLeft.textContent = attempts;
    } else {
        message.textContent = `Game Over! The correct number was ${randomNumber}.`;
        endGame();
    }

    guessInput.value = '';
}

// Function to end the game
function endGame() {
    guessBtn.disabled = true;
    guessInput.disabled = true;
    resetBtn.style.display = 'inline-block';
}

// Function to reset the game
function resetGame() {
    attempts = 10;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    message.textContent = '';
    attemptsLeft.textContent = attempts;
    guessInput.disabled = false;
    guessBtn.disabled = false;
    resetBtn.style.display = 'none';
    guessInput.value = '';
}

// Event listeners
guessBtn.addEventListener('click', checkGuess);
resetBtn.addEventListener('click', resetGame);
