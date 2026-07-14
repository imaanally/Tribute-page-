const car = {
  name: "porsche",
  model: "911",
  top_speed: "296km/h",
  color: "pink",

  engine: {
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

/*confirm that you are able to print the object and also its type 

*/
console.log(`car datatype ${typeof car}`);
console.log(car);
console.log("--using console.log(table)--");
console.log(car);
console.table(car);
/*
access individual parts of your object 
2 ways of accessing object properties 
1. dot notation < does not wotk for anythi ng but looks goood>
  - does not work for properties which are   
       - numbers 
       strings with spaces, starting with a number or special symbols 
       - can only access properties that follow variable naming rules 
2.bracket <will work for everything:look>
*access properties using variables 


for each property access it using both 
dot notation and bracket notation 

*/

// car and uts name using dot notation 
console.log` name is ${car.name} its type is ${typeof car.name}`
// bracket notation 
console.log` name is ${car["name"]} its type is ${typeof car["name"]}`;
//car model
console.log` model is ${car.model} its type is ${typeof car.model}`;
//bracket notation 
let v1 = "model";
console.log` model is ${car["v1"]} its type is ${typeof car["v1"]}`;

function PrintObjectValues(obj) {
  for (const key of Object.keys(obj)) {
    console.log(`${key}: contains data of the type ${typeof obj[key]}`);

    // for some reason null is an object????
    if (obj[key] != null && typeof obj[key] == "object") {
      PrintObjectValues(obj[key]);
    } else {
      console.log(`${key}:${obj[key]}`);
    }
  }
}

PrintObjectValues(car);

