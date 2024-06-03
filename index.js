function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomDice = "images/dice" + randomNumber1 + ".png";

  var dice1 = document.querySelectorAll("img")[0];
  dice1.setAttribute("src", randomDice);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomDice2 = "images/dice" + randomNumber2 + ".png";

  var dice2 = document.querySelectorAll("img")[1];
  dice2.setAttribute("src", randomDice2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Win!";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 Win!";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}

document.getElementById("rollButton").addEventListener("click", function () {
    rollDice();
});