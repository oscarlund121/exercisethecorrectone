const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const tbodyPointer = document.querySelector("tbody");
showTheseVehicles(vehicles);


const allElectricVehicles = vehicles.filter((veh) => veh.isElectric === true)

showTheseVehicles(allElectricVehicles)

console.log(allElectricVehicles)


const vehiclesWithMoreThanTwoSeats = vehicles.filter((veh) => veh.passengers > 2)

showTheseVehicles(vehiclesWithMoreThanTwoSeats)

console.log(vehiclesWithMoreThanTwoSeats)


const electricVehiclesOwnedByJonas = vehicles.filter((veh) => veh.isElectric === true && veh.ownedBy === "Jonas")

showTheseVehicles(electricVehiclesOwnedByJonas)

console.log(electricVehiclesOwnedByJonas)


const allRugBroedsVehiclesWithMoreThanOnePassenger = vehicles.filter((veh) => veh.fuel === "Rugbrød" && veh.passengers > 1)

showTheseVehicles(allRugBroedsVehiclesWithMoreThanOnePassenger)

console.log(allRugBroedsVehiclesWithMoreThanOnePassenger)



function showTheseVehicles(arr) {
  tbodyPointer.innerHTML = "";
  arr.forEach((each) => {
    let stops;
    if (each.stops === undefined) {
      stops = "Not of importance"
    } else {
      stops = each.stops
    }

    let type;
    if (each.type === undefined) {
      type = "Not of importance"
    } else {
      type = each.type
    }

    let fuel;
    if (each.fuel === undefined) {
      fuel = "Not of importance"
    } else {
      fuel = each.fuel
    }

    let passengers;
    if (each.passengers === undefined) {
      passengers = "Not of importance"
    } else {
      passengers = each.passengers
    }

    let ownedBy;
    if (each.ownedBy === undefined) {
      ownedBy = "Not of importance"
    } else {
      ownedBy = each.ownedBy
    }

    let isElectric;
    if (each.isElectric === undefined) {
      isElectric = "No"
    } else {
      if (each.isElectric) {
        isElectric = "Yes"
      } else {
        isElectric = "No"
      }
    }

    let isTandem;
    if (each.isTandem === undefined) {
      isTandem = "No"
    } else {
      if (each.isTandem) {
        isTandem = "Yes"
      } else {
        isTandem = "No"
      }
    }
    tbodyPointer.innerHTML += `<tr>
      <td>${type}</td>
      <td>${fuel}</td>
      <td>${passengers}</td> 
      <td>${stops}</td>
      <td>${ownedBy}</td>
      <td>${isElectric}</td>
      <td>${isTandem}</td>
    </tr>`
  })
}


function showAllVehicles() {
  showTheseVehicles(vehicles)
}
document.querySelector("#showAll").addEventListener("click", showAllVehicles)


function showElectricVehicles() {
  showTheseVehicles(allElectricVehicles)
}
document.querySelector("#showElectric").addEventListener("click", showElectricVehicles)


function showMoreThanTwo() {
  showTheseVehicles(vehiclesWithMoreThanTwoSeats)
}
document.querySelector("#showMoreThanTwoSeats").addEventListener("click", showMoreThanTwo)

function ownedByJonas() {
  showTheseVehicles(electricVehiclesOwnedByJonas)
}
document.querySelector("#showElectricOwnedByJonas").addEventListener("click", ownedByJonas)


function showRugBroedsVehiclesWithMoreThanOnePassenger() {
  showTheseVehicles(allRugBroedsVehiclesWithMoreThanOnePassenger)
}
document.querySelector("#showRugbrodWithMoreThanOnePassenger").addEventListener("click", showRugBroedsVehiclesWithMoreThanOnePassenger)

