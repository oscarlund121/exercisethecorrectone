"use strict";

// ROCK, PAPER, SCISSOR


const player1 = document.getElementById("player1");
const player2 = document.getElementById("player2"); 

player1.classList.add("shake");
player2.classList.add("shake");


function getRandomCom() {
  const randomNumber = Math.random()

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    return "Rock";
  } else if (randomNumber > 1 / 3 && randomNumber < 2 / 3) {
    return "Paper";
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    return "Scissors";
  }
  console.log(randomNumber)
}


function gamlePlay(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw"; 
  } 
  else if (playerSelection === "Rock" && computerSelection === "Scissors") {
    return "win"; 
  } 
  else if (playerSelection === "Paper" && computerSelection === "Rock") {
    return "win"; 
  } 
  else if (playerSelection === "Scissors" && computerSelection === "Paper") {
    return "win"; 
  } 
  else {
    return "lose"; 
  }
}


const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");

rockButton.addEventListener("click", () => handlePlayerChoice("Rock"));
paperButton.addEventListener("click", () => handlePlayerChoice("Paper"));
scissorsButton.addEventListener("click", () => handlePlayerChoice("Scissors"));


function handlePlayerChoice(playerChoice) {
  const computerChoice = getRandomCom();
  const result = gamlePlay(playerChoice, computerChoice);

  const winElement = document.getElementById("win");
  const loseElement = document.getElementById("lose");
  const drawElement = document.getElementById("draw");


  winElement.classList.add("hidden");
  loseElement.classList.add("hidden");
  drawElement.classList.add("hidden");


  if (result === "win") {
    winElement.classList.remove("hidden");
  } else if (result === "lose") {
    loseElement.classList.remove("hidden");
  } else {
    drawElement.classList.remove("hidden");
  }
}



// RESSOURCER

// https://www.reddit.com/r/learnprogramming/comments/13tij47/javascript_rock_paper_scissors_help/
// https://dev.to/tobidelly/rock-paper-scissors-with-javascript-5779
// https://www.youtube.com/watch?v=EerdGm-ehJQ&t=9152s&ab_channel=SuperSimpleDev
// Spil fra tema 4
