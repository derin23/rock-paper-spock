var  userAnswer;

var computerAnswer;

var Rock = 1;
var Paper = 2;
var Spock = 3;
var winner;

function Roc(){

	var test = document.getElementById("Rock").innerHTML;
	userAnswer = test;
	console.log(userAnswer);
	playGame();

};

function Pape(){

	var test = document.getElementById("Paper").innerHTML;
	userAnswer = test;
	console.log(userAnswer);
	playGame();

};

function Spoc(){

	var test = document.getElementById("Spock").innerHTML;
	userAnswer = test;
	console.log(userAnswer);
	playGame();

};

function playGame(){
		
		computerAnswer = Math.ceil(Math.random() * 3);

if (userAnswer =="Rock" && computerAnswer == Rock) {

	
	winner = "Tie Game";
	 
	logWinner();
}

else if (userAnswer =="Rock" && computerAnswer == Paper) {
	
	
	winner = "You Lost";
	logWinner();
}

else if (userAnswer =="Rock"   && computerAnswer == Spock) {
	
	
	winner = "You Won";
	logWinner();
}

else if (userAnswer =="Paper" && computerAnswer == Rock) {

	winner ="You Won";
	logWinner();
}

else if (userAnswer =="Paper"   && computerAnswer == Paper) {
	
	winner="You Tied";
	logWinner();
}

else if (userAnswer  =="Paper"  && computerAnswer == Spock) {
	
	winner="You Lost";
	logWinner();
}

else if (userAnswer == "Spock" && computerAnswer == Rock) {

	
	winner="You Lost";
	logWinner();
}

else if (userAnswer == "Spock" && computerAnswer == Paper) {
	
	winner="You Won";
	logWinner();
}

else if (userAnswer == "Spock" && computerAnswer == Spock) {
	
	
	winner="You Tied";
	logWinner();
}

else{
	
	alert("Pick Rock, Paper or Spock!")

}
};




function logWinner(){

	document.getElementById("winner").innerHTML = " " + winner;
}

