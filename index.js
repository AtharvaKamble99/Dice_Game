var randomNumber = Math.floor(Math.random() * 6) + 1; // 1-6

//dice1.png - dice6.png
var randomDiceImg = "dice" + randomNumber + ".png";

// images/dice1.png -images/dice6.png.
var randomImageSource = "images/" + randomDiceImg;

var img1 = document.querySelectorAll("img")[0];

img1.setAttribute("src", randomImageSource);

var randomnumber2 = Math.floor(Math.random() * 6) + 1;

// var randomDiceImg2="dice"+randomnumber2+".png";

var randomImageSource2 = "images/dice" + randomnumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];

img2.setAttribute("src", randomImageSource2);

// player1 wins
if (randomNumber > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 wins!!";

  //player 2 wins
} else if (randomnumber2 > randomNumber) {
  document.querySelector("h1").innerHTML = "Player2 wins!!";
} else {
  document.querySelector("h1").innerHTML = "Draw!!";
}
