// const { formSubmission } = require("./scriptHelper");

window.addEventListener("load", function () {


    // *********** THIS CODE IS WORKING! *********** 

    // fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
    //   response.json().then(function(planets) {
    //     let missionTarget = document.getElementById("missionTarget");
    //       let selection = Math.floor(Math.random() * planets.length);
    // let planetSelection = planets[selection];
    //       missionTarget.innerHTML = `
    //                  <h2>Mission Destination</h2>
    //                  <ol>
    //                      <li>Name: ${planetSelection.name}</li>
    //                      <li>Diameter: ${planetSelection.diameter}</li>
    //                      <li>Star: ${planetSelection.star}</li>
    //                      <li>Distance from Earth: ${planetSelection.distance}</li>
    //                      <li>Number of Moons: ${planetSelection.moons}</li>
    //                  </ol>
    //                  <img src="${planetSelection.image}">
    //                  `
    //   });
    // });


    //*****************************************

    //*********** THIS CODE IS NOT WORKING! ***********

    // let listedPlanets;
    // let listedPlanetsResponse = myFetch();
    // listedPlanetsResponse.then(function(result) {
    // listedPlanets = result;
    //   console.log(listedPlanets);
    // }).then(function() {
    //   console.log(listedPlanets);
    //   let planetSelection = pickPlanet(listedPlanets)
    //   addDestinationInfo(document, planetSelection.name, planetSelection.diameter, planetSelection.star, planetSelection.distance, planetSelection.moons, planetSelection.image);
    // })

    myFetch().then(function (response) {
        let planetSelection = pickPlanet(response);
        addDestinationInfo(document, planetSelection.name, planetSelection.diameter, planetSelection.star, planetSelection.distance, planetSelection.moons, planetSelection.image);
    })

    //*****************************************


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