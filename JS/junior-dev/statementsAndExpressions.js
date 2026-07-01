/*
Expression:
    A piece of code that produces a value.
    x > 5 => true or false
    10 + 11 => 21 value
    circleArea(5) => expression function call
    reference value -> n1
*/

function sayMyName() {
  console.log("Sam Mwangi");
}

let n1 = 23; // statement declare varauvke
console.log(n1); //23 n1=23 //
console.log(10 + 12); //10+12 // 22
console.log(n1 > 10); // n1>10 or true or false
console.log(sayMyName()); //funciton call=> undefined



/*
    1. Named function:
    2. Anonymous Function: <without a name>
        -> a function can be assigned to variable.
        -> a variable can reference a function
*/

function areCircle(r) {
    return 3.142 * r * r; // area of a circle
} // named function

let age = 23;

let samsAge = age; // age = 23

let ac = areCircle;

/*
what is the value of ac and what is it.
-> hint <use typeof>
*/

console.log(ac);
console.log(typeof ac);
console.log(ac(5));



/*
1. create a function of your choice. use named function test
2. assign that function a variable. test
3. directly create equate your variable to the function definition. test
4. Remove the original function test
5. try calling the variable and try calling the original function. <Make an observation> test
6. Remove the name of the function, since it useless. test
7. Anonymous function <function without a name>. test
*/


// 1. Create a named function
function greet(name) {
    return `Hello ${name}`;
}

console.log(greet("Imaan")); // Hello Imaan


// 2. Assign that function to a variable
let sayHello = greet;

console.log(sayHello("Imaan")); // Hello Imaan


// 3. Directly assign a function definition to a variable
let welcome = function(name) {
    return `Welcome ${name}`;
};

console.log(welcome("Imaan")); // Welcome Imaan


// 4. Remove the original function
// (Imagine the greet function above is deleted)


// 5. Call the variable and the original function
console.log(sayHello("Imaan")); // Hello Imaan
// console.log(greet("Imaan")); // ReferenceError: greet is not defined

// Observation:
// The variable still works because it stores a reference to the function.
// The original function name no longer exists after being removed.


// 6. Remove the function name since it is useless
let multiply = function(a, b) {
    return a * b;
};

console.log(multiply(4, 5)); // 20


// 7. Anonymous function (function without a name)
let square = function(num) {
    return num * num;
};

console.log(square(6)); // 36