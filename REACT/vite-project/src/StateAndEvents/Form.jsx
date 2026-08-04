/*
How to handle form input and events
*/

function Form() {
  // event when name changes
  const nameOnChange = (e) => {
    console.log("NAME IS", e.target.value);
  };

  //
  const emailOnChange = (e) => {
    console.log("Email IS", e.target.value);
  };

  //
  const passwordOnChange = (e) => {
    console.log("Password is", e.target.value);
  };

  //
  const onSubmit = () => {
    console.log("Submit button clicked");
  };

  return (
    <div>
      <main>
        <div>
          <label>Name</label>
        </div>
        <div>
          <input onChange={nameOnChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Email</label>
        </div>
        <div>
          <input onChange={emailOnChange} />
        </div>
      </main>

      <main>
        <div>
          <label>Password</label>
        </div>
        <div>
          <input type="password" onChange={passwordOnChange} />
        </div>
      </main>

      <main>
        <button onClick={onSubmit}>Submit</button>
      </main>
    </div>
  );
}

export default Form;
