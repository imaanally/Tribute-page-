// comparison evaluate only to tru or false 

//And -> &&
//  truth table ->all possible combination 
// val1 and val2 
//combinations are 
// val1 && val2 
// val2 && val1 

// for and all statements have to be true for it to be true 


let val1=true 
let val2=false 
let result1=val1&&val2

console.log(`val1=${val1} val2=${val2} val1&&val2=${val1&&val2}`)

let mercy_age=20
let mercy_balance=50000

// if mercy age is greater than 18 and has more than 20k in her account 

let is_greater_than_18=mercy_age>18 
console.log(`Is mercy age greater than 18 ${is_greater_than_18}`)
let has_more_than_20k=mercy_balance>20000
console.log(`Mercy has more than 20k ${has_more_than_20k}`)
console.log(`mercy age is greater than 18 
    and has more than 20k in her account 
    ${is_greater_than_18&&has_more_than_20k}`)

// mercy_age>18&&mercy_balance>20000

let simplified = mercy_age>18&&mercy_balance>20000;
console.log(`simplified ${simplified}`)
console.log(
  `further simplification is ${mercy_age>18&&mercy_balance>20000}`,
);



// for the or || one statement has to be true for the whole statement to be true 

console.log(`this is not true =${!true}`)
console.log(`This is not false =${!false}`)






