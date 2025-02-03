"use strict"

/* 
FUNCTIONS ØVELSE
*/

// sayName("Oscar", "Lund")
// function sayName(firstName, lastName) {
//   console.log(`Hello ${firstName} ${lastName}`)
// }


// presentPet("Oscar", "Bunny", "Brian")
// function presentPet(firstName, petType, petName) {
//   console.log(`My name is ${firstName} I have a ${petType} and his name is ${petName}`)
// }


// presentPet("Oscar", "Bunny", "Brian")
// function presentPet(firstName, petType, petName) {
//   console.log(`My name is ${firstName}, I have a ${petType} and his name is ${petName}`)
// }


// presentPet("Oscar", 25, "Brian")
// function presentPet(firstName, petType, petName) {
//   console.log(`My name is ${"firstName"} I have a ${"petType"} and his name is ${"petName"}`)
// }



// const firstName = "Oscar"
// const petType = "Bunny"
// const petName = "Brian"

// presentPet(firstName, petType, petName)
// function presentPet(firstName, petType, petName) {
//   console.log(`My name is ${firstName}, I have a ${petType} and his name is ${petName}`)
// }


// // Man kan overskrive en variabel
// presentPet("Oscar", "Bunny", "Brian")
// function presentPet(firstName, petType, petName) {
//   firstName = "Lund"
//   console.log(`My name is ${firstName} I have a ${petType} and his name is ${petName}`)
// }


// const beloeb = 2
// const moms = 25

// setMoms(beloeb, moms)
// function setMoms(beloeb, moms){
//   console.log( beloeb / 100 * moms )
// }


// FUNKTIONER MED RETUR-VÆRDI


// Eksperiment #1
// function greeting(firstName){
//   return `Hello ${firstName}`
// }
// const result = greeting("Oscar")

// console.log(result)


// Eksperiment #2
// 2.1
// function greeting(firstName){
//   return `Hello ${firstName}`
// }
// greeting("Oscar")

// console.log(greeting)

// Kalder ikke noget data
// logger funktionen selv, men ikke dens return-værdi.

// 2.2
// function greeting(firstName){
//   return `Hello ${firstName}`
// }

// console.log(greeting("Oscar"))

// kalder "any name"
// kalder funktionen og logger return-værdien.

// 2.3 

// function greeting(firstName){
//   return `Hello ${firstName}`
// }

// console.log(greeting())
// Hvad sker hvis den bliver kaldt uden parameter?
// Den bliver undefined

// function greeting(firstName = "Oscar"){
//   return `Hello ${firstName}`
// }

// console.log(greeting())

// 2.4
// function greeting(firstName){
//   return `Hello ${firstName}`
// }
// const txt = `Greeting is ${greeting("Oscar")}`

// console.log(txt)

// viser, hvordan man kan bruge en funktion i en streng (template literal) og gemme resultatet i en variabel.



// function greeting(firstName){
//   return `Hello ${firstName}`
// }

// const personToGreet = "Oscar"
// const greetingToOscar = greeting(personToGreet)

// console.log(greetingToOscar)
// console.log(greeting(personToGreet))
// console.log(greeting("Oscar"))
// Alle tre retunerer det samme 

// Neste functions kald inde i hinanden
// function greeting(firstName){
//   return `Hello ${firstName}`
// }
// function lengthOfString(str){
//   return str.length
// }
// console.log(lengthOfString("Oscar"))
// console.log(lengthOfString(greeting("Oscar")))

// const greetingToOscar = greeting("Oscar")


