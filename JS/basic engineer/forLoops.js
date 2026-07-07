/*
for loop -> mostly ment for numbers 
combination of using while for number 
loops; 1. start point, 2. condition, 3. offer each iteration
combine it into 1 statement 
for (startpoint;condition;each-iteration){

}
*/

// use this while loop to make a for loop

let k = 0; // starting point

//condition: k>20

while (k < 20) {
  console.log("k ", k);
  k = k + 1; // after each iteration
}

for (let k = 0; k < 20; k = k + 1) {
  console.log("k ", k);
}

function mathTable(){
    number1 = number(prompt("enter first number:"))
    number2 = number(prompt("enter second number:"))
    if(number1>1 && number2>1){
        for (let i=1; i<=number; i++){
            for(let j=1; j<=number2;j++){
                console.log(`${i}x${j}=${i*j}`)
            }
        }
    }
    else{
        alert ("both numbers must be greater than 1")
    }
}
mathTable()


