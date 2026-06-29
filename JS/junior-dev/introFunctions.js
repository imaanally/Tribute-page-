/*
functions allow you to write reusable bits of code
to use dry ( do not repeat yourself)by using code block

/{/code block/}
syntax;
function < name:variable name convection > (<parameters>{/code block/}

big rule import rule;
a function executes only when called 
calling a function is telling the function to do its work

*/

/*
create a simple function that when you cal it it alerts you on the current time 
*/

function timeAlert(){
    const date = new Date();
    alert (` time stamp: ${date.toISOString()}`)
}

/*
call a function use the function name then () -> brackets
*/

//timeAlert(); // calling a funtion 

/*
calculate the area of a triangle 
*/



function areaOfTriangle(base,height){
    console.log(`base, height is ${base} its type is ${typeof base}`)
    console.log(`height is ${height} its type is ${typeof height}`);
    const area = 0.5 * base * height 
    console.log(
        `for a triangle with base ${base} and height ${height} area is ${area} `
    )
}

/*
scenario 1 
call the areaOfTriangle function dont pass any arguments <>
areaOfTriangle()
scenario 2 
call the function pass base of 20 and no width
areaOfTriangle(20) // output 
scenario 3; 
call the function pass base of 20 and height of 30 
areaOfTriangle (20,30)
scenario 4;
create a variable base1=50 and variable height1=60
areaOfTriangle (base1,heigth1)
scenario 5;
create a variable base2="hello" and variable height2="true"
areaOfTriangle(base2,height2)
*/

areaOfTriangle();


//function areaOfTriangle(base=20){
    //console.log(`base, height is ${base} its type is ${typeof base}`);
   // areaOfTriangle(20);

//}

let base=20
let height=30
areaOfTriangle (20,30)


let base1 = 50;
let height1 = 60;
areaOfTriangle(50, 60);

let base2 = "hello";
let height2 = "true";
areaOfTriangle("hello", "true");

