/*
our own callback function
doing shape stuff
shapes -> 
  circle rectangle triangle 


  1. for each of the shapes 
  create a function <arrow, name> 
  to calculate area ensure the function takes the required paramenters
  test the function
*/

// circle Area function
// formula pi * r * r
// arrow

const calculateCircleArea = (radius) => {
  return Math.Pi * radius * radius;
};

console.log(calculateCircleArea, "circle", 7);

// this function calculates the area of a circle
// it takes the radius as input and the returns the area using the formula
//pi * radius * 2

// rectangle area function
// formula lenght * width

const calculateRectangleArea = (length, width) => {
  return length * width;
};

console.log(calculateRectangleArea, "rectangle", 10, 15);

// this function calculates the area of a rectangle. it takes the length and width, multiplies them and returns the area

// triangle area function
// formula; 0.5 * base * height

const calculateTriangleArea = (base, height) => {
  return base * height;
};

console.log(calculateTriangleArea, "triangle", 8, 6);

// this function calculates the area of a triangle, it tales base and height multiplies them, divides them by 2 and retirns the area.


/*
2. create a super function called shape 
its going to take the following params 
@param1 => function <correct shape > required
@param2 => shape name <string>
@param3 => s1 <required>
@param4 => s2<optional>
@param5 => s3<optional>

1. inside your function shape 
console log each of the parameters and their types 
2. for each of your function ie for areaCircle
areaRectangle and areaTriangle 
call the shape function and pass the requires params 
example for areaCircle 
-shape (areaCircle, "circle " 10 ) -> for areaCircle test make observation
-shape (areaRectangle, "rectangle " 10, 5) -> for arearectangle test make observation

*/ 

const areaCircle = (radius) => 3.142 * radius * radius;
const areaRectangle = (length, width) => length * width;
const areaTriangle = (base, height) => 0.5 * base * height;

function shape (shapeFunction, shapeName, side1, side2, side3) {
    console.log(`shapeFunction ${shapeFunction} its a ${typeof shapeFunction}`);
    console.log(`shapeName ${shapeName} its a ${typeof shapeName}`);
    console.log(`side1 ${side1} its a ${typeof side1}`);
    console.log(`side2 ${side2} its a ${typeof side2}`);
    console.log(`side3 ${side3} its a ${typeof side3}`);
}

function areaShape (param1, param2, param3, param4) {
    console.log(`parameter1: has a value of ${param1} and its type is ${typeof param1}`)
    console.log(`parameter2: has a value of ${param2} and its type is ${typeof param2}`);
    console.log(`parameter3: has a value of ${param3} and its type is ${typeof param3}`);
    console.log(`parameter4: has a value of ${param4} and its type is ${typeof param4}`);

    // no need for the if statement 

    let result = param1(param3, param4);
    console.log (`area of the ${param2} is :${result}`);
    return result;
}
