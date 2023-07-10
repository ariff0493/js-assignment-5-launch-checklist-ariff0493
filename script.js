// Write your JavaScript code here!

window.addEventListener("load", function() {
    // In order to create a event.preventDefault I have created a form variable to select the form element in the HTML file.
    // I have then used the addEventListener method to listen for the submit event. When the submit event is triggered the event.preventDefault method will prevent the page from reloading.
    let form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let pilotNameInput = document.querySelector("input[name=pilotName]");
        let copilotNameInput = document.querySelector("input[name=copilotName]");
        let fuelLevelInput = document.querySelector("input[name=fuelLevel]");
        let cargoMassInput = document.querySelector("input[name=cargoMass]");
        let faultyItems = document.getElementById("faultyItems");
        
        //I am then calling the formSubmission function with the appropriate arguments to display the appropriate values in the HTML file.
        formSubmission(document, faultyItems, pilotNameInput.value, copilotNameInput.value, fuelLevelInput.value, cargoMassInput.value);
    });
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
    // Here I am creating variables with dot notation to select the missionTarget div in the HTML file to be used in the pickPlanet function.
        let planet = pickPlanet(listedPlanets);
        let name = planet.name;
        let diameter = planet.diameter;
        let star = planet.star;
        let distance = planet.distance;
        let moons = planet.moons;
        let imageUrl = planet.image;
        //Then calling the addDestinationInfo function to add the planet information to the missionTarget div.
        addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);
    })
   
});