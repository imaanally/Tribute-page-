/*
in built js library <api> handling http request

fetch (@param1,@param2) => response  on object with function
                        => response.catch 

@param1 = url:<>
@param2 = configuration. <header, method>

*/

const requestOptions = {
    method: "GET",
    redirect: "follow"
};

fetch ("http:api.github.com/users", requestOptions)
.then((response) => response.text())
.then((result) => {
    console.log("type of result", typeof result);
    console.log(result);
})
.catch((error) => console.error(error));

/*
code without a promise 
1. create a variable any name global variable 
console.log the value of the variable 
create and call a function that modifies this variable 
console.log () the value of the variable 
*/

let flow = "this flow ";
console.log("36:", flow);
function testfunction(){
    flow = "updated flow"
}
testfunction();
console.log ("41:", flow);