// Initialize array of letter choices

var cpu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// Create starting values for each variable

var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];
var answer = null;

// Create a function for the computer to randomly choose a letter and run it

var pick = function() {
    answer = cpu[Math.floor(Math.random()*cpu.length)];
}

pick();

// Event code initialized. Each event will reduce the number of guesses left by 1 and will reset the necessary variables after each instance.

document.onkeyup = function(event) {
    var reset = function() {
        totalGuesses = 9;
        guesses = 9;
        guessedLetters = [];
        document.querySelector('#guess').innerHTML = "";
        pick();
    }

    guesses--;

// The following statement produces a string that will add a comma to the string unless it is the last input before a loss

    if(guesses > 1) {
            guessedLetters = guessedLetters + (event.key + ", ");
            document.querySelector('#guess').innerHTML = guessedLetters;
        }
    else {
            guessedLetters = guessedLetters + (event.key);
            document.querySelector('#guess').innerHTML = guessedLetters;
        }

// Logic tree that will update the webpage after each input

    if(event.key !== answer && guesses > 0) {
            document.querySelector('#left').innerHTML = guesses;
        }
    else if(guesses === 0 && event.key !== answer) {
            alert("You must not be psychic... you lose!");
            losses++;
            reset();
            document.querySelector('#loss').innerHTML = losses;
            document.querySelector('#left').innerHTML = guesses;
        }
    else {
            alert("You must be psychic... you win!");
            wins++;
            reset();
            document.querySelector('#win').innerHTML = wins;
            document.querySelector('#left').innerHTML = guesses;
        }
      
    }

