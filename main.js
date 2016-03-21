"use strict";

//step 1.
var numToGuess;
var numOfGuessesLeft = 5;

var newRandomNumber = function() {
	numToGuess=Math.floor(100*Math.random()+1);
	alert("numToGuess: " + numToGuess);
}

//step 3. 
function getValidInput() {
	var number = $("input-1");

	if (number === "") {

		alert("Please enter a number.");
		return NaN;
	}
}
//step 2.
$("#submit").click(function(){
	if (numOfGuessesLeft > 0) {
	var num1 = document.getElementById("input-1").value;
	var num2 = numToGuess - num1;
	alert(numToGuess + "  " + num1 + "  " + num2)
//step 5/5b.
	if (num2 ===0 ){
		alert("Winner, Winner, Chicken Dinner!");
	}
	else if(num2 < 10){
		alert("You are hot!");
	}
	else if(num2 < 20){
		alert("You are warm!");
	}
	else if(num2 < 40){
		alert("You are cold.");
	}
	else{
		alert("You are very cold!");
	}

//step 4.

numOfGuessesLeft--;	
alert("You have " + numOfGuessesLeft + " guess(es) left.");
}
if(numOfGuessesLeft === 0){
	alert("You Lose!");
}
});


/*
Guessing Game Steps
______________

1. when the page loads, the computer should pick a random number (1-100)
2. then the user should pick their number by clicking the guess button
3. if the user does not enter a valid number, alert "Please enter a number".
4. compare user guess to random number picked by computer
5. make an if/else statement that determines if the user is "hotOrCold"
	5b. hot < 10 
		warm < 20
		cold < 40
		very cold > 41
6. continue to clear the text input after each guess 
7. count down the remaining guesses left for the user as they continue to play
8. let the user take a hint by using the hint button
	8b. the hint button will tell the user either "guess higher" or "guess lower" based on how close the user is to the computer guess.
9. Tell the user either: 
	9a. "You win! Do you want to play again?"
	9b. "Sorry! You didn't win this time. Would you like to play again?"
10. The "Play Again" button should 
	10a. reset the users guesses and 
	10b. have the computer repick a random number and
	10c. clear all text on the page.
*/


