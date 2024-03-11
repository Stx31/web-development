const words = ["gato", "perro", "tigre", "león", "elefante"];
let randomIndex = Math.floor(Math.random() * words.length);
let currentWord = words[randomIndex].toUpperCase();
let guessedLetters = [];
let wordContainer = document.getElementById("wordContainer");
let messageElement = document.getElementById("message");


function init() {
    wordContainer.innerHTML = "";
    guessedLetters = [];
    messageElement.textContent = "";
    for (let i = 0; i < currentWord.length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.textContent = "_";
        letterDiv.classList.add("letter");
        wordContainer.appendChild(letterDiv);
    }
}


function checkGuess() {
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value.toUpperCase();
    guessInput.value = "";
    if (guessedLetters.includes(guess)) {
        messageElement.textContent = "Ya has intentado esta letra";
        return;
    }
    guessedLetters.push(guess);
    let correctGuess = false;
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === guess) {
            let letterDiv = wordContainer.children[i];
            letterDiv.textContent = guess;
            correctGuess = true;
        }
    }
    if (!correctGuess) {
        messageElement.textContent = "Incorrecto, intenta otra vez";
    } else {
        if (checkWin()) {
            messageElement.textContent = "¡Has ganado!";
        }
    }
}
function checkWin() {
    for (let i = 0; i < currentWord.length; i++) {
        if (!guessedLetters.includes(currentWord[i])) {
            return false;
        }
    }
    return true;
}

function resetGame() {
    randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex].toUpperCase();
    init();
}

window.onload = function() {
    init();
};
