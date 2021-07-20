var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImagesSource = "images/" + randomDiceImage;

var image1 = document.querySelectorAll('img')[0];

image1.setAttribute("src",randomImagesSource);



var randomNumber2 = Math.floor(Math.random() * 6) +1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var image2 = document.querySelectorAll('img')[1];

image2.setAttribute("src",randomImageSource2);

var heading = document.querySelector('h1');

if (randomNumber1 === randomNumber2) {
  heading.innerHTML = "Draw!";
}
else if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "Player 1 wins!";
}
else{
  heading.innerHTML = "Player 2 wins!";
}
