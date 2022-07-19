"use strict";
//Selecting and manipulating Elements

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent="✌ Correct Number";

// document.querySelector('.number').textContent=13;
// document.querySelector('.score').textContent=11;
// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value=20;
// console.log(document.querySelector('.guess').value);

// Handling click event
// passing event and event handler function as argument to event listner method as funciton is also a value -->
// const x=function(){
//     console.log(23);
// }
// console.log(x);

// we do not call event handler function,only define.it is js engine who call it as soon as the event happens-->
// document.querySelector('.check').addEventListener('click',function(){
//     //This is an event handler function
//     console.log(document.querySelector('.guess').value);
//     document.querySelector('.message').textContent="✌ Correct Number";
// });



let secreteNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore=0;

// document.querySelector(".number").textContent = secreteNumber;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  //when there is no input through ui
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  } 
  //when player wins 
  else if (guess == secreteNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secreteNumber;

    document.querySelector('body').style.backgroundColor='#60b347';
    document.querySelector('.number').style.width='30rem';

    if(score>highscore){
        highscore=score;
        document.querySelector('.highscore').textContent=highscore;
    }

  } 
  //when guess is too high
  else if (guess > secreteNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too High";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  } 
  //when guess is too low
  else if (guess < secreteNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "📈 Too Low";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      document.querySelector(".message").textContent = "💥 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click',function(){
    score=20;
    secreteNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector('.score').textContent=score; 
    document.querySelector('.message').textContent='Start guessing...';
    document.querySelector('.number').textContent='?';
    document.querySelector('.guess').value='';

    
    document.querySelector('body').style.backgroundColor="#222";
    document.querySelector('.number').style.width='15rem';
});

