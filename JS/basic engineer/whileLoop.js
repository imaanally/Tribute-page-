/*loops run a block of code over and over again 
you should not lopp infinity but an exit condition
syntax; 
while(condition){
   block of code 
}

if condition trithy -> continue 
exit if condition is falsey 

*/

let n= 0;
let condition= true;
while (condition){
    console.log("n is ", n);
    n= n + 1;
    if ( n > 100){
        condition = false;
    }
}

