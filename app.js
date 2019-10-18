// Declaring some Variable for the score of each Player.
var scores, roundScore, activePlayer;

scores = [0, 0];
roundScore = 0;
activePlayer = 0;
dice = Math.floor(Math.random() * 6) + 1;

document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
// Setting an event handler
document.querySelector('.btn-roll').addEventListener('click', function() {
    // Random Number.
    dice = Math.floor(Math.random() * 6) + 1;
    //Display the result
    var diceDom = document.querySelector('.dice');
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';
    // Update the round score if the rolled Number was not a 1
    if (dice !== 1) {
        //add score
        roundScore += dice;
        document.querySelector("#current-" + activePlayer).textContent = roundScore;
    } else {
        // Next Player.
        nextPlayer();

    }
});

document.querySelector('.btn-hold').addEventListener('click', function() {
    // Add Current Score to the global Score
    scores[activePlayer] += roundScore;
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check it the Player won.
    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

    } else {
        // The Next Player.
        nextPlayer();
    }

});

function nextPlayer() {
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    // document.querySelector('.player-0-panel').classList.remove('active');
    // document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display = 'none';
}










// document.querySelector("#current-" + activePlayer).textContent = dice;

// var x = document.querySelector('#current-0').textContent;
// console.log(x);