/*
state -> 
when state changes everywhere that state is being used it changes automatically
*/


import { useState } from "react";

function ClickMe() {
  /*
    const [name, set<name>] = useState([initial value])
    const [@param1, @param2] = useState(@initialState<starting state>)
    @param1 -> the current state: <integer, array>
    @param2 -> function to update the state..
        @param2(newState) ->
  */

  const [n, setN] = useState(0);

  const increment = () => {
    const newN = n + 1;
    setN(newN); // setN(n + 1)
  };

  const decrement = () => {
    setN(n - 1);
  };

  const spoil = () => {
    setN("Cats and dogs");
  };

  const reset = () => {
    setN(0);
  };

  return (
    <div>
      <h4>Clicked {n}</h4>

      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={spoil}>Spoil</button>
        <button onClick={reset}>Reset</button>
      </div>

      <h4>Clicked {n}</h4>
    </div>
  );
}

export default ClickMe;
