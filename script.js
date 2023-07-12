// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {

    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanets;
    let listedPlanetsResponse = myFetch();
    listedPlanetsResponse.then(function (response) {
        listedPlanets = response;
    }).then(function () {
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let planetSelection = pickPlanet(listedPlanets);
        addDestinationInfo(document, planetSelection.name, planetSelection.diameter, planetSelection.star, planetSelection.distance, planetSelection.moons, planetSelection.image);
    })

    // **************** THIS CODE WORKS TOO AND MAKES WAYYYYY MORE SENSE! ****************

    // myFetch().then(function (response) {
    //     let planetSelection = pickPlanet(response);
    //     addDestinationInfo(document, planetSelection.name, planetSelection.diameter, planetSelection.star, planetSelection.distance, planetSelection.moons, planetSelection.image);
    // })

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