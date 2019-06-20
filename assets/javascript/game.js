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
    lettersinword = selectedWord.split("");
    numBlanks = lettersinword.length;
    guesses = 9;
    wrongGuesses = [];
    blanksandrightguesses = [];

    for (var i = 0; i < numBlanks; i++) {
        blanksandrightguesses.push("_");

    }
    $("#letters").text(blanksandrightguesses.join(" "));
    $("#guesses_left").text(guesses);
    $("#wrong_guesses").text(wrongGuesses);
    $("#wins").text(wins);
    $("#losses").text(losses);



    ///My console.log log
    console.log(selectedWord);
    console.log(lettersinword);
    console.log(numBlanks);
    console.log(blanksandrightguesses);
}
start();

$(document).keyup(function () {
    var userinput = String.fromCharCode(event).toLowerCase();
    console.log(userinput);
});