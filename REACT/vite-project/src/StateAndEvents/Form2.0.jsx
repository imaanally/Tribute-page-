/*
create a form to
name,email,phone,password.

have a submit button that
console.logs the values when form submitted.

after the form have a list to show the state
changes as user is typing for each.

for all the input fields use only
1 state variable.
example [input,setInput]=useState(<object:hint>)
-> it stores other data types.
20 minutes.
*/

import { useState } from "react";

function Form2() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log("Name:", input.name);
    console.log("Email:", input.email);
    console.log("Phone:", input.phone);
    console.log("Password:", input.password);
  };

  return (
    <div>
      <div>
        <label>Name</label>
        <br />
        <input name="name" value={input.name} onChange={handleChange} />
      </div>

      <br />

      <div>
        <label>Email</label>
        <br />
        <input name="email" value={input.email} onChange={handleChange} />
      </div>

      <br />

      <div>
        <label>Phone</label>
        <br />
        <input name="phone" value={input.phone} onChange={handleChange} />
      </div>

      <br />

      <div>
        <label>Password</label>
        <br />
        <input
          type="password"
          name="password"
          value={input.password}
          onChange={handleChange}
        />
      </div>

      <br />

      <button onClick={handleSubmit}>Submit</button>

      <ul>
        <li>Name: {input.name}</li>
        <li>Email: {input.email}</li>
        <li>Phone: {input.phone}</li>
        <li>Password: {input.password}</li>
      </ul>
    </div>
  );
}

export default Form2;