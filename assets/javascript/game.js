/// Variables
///-------------------------------------------------------
var wordOptions = ["pikachu", "squirtel", "bulbasaur", "charmander", "pidgey"];
var selectedWord = "";
var lettersinword = [];
var numBlanks = 0;
var blanksandrightguesses = [];
var wrongGuesses = [];


var wins = 0;
var losses = 0;
var guesses = 9;
/// Functions
///-------------------------------------------------------
function start() {
    selectedWord = wordOptions[Math.floor(Math.random() * wordOptions.length)];
    ///choosing a random word from the list
    console.log(selectedWord);
    lettersinword = selectedWord.split("");
    console.log(lettersinword);
}
start();
