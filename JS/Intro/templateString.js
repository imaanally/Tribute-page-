//template or string interpolation 
//is a way to combine data and strings for output 

let firstName="Samuel"
let secondName="Jane"
let age=20
let address="Juja County"

let userDetails=firstName+" "+secondName+"is "
+age+" years old"+"he stays at"+address
console.log(userDetails)
console.log("user details is",typeof userDetails)

//template string use back tricks 

let userDeatils2=`${firstName} ${secondName}
 is ${age} years ols and he stays at ${address}`
console.log(userDetails2)
