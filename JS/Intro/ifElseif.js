/*
if and else if -> chain
-> we exit if and else if when er reach the first truth
*/

let age = prompt("enter your age:");
console.log(`age is ${age} typeof ${typeof age}`);

// age=27
//27>10;true

if(age > 10) {
  alert("you are a baby");
} else if (age > 16) {
  alert("you are a teen");
} else if (age > 18) {
  alert("you can legally drink and smoke");
  alert("but should you?");
} else if (age > 27) {
  alert("get married");
} else if (age > 45) {
  alert("get a second husband");
} else if (age > 50) {
  alert("you are an ancestor");
}



if (age<10) {
  alert("you are a baby");
} else if (age < 16) {
  alert("you are a teen");
} else if (age < 18) {
  alert("you can legally drink and smoke");
  alert("but should you?");
} else if (age < 27) {
  alert("get married");
} else if (age < 45) {
  alert("get a second husband");
} else if (age < 50) {
  alert("you are an ancestor");
}
