// Declaring some Variable for the score of each Player.
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 1;
dice = Math.floor(Math.random() * 6) + 1;


// Setting an event handler
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Random Number.
    dice = Math.floor(Math.random() * 6) + 1;
    //Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    // Update the round score if the rolled Number was not a 1


});













// document.querySelector("#current-" + activePlayer).textContent = dice;

// var x = document.querySelector('#current-0').textContent;
// console.log(x);