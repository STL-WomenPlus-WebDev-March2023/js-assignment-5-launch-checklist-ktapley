// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {

    myFetch().then(function (response) {
        let planetSelection = pickPlanet(response);
        addDestinationInfo(document, planetSelection.name, planetSelection.diameter, planetSelection.star, planetSelection.distance, planetSelection.moons, planetSelection.image);
    })

    let submitForm = document.querySelector("form");
    submitForm.addEventListener("submit", function (event) {

        let faultyItems = document.getElementById("faultyItems");
        faultyItems.style.visibility = "hidden";

        let pilotName = document.querySelector("input[name=pilotName]");
        let copilotName = document.querySelector("input[name=copilotName]");
        let fuelLevel = document.querySelector("input[name=fuelLevel]");
        let cargoMass = document.querySelector("input[name=cargoMass]");

        event.preventDefault();

        formSubmission(document, faultyItems, pilotName, copilotName, fuelLevel, cargoMass);

    });

});