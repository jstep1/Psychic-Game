var cpu = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guesses = 9;
var guessedLetters = [];
var answer = null;

var pick = function() {
    answer = cpu[Math.floor(Math.random()*cpu.length)];
}

pick();

document.onkeyup = function(event) {
    var reset = function() {
        totalGuesses = 9;
        guesses = 9;
        guessedLetters = [];
        document.querySelector('#guess').innerHTML = "";
        pick();
    }

    guesses--;

    if(guesses > 1) {
            guessedLetters = guessedLetters + (event.key + ", ");
            document.querySelector('#guess').innerHTML = guessedLetters;
        }
    else {
            guessedLetters = guessedLetters + (event.key);
            document.querySelector('#guess').innerHTML = guessedLetters;
        }
    
    if(event.key !== answer && guesses > 0) {
            document.querySelector('#left').innerHTML = guesses;
        }
    else if(guesses === 0 && event.key !== answer) {
            alert("You lose!");
            losses++;
            reset();
            document.querySelector('#loss').innerHTML = losses;
            document.querySelector('#left').innerHTML = guesses;
        }
    else {
            alert("You win!");
            wins++;
            reset();
            document.querySelector('#win').innerHTML = wins;
            document.querySelector('#left').innerHTML = guesses;
        }
      
    }

