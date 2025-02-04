// Breadcrumb-navigation med JavaScript

// I denne opgave vil vi tage et kig på, hvordan vi kan bruge JavaScript til at omdanne en simpel datastruktur til en visuel repræsentation på et website. Målet er at generere en breadcrumb-navigation baseret på det givne data, med et lille twist: det sidste element i navigationen skal ikke være et link!


// Du skal arbejde med følgende datastruktur:
// const bc = [{
//   name: "Hvidevarer",
//   link: "/hvidevarer"
// }, {
//   name: "Vaskemaskiner",
//   link: "/hvidevarer/vaskemaskiner"
// }, {
//   name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/"
// },];
// Dette array repræsenterer trinene i vores breadcrumb-navigation.

// Fremgangsmåde:

// Start evt. med at lave en simpel HTML-struktur. Du skal have et navigationselement (<nav>) til at vise dine brødkrummepunkter, samt en knap til at udløse genereringen af brødkrummestien.
// Lav en funktion, der returnerer navnet på hvert punkt i brødkrummenavigationen i et liste-element med et tilhørende link. Det sidste punkt skal kun være tekst uden et link.
// Interaktion med knappen: Tilføj en event listener til din knap, så når den klikkes, vil din breadcrumb-genererende funktion blive kaldt, og resultatet vil blive vist på dit website.
// Styling: Listeelementerne i brødkrummestien skal optræde på en række og være opdelt af en skråstreg (/) eller lignende symbol. Skråstregen skal ikke være en del af det klikbare link.
// Lav gerne kommentarer i din kode for at forklare, hvordan de forskellige dele fungerer.


const bc = [{
  name: "Hvidevarer",
  link: "/hvidevarer"
}, {
  name: "Vaskemaskiner",
  link: "/hvidevarer/vaskemaskiner"
}, {
  name: "Bosch",
  link: "/hvidevarer/vaskemaskiner/bosch/"
}];

// laver en knap der retunerer funktion returnName
document.querySelector("button").addEventListener("click", returnName) 

function returnName() {
  // løber array'et igennem, hvor vare er element og last er elementets position.
  bc.forEach((vare, last) => {
    console.log(vare.name);
    console.log(vare.link);
    //  finder ud af om last er det sidste element, og sørger for at det ikke har link. 
    if (last === bc.length - 1) {
      document.querySelector("ul").innerHTML += `<li>${vare.name}</li>`;
    // giver de resterende en liste med links. 
    } else {
      document.querySelector("ul").innerHTML += `<li><a href="${vare.link}">${vare.name}</a></li>`;
    }
  });
}








