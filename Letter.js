function Letter(letter, wasGuessed) {
	//string value that stores character for letter
	this.letter = letter;
	//boolean to store whether user guessed correct letter or not
	this.wasGuessed = wasGuessed;	
}

Letter.prototype.showLetter = function() {
    if (this.letter === " ") {
        this.wasGuessed = true;
        return this.letter;
    } else {
        if (this.wasGuessed === true) {
                return this.letter;
            } else {
                return "_";
            }
        }    
	};

Letter.prototype.guessCheck = function(letter) {
		if (letter === this.letter) {
			this.wasGuessed = true;
		}
	};


module.exports = Letter;