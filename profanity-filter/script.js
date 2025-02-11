const curseWords = [{
  bad: "var", good: "const",
},
{ bad: "float", good: "grid", },
{
  bad: "marquee", good: "just don't",

},];


function replaceCurseWords(text) {
  // Splitter teksten op
  let words = text.split(' ')
  // Gennemgår hvert ord og erstatter hvis ordet er dårligt
  words = words.map((word) => {
    let replacedWord = word
    curseWords.forEach((curseWord) => {
      if (word === curseWord.bad) {
        replacedWord = curseWord.good
      }
    });
    return replacedWord
  });
  // Sammensæt ordene til en tekst igen
  return words.join(' ')
}
// Tjekker om ord et skiftet ud 
console.log(replaceCurseWords("var float marquee"))



document.getElementById('replaceButton').addEventListener('click', () => {
  const textElement = document.getElementById('text')
  const originalText = textElement.innerHTML
  const newText = replaceCurseWords(originalText)


  // Hvis tekste nahr ændret sig skal alert komme frem, ellers skal teksten ændres
  if (originalText === newText) {
    alert("Teksten er allerede opdateret!")
  } else {
    textElement.innerHTML = newText 
  }
});