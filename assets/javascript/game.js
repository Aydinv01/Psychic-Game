
var random_letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];

var  computer = random_letter[Math.floor(Math.random() * random_letter.length)]; 

function countGuessesLeft() {
	document.getElementById("guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function UserGuesses() {
	document.getElementById("letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

countGuessesLeft();

var restart = function() {
	guessesLeft = 9;
	letterUser = [];
    computer = random_letter[Math.floor(Math.random() * random_letter.length)];
}

document.addEventListener("keydown", processGuess);

function processGuess(event) {
	guessesLeft--;

	var userGuess = event.key.toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	UserGuesses();

	if (userGuess === computer){
		wins++;
		document.getElementById("wins").innerHTML = "Wins: " + wins;
		restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.getElementById("lose").innerHTML = "Loses: " + losses;
		restart();
	}
  };
  