// Declaring some Variable for the score of each Player.
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;
dice = Math.floor(Math.random() * 6) + 1;

document.querySelector("#current-" + activePlayer).textContent = dice;

var x = document.querySelector('#current-0').textContent;
console.log(x);

document.querySelector('.dice').style.display = 'none';