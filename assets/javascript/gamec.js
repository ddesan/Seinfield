//Define word to be guess by user

var hiddenWordArr = ["cosmo", "seinfield", "elaine", "george", "newman"];

var hiddenWord = hiddenWordArr[Math.floor(Math.random() * hiddenWordArr.length)];

var answerString = "";

var answerArray = [];

var countR = 1;

var countG = 9;

var wins = 0;

var lost = 0;

var choosenLetter = [];

console.log(hiddenWord);

///Define the underscores from the hidden word to get the layout

    for (var i = 0; i < hiddenWord.length; i ++){

        answerString += "_ ";

        answerArray.push(" ");

    }

    console.log(answerArray);

    console.log(answerString);

    document.getElementById('answer').innerHTML = answerString;

///Start the game with the input from the user and storage the selection of the user on a variable

document.onkeyup = function(event) {
    
    var userGuess = event.key;

    console.log(userGuess);

    //Run a loop for each letter of the variable in the array and verify if the letter guesses by the user is the same as the hidden word
    
    for (var i = 0; i < hiddenWord.length; i++){
    
        if(hiddenWord[i] === userGuess){

            answerArray[i] = userGuess;

            document.getElementById("answer").innerHTML = answerString.join(" ");

        }

    }

    choosenLetter.push(userGuess);

    document.getElementById("lettGuess").innerHTML = choosenLetter.join(", ");
            
}