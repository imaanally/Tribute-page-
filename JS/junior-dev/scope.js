/*
declare a variable name in the global scale 
declare a function called sayMyName
   console.log(`name ${name} line ${10})
declare variable variable name inside the function at the start
assign it a different name 
print our name and line number 
4. create an if statement passa truthy condition of your choice 
inside the block console.log name 
and its line number 
5. inside the fisrt if satement at the start declare variable 
name give it a new name 
console.log name and line number 
7. try declaring the same variable name in the same scope 
*/

let name = "imaan"
//let name = "farhana"

function sayMyName (){
    let name = "ali"
    console.log(`name ${name} line ${21}`)

    if (true) {
        let name = "abdi"
        console.log(`name ${name} line ${25}`)
    }

    console.log(`name ${name} line ${29}`)

}

sayMyName();