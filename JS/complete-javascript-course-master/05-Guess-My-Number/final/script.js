'use strict';
// let secret_number = Math.trunc(Math.random() * 20) + 1;
// let score = 20;
// let highscore = 0;

// const displayMessage = function (message){
//     document.querySelector('.message').textContent = message; 
// }


// document.querySelector('.check').addEventListener('click', function () {
//   const guess = Number(document.querySelector('.guess').value);
//   console.log(guess);
//   //When there is no input
//   if (!guess) {
//     displayMessage('⛔️ No number!');
//   }
//    else if (guess === secret_number) {
//     displayMessage('🎉🎉Correct Number');
//     document.querySelector('body').style.backgroundColor = '#60b347';
//     document.querySelector('.number').style.width = '30rem';
//     document.querySelector('.number').textContent = secret_number;
//     if(score > highscore){
//         highscore = score;
//         document.querySelector('.highscore').textContent = highscore;
//     }
// }
//     //When guess is wrong
//     else if(guess !== secret_number){
//         if (score > 1) {
//             displayMessage((guess > secret_number) ? '📈Your guess is high!' : '📉Your guess is low!');
//             score--;
//             document.querySelector('.score').textContent = score;
//           } else {
//             displayMessage('👎You lost the game');
//           document.querySelector('.score').textContent = 0;
//           }
//     }
// });
// document.querySelector('.again').addEventListener('click', function () {
//   score = 20;
//   secret_number = Math.trunc(Math.random() * 20) + 1;
//   document.querySelector('.number').style.width = '15rem';
//   document.querySelector('body').style.backgroundColor = '#222';
//   displayMessage('Start guessing...');
//   document.querySelector('.score').textContent = 20;
//   document.querySelector('.number').textContent = '?';
//   document.querySelector('.guess').value = '';
// });

let secret_number = Math.trunc(Math.random()*20+1);
console.log(secret_number);
let score = 20;
let highscore = 0;
const displayMessage = function(message){
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value);
    if(!guess){
        displayMessage('No number...');
    }

    else if(guess === secret_number){
        displayMessage('Congratulation..');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secret_number;
        if(score > highscore){
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    else if(guess !== secret_number){
        if(score > 1){
        displayMessage(guess > secret_number ? 'Your guess is too large' : 'Your guess is too small');
        score--;
        document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('You lost the game..');
            score = 0;
            document.querySelector('.score').textContent = score;
        }
    }
    
    document.querySelector('.again').addEventListener('click', function(){
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        score = 20;
        document.querySelector('.score').textContent = score;
        secret_number = Math.trunc(Math.random()*20+1);
        document.querySelector('.number').textContent = '?';
        displayMessage('Start guessing...')
        document.querySelector('.guess').value = '';
    })
})