/*
if something happens i want to be notified 
-callbacks 
sensor ->
click 
hover 
type 

before attaching an event you be able to acces the element 
*/

/*
create a button 
1. attach a click event which shows an alert 
2. attach a mouseover which console.log the current date 
for each of the events print the event. ie console.log (event)
*/

const button = document.querySelector("#btn");

button.addEventListener("click", (event) => {
  alert("Button clicked");
  console.log(event);
});

button.addEventListener("mouseover", (event) => {
  console.log(new Date());
  console.log(event);
});

// console.log ("x direction", e.clientX)
// console.log ("y direction", e.clientY)

const coordinates = document.querySelector("#coordinates");

document.addEventListener("mousemove", (e) => {
  coordinates.innerText = `X: ${e.clientX} | Y: ${e.clientY}`;
});

