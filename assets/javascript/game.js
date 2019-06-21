/// Variables
var wordOptions = ["pikachu", "squirtel", "bulbasaur", "charmander", "pidgey"];
var selectedWord = "";
var lettersinword = [];
var numBlanks = 0;
var blanksandrightguesses = [];
var wrongGuesses = [];
var userinput = [];


var wins = 0;
var losses = 0;
var guesses = 9;
/// Functions
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
// The above function sets up all of my global variables and sets the element id's to the variable values

function letterCheck() {
    var ContainsLetter = false;
    for (var i = 0; i < numBlanks; i++) {
        if (lettersinword.indexOf(userinput)) {
            ContainsLetter = true;
            console.log(ContainsLetter);

        }
        else {
            guesses = guesses - 1;
            $("#wrong_guesses").append(userinput);

        }

    }
    if (ContainsLetter) {
        for (var i = 0; i < numBlanks; i++) {
            if (lettersinword[i] == userinput) {
                blanksandrightguesses[i] = userinput;
            }
        }
    }
}

$(document).on("keyup", function () {
    userinput = String.fromCharCode(event.keyCode).toLowerCase();
    console.log(userinput);
    letterCheck();
});
// as of right now key up seems to register 10 times in a row, will need to fix.
// next steps involve verifying user input to match blanksandright guesses to reveal word as you type, as well
//as displaying win/loss alerts/counter.