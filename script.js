'use strict';

/*

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // when the player is no input
    if (!guess) {
        // document.querySelector('.message').textContent = 'No number';
        displayMessage('No number!');

        //when the player wins!
    } else if (guess === secretNumber) {
        displayMessage('Correct number!');
        //document.querySelector('.message').textContent = 'Correct number!';
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('body').style.backgroundColor = '#60B347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;

        }
        // when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            //document.querySelector('.message').textContent = guess > secretNumber ? 'too high number!' : 'too low number!';
            displayMessage(guess > secretNumber ? 'too high number!' : 'too low number!');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = 'you lost the game!';
            displayMessage('you lost the game!')
            document.querySelector('.score').textContent = 0;

            document.querySelector('body').style.backgroundColor = '#ff0000';
            document.querySelector('.number').style.width = '30rem';
        }
    }



    /* 
    //when the player too high
} else if (guess > secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'too high number!';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'you lost the game!';
        document.querySelector('.score').textContent = 0;

        document.querySelector('body').style.backgroundColor = '#ff0000';
        document.querySelector('.number').style.width = '30rem';
    }
    //when the player too low!
} else if (guess < secretNumber) {
    if (score > 1) {
        document.querySelector('.message').textContent = 'too low number!';
        score--;
        document.querySelector('.score').textContent = score;
    } else {
        document.querySelector('.message').textContent = 'you lost the game!';
        document.querySelector('.score').textContent = 0;

        document.querySelector('body').style.backgroundColor = '#ff0000';
        document.querySelector('.number').style.width = '30rem';
    }
}
*/

    document.querySelector('.again').addEventListener('click', function () {
        score = 20;
        secretNumber = Math.trunc(Math.random() * 20 + 1);

        // document.querySelector('.message').textContent = 'Start guessing...';
        displayMessage('Start guessing....');
        document.querySelector('.score').textContent = score;
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';

        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
    })



});