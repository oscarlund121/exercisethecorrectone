// Nu skal vi lave en “Gæt et tal” igen, men med rollerne byttet rundt:

// Det er nu computeren der skal gætte det tal mellem 0 og 100 du tænker på.

// Når du herefter klikker på en knap skal computeren komme med et kvalificeret gæt og det gæt skal vises på siden. 



// Der skal så være tre knapper hvor brugeren kan fortælle computeren om dens gæt er for højt, for lavt eller om den har gættet rigtigt.

// Der kan også være en knap til at starte det hele

// Computeren skal gætte tallet hurtigst muligt.

// Sørg for at man ikke kan klikke på knapper man ikke skal kunne klikke på.

// For at få inspiration til løsningen af opgaven kan i sætte jer sammen i grupper af to og analysere hvad der foregår når man leger gæt et tal.

// Hvordan gætter man tallet hurtigst og mest rationelt? Start på 50 og halvere og tillæg det halve. 

// Her er et link til hvordan opgaven kunne se ud ustylet, jeres skal være stylet og med animationer, giv den gas med UI/UX.

// Ekstra: Når tallet er gættet skal computeren skrive til siden hvor mange gæt den har brugt.


// GÆT ET TAL (OMBYTTET)

let min = 1
let max = 100
let guessCount = 0


document.querySelector("#startGame").addEventListener("click", startGame)
document.querySelector("#tooHigh").addEventListener("click", highBut)
document.querySelector("#tooLow").addEventListener("click", lowBut)
document.querySelector("#correctGuess").addEventListener("click", correctGuess)
document.querySelector("#tooHigh").classList.add("hidden")
document.querySelector("#tooLow").classList.add("hidden")
document.querySelector("#correctGuess").classList.add("hidden")
document.querySelector("#resetGame").classList.add("hidden")


function startGame() {
  min = 1;
  max = 100;
  guessCount = 0
  document.querySelector("#comGuess").textContent = `Commi gætter: ${Math.floor((min + max) / 2)}`
  document.querySelector("#guessCount").textContent = ""
  document.querySelector("#startGame").classList.add("hidden")
  document.querySelector("#tooHigh").classList.remove("hidden")
  document.querySelector("#tooLow").classList.remove("hidden")
  document.querySelector("#correctGuess").classList.remove("hidden")
  document.querySelector("#resetGame").classList.remove("hidden")
}

function highBut() {
  if (Math.floor((min + max) / 2) > min) {
    max = Math.floor((min + max) / 2) - 1
    document.querySelector("#comGuess").textContent = `Commi gætter: ${Math.floor((min + max) / 2)}`
    console.log(`For lavt! Nyt gæt: ${Math.floor((min + max) / 2)}`)
  }
  guessCount++

}

function lowBut() {
  if (Math.floor((min + max) / 2) < max) {
    min = Math.floor((min + max) / 2) + 1
    document.querySelector("#comGuess").textContent = `Commi gætter: ${Math.floor((min + max) / 2)}`
    console.log(`For lavt! Nyt gæt: ${Math.floor((min + max) / 2)}`)
  }
  guessCount++

}

function correctGuess() {
  document.querySelector("#comGuess").textContent = `Det var flot`
  document.querySelector("#comGuess").textContent = "Spillet er nulstillet."
  document.querySelector("#resetGame").classList.remove("hidden")
  document.querySelector("#resetGame").addEventListener("click", startGame)
  document.querySelector("#tooHigh").classList.add("hidden")
  document.querySelector("#tooLow").classList.add("hidden")
  document.querySelector("#correctGuess").classList.add("hidden")
  updateGuess()
}

function updateGuess() {
  document.querySelector("#guessCount").textContent = `Antal gæt: ${guessCount}`
  console.log("Korrekt gæt!")
  console.log(`Antal gæt: ${guessCount}`)
}



