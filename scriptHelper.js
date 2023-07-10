// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   // I have created a missionTarget variable to help me select the missionTarget div in the HTML file.
   // I am then using the innerHTML property to add the HTML formatting to the missionTarget div.
   let missionTarget = document.getElementById("missionTarget");
   missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `;
}

function validateInput(testInput) {

   // Here I am creating an if else statement to check if the input is empty, a number, or a string. This validation then returns a string to be used in the formSubmission function.
   if (testInput === "" || testInput === null || testInput === undefined) {
      return "Empty";
   } else if (isNaN(testInput)) {
      return "Not a Number";
   } else if (typeof(testInput) === "number") {
      return "Is a Number";
   }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

   // In the formSubmission function I have defined the pilot, copilot, fuel, and cargo status variables. I have also created the list variable to be used in the if else statements below.
   // Using the if else statements and the validateInput function I am returning a message to the user based on the input they have entered.
   // If a number is put inside of the pilot or copilot input fields, the user will be alerted to enter a valid input. Same if a string is entered into the fuel level or cargo mass
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");
   list = document.getElementById("faultyItems");

   if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
      alert("All fields are required!");
   } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {   
      alert("Make sure to enter valid information for each field!");
   } else {
      pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch`;
      copilotStatus.innerHTML = `Co-pilot ${copilot} is ready for launch`;
   }
// Below I have also created another if else statement to test if the fuel level and cargo level are at appropriate levels to launch the shuttle.
// If the values entered are too high or low a message will return inside of the list variable and the launch status will change to red.
   if ((fuelLevel) < 10000) {
      fuelStatus.innerHTML = "Fuel level too low for launch";
      list.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
   } else if ((cargoLevel) > 10000) {
      cargoStatus.innerHTML = "Cargo mass too high for launch";
      faultyItems.style.visibility = "visible";
      launchStatus.innerHTML = "Shuttle not ready for launch";
      launchStatus.style.color = "red";
   } else if (cargoLevel < 10000 && fuelLevel > 10000) {
      launchStatus.innerHTML = "Shuttle is ready for launch";
      launchStatus.style.color = "green";
   }

   }
// Here I am just calling the myFetch function to be used in the script.js file.
async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
      });

    return planetsReturned;
}
// I was kind of given teh instructions for this one really, but I am just creating a function to pick a random planet from the array of planets.
// With Math.floor I am being given an even number, and using Math.random multiplied by the length of the array I am getting a random number between 0 and 5.
function pickPlanet(planets) {
   let index = Math.floor(Math.random() * planets.length);
   return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
