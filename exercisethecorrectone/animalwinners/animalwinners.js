"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

const settings = {
    filter: null,
    sortBy: null,
    sortDir: "asc"
}

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0,
    winner: false
    // TODO: Add winner-info

};

function start() {
    console.log("ready");

    loadJSON();

    // TODO: Add event-listeners to filter and sort buttons
}


async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();

    // when loaded, prepare data objects
    prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
    allAnimals = jsonData.map(preapareObject);

    buildList();
}

function preapareObject(jsonObject) {
    const animal = Object.create(Animal);

    const texts = jsonObject.fullname.split(" ");
    animal.name = texts[0];
    animal.desc = texts[2];
    animal.type = texts[3];
    animal.age = jsonObject.age;

    return animal;
}

function buildList() {
    const currentList = allAnimals; // TODO: Add filter and sort on this list, before displaying
    displayList(currentList);
}

function displayList(animals) {
    // clear the list
    document.querySelector("#list tbody").innerHTML = "";

    // build a new list
    animals.forEach(displayAnimal);
}

function displayAnimal(animal) {
    // create clone
    const clone = document.querySelector("template#animal").content.cloneNode(true);

    // set clone data

    // TODO: Display winner

    // TODO: Display star

    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // TODO: Add event listeners for star and winner

    // Winners
    clone.querySelector("[data-field=winner]").dataset.winner = animal.winner;
    clone.querySelector("[data-field=winner]").addEventListener("click", clickWinner)

    function clickWinner() {
        if (animal.winner === true) {
            animal.winner = false;
        } else {
            tryToMakeWinner(animal);
        }
        displayList(allAnimals);
    }


    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}


function tryToMakeWinner(selectedAnimal) {

    const winners = allAnimals.filter(animal => animal.winner);

    const numbersOfWinners = winners.length;
    const other = winners.filter(animal => animal.type === selectedAnimal.type).shift();

    if (other !== undefined) {
        console.log("There can only be one winner");
        removeOther(other);
    } else if (numbersOfWinners >= 2) {
        console.log("The can on ly be two winners");
        removeAorB(winners[0], winners[1]);
    } else {
        makeWinner(selectedAnimal);
    }



    function removeOther(other) {
        document.querySelector("#onlyonekind").classList.add("show");
        document.querySelector("#onlyonekind .closebutton").addEventListener("click", closeDialog);
        document.querySelector("#onlyonekind [data-action='remove1']").addEventListener("click", clickRemoveOther);

        document.querySelector("#onlyonekind .animal1").textContent = `${other.name}, the ${other.type}`;

        function closeDialog() {
            document.querySelector("#onlyonekind").classList.remove("show");
            document.querySelector("#onlyonekind .closebutton").removeEventListener("click", closeDialog);
            document.querySelector("#onlyonekind [data-action='remove1']").removeEventListener("click", clickRemoveOther);
        }

        function clickRemoveOther() {
            removeWinner(other);
            makeWinner(selectedAnimal);
            buildList();
            closeDialog();
        }
    }

    function removeAorB(winnerA, winnerB) {
        document.querySelector("#onlytwowinners").classList.add("show");
        document.querySelector("#onlytwowinners .closebutton").addEventListener("click", closeDialog);
        document.querySelector("#onlytwowinners [data-action='remove1']").addEventListener("click", clickRemoveA);
        document.querySelector("#onlytwowinners [data-action='remove2']").addEventListener("click", clickRemoveB);

        document.querySelector("#onlytwowinners .animal1").textContent = `${winnerA.name}, the ${winnerA.type}`;
        document.querySelector("#onlytwowinners .animal2").textContent = `${winnerB.name}, the ${winnerB.type}`;

        function closeDialog() {
            document.querySelector("#onlytwowinners").classList.remove("show");
            document.querySelector("#onlytwowinners .closebutton").removeEventListener("click", closeDialog);
            document.querySelector("#onlytwowinners [data-action='remove1']").removeEventListener("click", clickRemoveA);
            document.querySelector("#onlytwowinners [data-action='remove2']").removeEventListener("click", clickRemoveB);
        }

        function clickRemoveA() {
            removeWinner(winnerA);
            makeWinner(selectedAnimal);
            buildList();
            closeDialog();
        }

        function clickRemoveB() {
            removeWinner(winnerB);
            makeWinner(selectedAnimal);
            buildList();
            closeDialog();
        }   

        removeWinner(winnerA);
        makeWinner(selectedAnimal);
        removeWinner(winnerB);
        makeWinner(selectedAnimal);
    }

    function removeWinner(winnerAnimal) {
        winnerAnimal.winner = false;
    }

    function makeWinner(animal) {
        animal.winner = true;
    }

}



