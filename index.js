var inquirer = require("inquirer");
var Word = require("./Words.js");

var gameBank = ["juke", "capricorn", "wakanda", "footwork", "techno", "ableton", "traktor", "house", "brockhampton"];

var currentWord;
var guessesLeft = 10;

function chooseWord() {
    var randomWord = Math.floor(Math.random() * Math.floor(gameBank.length));
    currentWord = new Word(gameBank[randomWord]);
    currentWord.set();
}

var startGame = function() {
	if (currentWord.rvlLetters < currentWord.lettersArr.length && guessesLeft > 0) {
	inquirer.prompt([
		{
            type: "input",
            name: "guess",
			message: "Type a letter to start guessing!",
		}
	]).then(function(answers) {
		var lastLetter = currentWord.rvlLetters;
        currentWord.guess(answers.guess);
        var newestLetter = currentWord.rvlLetters;
        currentWord.show();
		if (lastLetter === newestLetter) {
			guessesLeft--;
			console.log("Incorrect! You have " + guessesLeft + " guesses left!");
		} else if (lastLetter < newestLetter){
            console.log("Correct!");
        }    
            startGame();
        });
    }    
        else if (currentWord.rvlLetters < currentWord.lettersArr.length && guessesLeft === 0) {
            console.log("You lose, game over!")
            chooseWord();
            guessesLeft = 10;
            currentWord.show();
            startGame();
        } else if (currentWord.rvlLetters === currentWord.lettersArr.length && guessesLeft > 0) {
            console.log("Hell yeah you won!")
            chooseWord();
            guessesLeft = 10;
            currentWord.show();
            startGame()
        }
	};


console.log("---------------------------------------------");
console.log("Random Hangman");
console.log("Guess the correct letters for the random word until you win!");
console.log("You have 10 guesses.");
console.log("Good Luck!");
console.log("------------------------------------------------------------------");

chooseWord();
currentWord.show();
startGame();