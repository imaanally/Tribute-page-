function salaryGrossPromptProcess(){
    message = "Enter your gross salary";
    let gross = prompt ("Enter your gross salary")
    if (isNaN(gross) === false ) {
        console.log(`You entered this amount ${gross} exiting`)
        return; //exit a function

    }
     //alert (
        //`Invalid gross salary entered. 
        // Enter a number for gross salary.
       //  Try again` ,
    //);
    salaryGrossPromptProcess(
      `Invalid gross salary entered.
       Enter a number for gross salary. Try again`,
    );
}

salaryGrossPromptProcess();


/*
remove alert 
initial prompt should be enter your gross salary
any prompt after that should be ` Invalid gross salary entered,
Enter a number for gross salary, Try again



create a funtion to calculate the factorial for a numnber 
the functio takes a parameter 

- @param1 which is a number and returns the factorial of the number 
example. factorial (5) output (120)
// 5*4*3*2*1
// check the number entered is greater than 1 
hint use a recusive function  ->
*/


function factorial(num) {

    if (num <= 1) {
        return "Number must be greater than 1";
    }

    if (num === 2) {
        return 2;
    }

    return num * factorial(num - 1);
}

console.log(factorial(5)); //120

