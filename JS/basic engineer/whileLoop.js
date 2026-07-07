/*loops run a block of code over and over again 
you should not lopp infinity but an exit condition
syntax; 
while(condition){
   block of code 
}

if condition trithy -> continue 
exit if condition is falsey 

*/

let n = 0;
let condition = true;
while (condition) {
  console.log("n is ", n);
  n = n + 1;
  if (n > 100) {
    condition = false;
  }
  n = n + 1;
}

/*
create a function any name 
the function should take a parameter 
@param is number greater than 0
have a loop inside that counts down from this number 
use while loop, it should print n 
*/

function countDown(n) {
  if (n <= 0) {
    console.log("Number must be greater than 0");
    return;
  }

  while (n > 0) {
    console.log(n);
    n--;
  }
}

countDown(10);

/*
kindergarten teacher wants to generate  a math table 
for students this table is dynamic
create a function @function give it any name 
it does not take any parameters 
this function; prompts a user for the first number 
prompt 2; 
check if number is a valid number greater than 1 
use recussion or a while loop to ensure 
user enters a correct number for number1 and number 2
after the number is entered call @function2
which takes the number a parameters
example; @function2(number1,number2)

create a function @function2 give it any name 
this function takes in the following parameter 
@param1 number greater than 1
@param2 number greater than 1
check if @param1 is number greater than 1
check if @param2 is number greater than 1
example if @function (3,5)
create a math table for it upto 
ie console log 

3*5= 
3*4= 
3*2= 
3*1= 

2*5= 
2*4= 
2*2= 
2*1= 

1*5= 
1*5= 
1*5= 
1*5= 



*/

function getNumbers() {
  let number1 = prompt("Enter the first number");

  if (isNaN(number1) || Number(number1) <= 1) {
    alert("Invalid number. Enter a number greater than 1.");
    return getNumbers();
  }

  let number2 = prompt("Enter the second number");

  if (isNaN(number2) || Number(number2) <= 1) {
    alert("Invalid number. Enter a number greater than 1.");
    return getNumbers();
  }

  mathTable(Number(number1), Number(number2));
}

function mathTable(number1, number2) {
  if (number1 <= 1 || number2 <= 1) {
    console.log("Both numbers must be greater than 1.");
    return;
  }

  let row = number1;

  while (row >= 1) {
    let column = number2;

    while (column >= 1) {
      console.log(`${row} * ${column} = ${row * column}`);

      column--;
    }

    console.log("----------------");

    row--;
  }
}

getNumbers();






