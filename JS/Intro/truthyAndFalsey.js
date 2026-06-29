/*
Truthy or Falsey 
if you know something is not falsey then it is truthy 
falsey
1. false
2. 0
3. -0
4. null
5. undefined
6. "" empty string
7. NaN -> not a number 
anything that is not falsey is truthy 
truthy || falsey -> truthy 
*/

let userName1="John Mwangi" //truthy
let userName2=""  // falsey

let activeUserName=userName2 || userName1

console.log(activeUserName)

let bothUserNameOk = userName1&&userName2 
console.log(bothUserNameOk)  // truthy or falsey 
