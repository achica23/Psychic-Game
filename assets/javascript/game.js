var lettersGuessed = [];
var guessesLeft = 10;
var wins = 0;


var computerGuess =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97   // guesses random letter
    );

console.log(computerGuess);

document.onkeydown = function (event) {
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();  //function to make store players input and make lowercase

    //document.getElementById('guess').innerHTML = keyPress;
    addLetter(keyPress);

}

//function to catch repeat letters and/or add players guess to lettersGuessed string
function addLetter(usersKeypress) {


    var repeatGuess = lettersGuessed.some(function (item) {
        return item === usersKeypress;
    })

    //alert player if letter has been repeated.
    if (repeatGuess) {
        alert(usersKeypress + " already guessed. Try again!");

        //if it is not a repeat guess, check if it's in word
    } else {
        lettersGuessed.push(usersKeypress);
        console.log(lettersGuessed);


        showLettersGuessed();  // shows letters player guessed

        guessMatch(usersKeypress); // is players guess same as computers guess
    }

}

//function to show letters guessed in browser
function showLettersGuessed() {
    var tempStr = lettersGuessed.join(", ");
    document.getElementById("playersGuess").innerHTML = tempStr;
}

function guessMatch(character) {

    console.log(character);
    console.log(computerGuess);

    if (character === computerGuess) {

        alert("You win!"); // alerts player of win
        wins = wins + 1;
        showWins();


    } else if (guessesLeft === 0) {
        alert("Aw man! Lets start over.");   //alerts player of loss and to start over
        resetVariables();

    } else {
        guessesLeft = guessesLeft - 1;  //alerts play of no more guesses
        showGuessesRemaining();
    }
}

//function to show wins
function showWins() {
    document.getElementById("numWins").innerHTML = wins;
}

//function to show guesses remaining
function showGuessesRemaining() {
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}


function resetVariables() {
    lettersGuessed = [];
    guessesLeft = 10;
}

function startGame() {
    showGuessesRemaining();
    showWins();
}



startGame();

