
const getUserInput = (message) => {
    while (true) {
        let input = prompt(message);
        if (input === null) return null; 
        if (input.toLowerCase() === 'q') return 'q';
        input = parseInt(input);
        if (!isNaN(input)) return input;
        alert("Please enter a valid number!");
    }
};


const startGame = () => {
    let maximum = getUserInput("Enter the maximum number to set the range (or 'q' to quit):");
    if (maximum === 'q' || maximum === null) {
        console.log("Game aborted.");
        return;
    }

    const targetNum = Math.floor(Math.random() * maximum) + 1;
    let attempts = 0;
    let guess;

    console.log(`A random number between 1 and ${maximum} has been generated. Start guessing!`);

    while (true) {
        guess = getUserInput("Enter your guess (or 'q' to quit):");
        if (guess === 'q' || guess === null) {
            console.log("OK, YOU QUIT!");
            return;
        }

        attempts++;
        if (guess > targetNum) {
            console.log("Too high! Try again.");
        } else if (guess < targetNum) {
            console.log("Too low! Try again.");
        } else {
            console.log("CONGRATS YOU WIN!");
            console.log(`You got it! It took you ${attempts} guesses.`);
            break;
        }
    }

   
    if (confirm("Do you want to play again?")) {
        startGame();
    } else {
        console.log("Thanks for playing!");
    }
};

startGame();
