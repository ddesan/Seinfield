//Define word to be guess by user

var hiddenWordArr = ["cosmo", "seinfield", "elaine", "george", "newman"];

var hiddenWord = hiddenWordArr[Math.floor(Math.random() * hiddenWordArr.length)];

var answerString = "";

var answerArray = [];

var countG = 9;

var wins = 0;

var lost = 0;

var choosenLetter = [];

console.log(hiddenWord);

//Restart game function

function restart (){
    
    hiddenWord = hiddenWordArr[Math.floor(Math.random() * hiddenWordArr.length)];

    answerString = "";

    answerArray = [];

    countG = 9;

    choosenLetter = [];

    juegos();

}

///Define the underscores from the hidden word to get the layout
function juegos(){

    for (var i = 0; i < hiddenWord.length; i ++){
        
        answerString += "_ ";

        answerArray.push("_");

    }

    document.getElementById("answer").innerHTML = answerArray.join(" ");

    document.getElementById("numGuess").innerHTML = countG;

    document.getElementById("lettGuess").innerHTML = "";

    console.log(answerArray);

    console.log(answerString);
}

juegos();

///Start the game with the input from the user and storage the selection of the user on a variable

document.onkeyup = function(event) {
    
    var userGuess = event.key;

    console.log(userGuess);

    //Run a loop for each letter of the variable in the array and verify if the letter guesses by the user is the same as the hidden word
    
    for (var i = 0; i < hiddenWord.length; i++){
    
        if(hiddenWord[i] === userGuess){

            answerArray[i] = userGuess;

            document.getElementById("answer").innerHTML = answerArray.join(" ");

        }

    }

    console.log(hiddenWord.indexOf(userGuess));

    if(hiddenWord.indexOf(userGuess) === -1){
        
        countG--;

        if(countG === 0){
            
            restart();

        }
    }

    console.log(countG);

    document.getElementById("numGuess").innerHTML = countG;

    choosenLetter.push(userGuess);

    document.getElementById("lettGuess").innerHTML = choosenLetter.join(", ");

    
            
}