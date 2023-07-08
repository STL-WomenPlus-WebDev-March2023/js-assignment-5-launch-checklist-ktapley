// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: ${name}</li>
                     <li>Diameter: ${diameter}</li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: ${distance}</li>
                     <li>Number of Moons: ${moons}</li>
                 </ol>
                 <img src="${imageUrl}">
                 `
}

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    }
    if (isNaN(testInput)) {
        return "Not a Number";
    }
    if (isNaN(testInput) === false) {
        return "Is a Number";
    }
}


function formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass) {

    let faultyItems = document.getElementById("faultyItems");
    let pilotStatus = document.getElementById("pilotStatus");
    let copilotStatus = document.getElementById("copilotStatus");
    let fuelStatus = document.getElementById("fuelStatus");
    let cargoStatus = document.getElementById("cargoStatus");

    if (validateInput(pilotName.value) === "Empty" || validateInput(copilotName.value) === "Empty" || validateInput(fuelLevel.value) === "Empty" || validateInput(cargoMass.value) === "Empty") {
        alert("All fields are required!");
    }
    if (validateInput(pilotName.value) === "Is a Number" || validateInput(copilotName.value) === "Is a Number" || validateInput(fuelLevel.value) === "Not a Number" || validateInput(cargoMass.value) === "Not a Number") {
        alert("Make sure to enter valid information for each field!")
    } else {
        faultyItems.style.visibility = 'visible';
        pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
        copilotStatus.innerHTML = `Co-pilot ${copilotName.value} is ready for launch`;
    }

    let launchStatus = document.getElementById("launchStatus");

    if (fuelLevel.value < 10000) {
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
        faultyItems.style.visibility = "visible";
        fuelStatus.innerHTML = "Fuel too low for launch";
    }
    else if (cargoMass.value > 10000) {
        faultyItems.style.visibility = "visible";
        cargoStatus.innerHTML = "Cargo mass too high for launch";
        launchStatus.innerHTML = "Shuttle not ready for launch";
        launchStatus.style.color = "red";
    }
    else {
        launchStatus.innerHTML = "Shuttle is ready for launch";
        launchStatus.style.color = "green";
        faultyItems.style.visibility = "visible";
    }

}

// async function myFetch() {
//     let planetsReturned;

//     planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then(function (response) {
//         response.json()
//     });

//     return planetsReturned;
// }

// function pickPlanet(planets) {
// }

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet;
// module.exports.myFetch = myFetch;
