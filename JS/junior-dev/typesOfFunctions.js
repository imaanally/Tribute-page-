/*
1. named function 
2. anonymous funtion
-> a funtion can be assigned to variable 
a variable can refrence a funtion

*/

function areaCircle(){
    return 3.142 * r * r;
}

let age = 23 

let samAge = age; // age is 23

let ac = areaCircle;

let k = areaCircle();

console.log(ac); // typeof ac is a function
ac(10)
/*
what is the value of ac and what is it 
hint use typeof 
*/

function rectangleArea (l, w){
    return l * w;
}

let rA = rectangleArea;


/*
1. Create a function of your choice, use named function.
2. Assign that function to a variable.
3. Directly equate your variable to the function definition.
4. Remove the original function.
5. Try calling the variable and try calling the original function.
6. Remove the name of the function now that it's useless.
7. Anonymous function without a name.
*/


// 1. Create a named function
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Imaan")); // Hello Imaan


// 2. Assign that function to a variable
let greeting = greet;

console.log(greeting("Imaan")); // Hello Imaan


// 3. Directly equate your variable to the function definition
let welcome = function welcomeUser(name) {
    return `Welcome ${name}`;
};

console.log(welcome("Imaan")); // Welcome Imaan


// 4. Remove the original function
// (Delete the greet() function above)


// 5. Call the variable and the original function
console.log(greeting("Imaan")); // Still works

// console.log(greet("Imaan"));
// ReferenceError: greet is not defined


// Observation:
// greeting still works because it holds a reference to the function.
// greet() no longer works because the original function was removed.


// 6. Remove the name since it's useless
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(5, 4)); // 20


// 7. Anonymous function (function without a name)
let square = function(num) {
    return num * num;
};

console.log(square(6)); // 36


