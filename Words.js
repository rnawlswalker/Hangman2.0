var Letter = require("./Letter.js");

function Word(word) {
	this.rvlLetters = 0
	this.lettersArr = [];
    this.set = function() {
        for (var i = 0; i < word.length; i++) {
            var letter = new Letter(word[i], false);
		    this.lettersArr.push(letter);
        }
    };    
	this.guess = function(letter) {
        this.rvlLetters = 0;
        for (var i = 0; i < this.lettersArr.length; i++) {
            this.lettersArr[i].guessCheck(letter);
            if (this.lettersArr[i].wasGuessed === true) {
                this.rvlLetters++;
            }
        }
    };
    this.show = function() {
        var letString = "";
        for ( var i = 0; i < this.lettersArr.length; i++) {
         letString = letString + this.lettersArr[i].showLetter();
        }  
        console.log(letString);   
    }
};   

module.exports = Word;