// Write your JavaScript code here!
// Write your JavaScript code here!
// function init (){
   window.addEventListener("load", function() {
      let form = document.querySelector("form");
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel= document.querySelector("input[name=fuelLevel]");
      let cargoMass= document.querySelector("input[name=cargoMass]");
      let fuelUpdate = document.getElementById("fuelStatus")
      let cargoUpdate = document.getElementById('cargoStatus')
      let copilotUpdate = document.querySelector("#copilotStatus")
      let pilotUpdate = document.querySelector("#pilotStatus")
      form.addEventListener("submit", function(event) {
         event.preventDefault();
         if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === ""){
         alert("All fields are required!");
         // event.preventDefault();
         }
         
         else if (isNaN(pilotName.value) === false){
            console.log(pilotName.value)
            alert("please enter correct pilot name")
            // event.preventDefault();
         }
         
         else if (isNaN(copilotName.value) === false){
            alert("please enter correct copilot name")
            // event.preventDefault();
         }
         
         else if (isNaN(fuelLevel.value) === true) {
            alert("please enter a number for fuel level");
            // event.preventDefault();
         }
         
         else if (isNaN(cargoMass.value) === true) {
            alert("please enter a number for cargo mass");
            // event.preventDefault();
         }
         
         // event.stopPropagation();
         
         else{
         
                  copilotUpdate.innerHTML = `Copilot ${copilotName.value} is ready for launch`
         
         
                  pilotUpdate.innerHTML = `Pilot ${pilotName.value} is ready for launch`
          
         
                  if (fuelLevel.value > 10000 && cargoMass.value > 10000){
            
                     
                        document.getElementById('faultyItems').style.visibility = "visible";
                        fuelUpdate.innerHTML = `is good enough for launch`;
                        cargoUpdate.innerHTML = `here is too much mass for the shuttle to take off.`;
                        document.getElementById('launchStatus').innerHTML = "Shuttle not ready for launch";
                        document.querySelector('#launchStatus').style.color = "red";
                        }
                 else if (fuelLevel.value > 10000 && cargoMass.value < 10000){
                     console.log(fuelUpdate)
                        document.getElementById('faultyItems').style.visibility = "visible";
                        fuelUpdate.innerHTML = "is good enough for launch";
                        cargoUpdate.innerHTML = 'there is approproate mass for the shuttle to take off';
                        document.querySelector('#launchStatus').innerHTML = "Shuttle ready for launch";
                        document.getElementById('launchStatus').style.color = "green";
                        }
   
                 else if (fuelLevel.value < 10000 && cargoMass.value > 10000){
            
                        document.getElementById('faultyItems').style.visibility = "visible";
                        fuelUpdate.innerHTML = "there is not enough fuelfor launch";
                        cargoUpdate.innerHTML = "there is too much mass for the shuttle to take off.";
                        document.querySelector('#launchStatus').innerHTML = "Shuttle not ready for launch";
                        document.getElementById('launchStatus').style.color = "red";
                        }
                  else if (cargoMass.value < 10000 && fuelLevel.value < 10000 ){
   
                        document.getElementById('faultyItems').style.visibility = "visible";
                        cargoUpdate.innerHTML = "there is an appropriate mass for launch";
                        fuelUpdate.innerHTML = "there is not enough fuel for the journey";
                        document.querySelector('#launchStatus').innerHTML = "Shuttle not ready for launch";
                        document.getElementById('launchStatus').style.color = "red";
                        }              
               }
        
         })
         
      
         })
   
   
   
   // This block of code shows how to format the HTML once you fetch some planetary JSON!
   //  <h2>Mission Destination</h2>
   window.addEventListener("load", function() {
               fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
                  response.json().then( function(json) {
                     console.log(json)
                     const div = document.getElementById("missionTarget");
                     div.innerHTML = `
                        <ol>
                        <li>Name: ${json[3].name}</li>
                        <li>Diameter: ${json[3].diameter}</li>
                        <li>Star: ${json[3].star}</li>
                        <li>Distance from Earth: ${json[3].distance}</li>
                        <li>Number of Moons: ${json[3].moons}</li>
                        <img src= ${json[3].image}>
                     </ol>
                     `
                  })
               })
            })
/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
