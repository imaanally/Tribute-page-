/*
step 1; ensure your js file can access the file 
*/

const data = require("data.json")

console.log(data)

/*
step 2; use for loop to go through each data point
- print the data 


step 3; for each data point create a message example 
"message goes here"
*/


    /*
step 4; create an empty array and the user data including the message 
output object should be 

  {
  "id":1,
  "first_name":"Roderick",
  "last_name":"Pellew",
  "email":"rpellew0@imageshack.us",
  "gender":"Male",
  "phone":"774-530-6366"
  }



step 5; write this data to a file called output.json
hint do JSON.stringfly -> js object to json notation
save this data to your file is output.json

    */

const output = [];

for(let i = 0; < data.length; i++){
    const doc = data[i];

    const {first_name, last_name, email, gender, phone} = doc;

    let title = "";
    if (doc.gender === "male"){
        title = "sir";
    } else {
        title = "madam";
    }

    const message = ` dear ${title}, ${doc.first_name} ${last_name}. We regret to inform you that you will not proceed to the next round of the interview.`;

    output.push({ first_name, last_name, email, gender, phone, message});

}

const outputText = JSON.stringify(output);

focus.writefile("output.json", outputText, (error) => {});

