/*
objects are a complex datatype 
its a datatype that houses other datatypes 

-in real life you cannot really 
express data using a single variable 

-> {
key:value 
key:value 
key:value 
} // blocke 


key => <number or a string ><unique>

value => any other datatype <boolean, string, null, object> be a function 

if value is a function <method>
*/

const { StrictMode } = require("react")

/*
object oriented programming 
functional programming 
why objects are useful 
1. if you want to represent a complex datatype 
*/

//this will take a lot of time 
// you will have multiple variables that represent the same thing 
const student_name = "samson"
const student_age = 24 
const student_phone = "254756758948" //number 
//parent 

const parent_name = "maggy"
const parent_email = "maggy@gmail.com"

// you CAN have 1 variable that repsents the whole thing 

const student = {
    name: "Iman",
    age: 25,
    parent: {
        name: "maggy",
        email: "maggy@gmail.com"
    },
    pet: {},
    sayMyName: function(){
        console.log(`Iman`);
    },
    announce: function(){
        alert(`Iman gracing you with her presence`)
    },
};

/*
craete an object called car 
properties:name model tope-speed 
engine_info: <object> name aka country 
<number as propert <key>>: any number 
alert_info: function that when called prints info
of the car as an alert 
*/

const car = {
  name: "porsche",
  model: "911",
  top_speed: "296km/h",
  color: "pink"

  engine_info: {
    engine_type: " Naturally aspirated, 6-cylinder boxer",
    Displacement: "3,996 cc",
    valve_train: "4 valves per cylinder",
  },

  announce: function(){
    alert(
      `car:${car.name}
      model:${car.model}
      top_speed: ${car.top_speed}
      color: ${car.color}`
    );
  }
};

