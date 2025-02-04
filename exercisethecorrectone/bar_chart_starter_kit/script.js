const list = document.querySelector("ul");

// const li = document.createElement("li");
// li.style.setProperty("--height", "30");
// list.appendChild(li);

const barArray = []

setInterval(generateBars, 100)

function generateBars() {
  const randomNumber = Math.round(Math.random() * 100)
  const li = document.querySelector("li");
  li.style.setProperty("--height", randomNumber);
  list.appendChild(li);
  barArray.push(randomNumber)
  console.log("GENERATE BARS", barArray)
  if (barArray.length >= 20) {
    console.log("bare er længere end 20")
    barArray.shift(randomNumber) 
  }

}

