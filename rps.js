var  userAnswer;
var computerAnswer;



var Rock = 1;
var Paper = 2;
var Spock = 3;
var winner;

function Roc(){

	var Ans = document.getElementById("Rock").innerHTML;
	userAnswer = Ans;
	console.log(userAnswer);
	playGame();

};

function Pape(){

	var Ans = document.getElementById("Paper").innerHTML;
	userAnswer = Ans;
	console.log(userAnswer);
	playGame();

};

function Spoc(){

	var Ans = document.getElementById("Spock").innerHTML;
	userAnswer = Ans;
	console.log(userAnswer);
	playGame();

};

function playGame(){
		
		computerAnswer = Math.ceil(Math.random() * 3);

if (userAnswer =="Rock" && computerAnswer == Rock) {

	computerAnswer = "Rock";
	winner = "Tie Game.";
	 
	logWinner();
}

else if (userAnswer =="Rock" && computerAnswer == Paper) {
	
	computerAnswer = "Paper";
	winner = "You Lost.";
	logWinner();
}

else if (userAnswer =="Rock"   && computerAnswer == Spock) {
	
	computerAnswer = "Spock";
	winner = "You Won!";
	logWinner();
}

else if (userAnswer =="Paper" && computerAnswer == Rock) {

	computerAnswer = "Rock";
	winner ="You Won!";
	logWinner();
}

else if (userAnswer =="Paper"   && computerAnswer == Paper) {
	
	computerAnswer = "Paper";
	winner="You Tied.";
	logWinner();
}

else if (userAnswer  =="Paper"  && computerAnswer == Spock) {
	
	computerAnswer = "Spock";
	winner="You Lost.";
	logWinner();
}

else if (userAnswer == "Spock" && computerAnswer == Rock) {

	computerAnswer = "Rock";
	winner="You Lost.";
	logWinner();
}

else if (userAnswer == "Spock" && computerAnswer == Paper) {
	
	computerAnswer = "Paper";
	winner="You Won!";
	logWinner();
}

else if (userAnswer == "Spock" && computerAnswer == Spock) {
	
	computerAnswer = "Rock";
	winner="You Tied.";
	logWinner();
}

else{
	
	alert("Pick Rock, Paper or Spock!")

}
};



function logWinner(){

	document.getElementById("winner").innerHTML = `Computer choose ${computerAnswer}. ${winner}`;
}



