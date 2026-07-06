/*
create a function that prints on alert for the current time 
-does not take any parameters 
prints alert, console.log -> current times stamp 
-test your function by calling it 

*/

function showCurrentTime(){
    const currentTime = new Date ();
    console.log(`Current time is: ${currentTime}`);
}

showCurrentTime();

/*
1. named a function 
2. anonymous function: <remove the named function>
3. arrow function <>
-> pass all function by refrence <statement>
-> if you use an expression you wrong 
*/

// 1. Named function
function greet(name) {
    return `Hello ${name}`;
}

let sayHello = greet; // pass by reference

console.log(sayHello("Imaan")); // Hello Imaan


// 2. Anonymous function
let welcome = function(name) {
    return `Welcome ${name}`;
};

console.log(welcome("Imaan")); // Welcome Imaan


// 3. Arrow function
let goodbye = (name) => {
    return `Goodbye ${name}`;
};

console.log(goodbye("Imaan")); // Goodbye Imaan