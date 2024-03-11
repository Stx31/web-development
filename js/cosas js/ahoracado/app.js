const words = ["gato", "perro", "tigre", "león", "elefante"];
let randomIndex = Math.floor(Math.random() * words.length);
let currentWord = words[randomIndex].toUpperCase();
let guessedLetters = [];
let remainingAttempts = 6;
let wordContainer = document.getElementById("wordContainer");
let messageElement = document.getElementById("message");
let hangmanContainer = document.getElementById("hangman");


function init() {
    wordContainer.innerHTML = "";
    guessedLetters = [];
    remainingAttempts = 6;
    messageElement.textContent = "";
    renderHangman();
    for (let i = 0; i < currentWord.length; i++) {
        let letterDiv = document.createElement("div");
        letterDiv.textContent = "_";
        letterDiv.classList.add("letter");
        wordContainer.appendChild(letterDiv);
    }
}

function checkGuess() {
    if (remainingAttempts === 0) {
        messageElement.textContent = "Ya no tienes más intentos";
        return;
    }
    let guessInput = document.getElementById("guessInput");
    let guess = guessInput.value.toUpperCase();
    guessInput.value = "";
    if (guessedLetters.includes(guess)) {
        messageElement.textContent = "Ya has intentado esta letra";
        return;
    }
    guessedLetters.push(guess);
    if (!currentWord.includes(guess)) {
        remainingAttempts--;
        renderHangman();
        messageElement.textContent = "Incorrecto, te quedan " + remainingAttempts + " intentos";
        if (remainingAttempts === 0) {
            messageElement.textContent = "¡Has perdido! La palabra era " + currentWord;
        }
    } else {
        updateWordDisplay();
        if (checkWin()) {
            messageElement.textContent = "¡Has ganado!";
        }
    }
}

function updateWordDisplay() {
    for (let i = 0; i < currentWord.length; i++) {
        if (guessedLetters.includes(currentWord[i])) {
            let letterDiv = wordContainer.children[i];
            letterDiv.textContent = currentWord[i];
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


function renderHangman() {
    hangmanContainer.innerHTML = `
        <svg height="250" width="200" class="hangman-svg">
            <line x1="60" y1="20" x2="140" y2="20"></line>
            <line x1="140" y1="20" x2="140" y2="50"></line>
            <line x1="60" y1="20" x2="60" y2="230"></line>
            <line x1="20" y1="230" x2="100" y2="230"></line>
            <circle cx="140" cy="70" r="20" class="${remainingAttempts < 6 ? 'show' : 'hide'}"></circle>
            <line x1="140" y1="90" x2="140" y2="150" class="${remainingAttempts < 5 ? 'show' : 'hide'}"></line>
            <line x1="140" y1="100" x2="120" y2="120" class="${remainingAttempts < 5 ? 'show' : 'hide'}"></line>
            <line x1="140" y1="100" x2="160" y2="120" class="${remainingAttempts < 5 ? 'show' : 'hide'}"></line>
            <line x1="140" y1="150" x2="120" y2="190" class="${remainingAttempts < 4 ? 'show' : 'hide'}"></line>
            <line x1="140" y1="150" x2="160" y2="190" class="${remainingAttempts < 4 ? 'show' : 'hide'}"></line>
            <line x1="140" y1="130" x2="120" y2="170" class="${remainingAttempts < 3 ? 'show' : 'hide'}"></line>
            <line x1="140" y1="130" x2="160" y2="170" class="${remainingAttempts < 3 ? 'show' : 'hide'}"></line>
        </svg>
    `;
}

function resetGame() {
    randomIndex = Math.floor(Math.random() * words.length);
    currentWord = words[randomIndex].toUpperCase();
    init();
}

window.onload = function () {
    init();
};
