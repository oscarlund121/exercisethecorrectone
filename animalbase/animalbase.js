"use strict";

window.addEventListener("DOMContentLoaded", start);

let allAnimals = [];

// The prototype for all animals: 
const Animal = {
    name: "",
    desc: "-unknown animal-",
    type: "",
    age: 0
};

function start() {
    console.log("ready");

    // TODO: Add event-listeners to filter and sort buttons

    registerButtons();
    loadJSON();
}

function registerButtons() { 
    document.querySelectorAll("[data-action=filter]").forEach(button => button.addEventListener("click", selectFilter));
  }



async function loadJSON() {
    const response = await fetch("animals.json");
    const jsonData = await response.json();

    // when loaded, prepare data objects
    prepareObjects(jsonData);
}

function prepareObjects(jsonData) {
    allAnimals = jsonData.map(preapareObject);

    // TODO: This might not be the function we want to call first
    displayList(allAnimals);
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

function selectFilter(event) {
    const filter = event.target.dataset.filter
    console.log(`User selected: ${filter}`); 
    filterList(filter);
}

function filterList(filterBy) {
    // create filtered list of only cats 
    let filteredList = allAnimals
    if (filterBy === "cat") {
        // Create a new list with only cats
        filteredList = allAnimals.filter(isCat);
    } else if (filterBy === "dog") {
        // create a new list with only dogs
        filteredList = allAnimals.filter(isDog);
    } else if (filterBy === "dragon") {
        // create a new list with only dogs
        filteredList = allAnimals.filter(isDragon);
    } else if (filterBy === "horse") {
        // create a new list with only dogs
        filteredList = allAnimals.filter(isHorse);
    }
    displayList(filteredList);
}

function isCat(animal) {
    return animal.type === "cat";
}
function isDog(animal) {
    return animal.type === "dog";
}
function isDragon(animal) {
    return animal.type === "dragon";
}
function isHorse(animal) {
    return animal.type === "horse";
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
    clone.querySelector("[data-field=name]").textContent = animal.name;
    clone.querySelector("[data-field=desc]").textContent = animal.desc;
    clone.querySelector("[data-field=type]").textContent = animal.type;
    clone.querySelector("[data-field=age]").textContent = animal.age;

    // append clone to list
    document.querySelector("#list tbody").appendChild(clone);
}


