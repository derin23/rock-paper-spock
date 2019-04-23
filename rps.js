
var userAnswer = prompt("Rock Paper Spock");

var computerAnswer = Math.ceil(Math.random() * 3); 

var Rock = 1;
var Paper = 2;
var Spock = 3;

console.log(computerAnswer);


if (userAnswer == "Rock" ||  userAnswer == "rock" && computerAnswer == Rock) {

	alert("Tie Game");
}

else if (userAnswer == "Rock" ||  userAnswer == "rock"&& computerAnswer == Paper) {
	
	alert("You Lost")
}

else if (userAnswer == "Rock" ||  userAnswer == "rock" && computerAnswer == Spock) {
	
	alert("You Won")
}

else if (userAnswer == "Paper" ||  userAnswer == "paper" && computerAnswer == Rock) {

	alert("You Won");
}

else if (userAnswer == "Paper" ||  userAnswer == "paper" && computerAnswer == Paper) {
	alert("You Tied")
}

else if (userAnswer == "Paper" ||  userAnswer == "paper" && computerAnswer == Spock) {
	
	alert("You Lost")
}

else if (userAnswer == "Spock" ||  userAnswer == "spock" && computerAnswer == Rock) {

	alert("You Lost");
}

else if (userAnswer == "Spock" ||  userAnswer == "spock" && computerAnswer == Paper) {
	
	alert("You Won")
}

else if (userAnswer == "Spock" ||  userAnswer == "spock" && computerAnswer == Spock) {
	
	alert("You Tied")
}

else{
	
	alert("Pick Rock, Paper or Spock!")

}


