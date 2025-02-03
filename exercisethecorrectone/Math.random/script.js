"use strict"

const min = 1;
const max = 100;

const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
console.log("Random Number: ", randomNumber)

document.querySelector("button").addEventListener("click", evaluateTextField)

function evaluateTextField() {
  console.log("KLIK", )

  const brugerInput = document.querySelector(".userNumber").value;
  const brugerSvar = document.querySelector(".text");

  const brugerGæt = Number(brugerInput);

  if (brugerGæt === randomNumber) {
    brugerSvar.textContent = "Du gættede rigtigt!";
  } else if (brugerGæt > randomNumber) {
    brugerSvar.textContent = "For højt! Prøv igen.";
  } else {
    brugerSvar.textContent = "For lavt! Prøv igen.";
  }

//   if (brugerInput < randomNumber) {
//   brugerSvar.textContent = "For lavt! Prøv igen";
// } else if (brugerInput > randomNumber) {
//   brugerSvar.textContent = "For højt! Prøv igen.";
// } else {
//   brugerSvar.textContent = "Du gættede rigtigt!";
// }
};





