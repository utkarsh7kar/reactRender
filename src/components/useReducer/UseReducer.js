import React, { useReducer } from "react";

const intialState = 0;

const reducer = (state, action) => {
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return 0;

    default:
      return 0;
  }
};

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, intialState);

  console.log('useReducer called');
  return (
    <div>
      <div>count - {count}</div>
      <button onClick={() => dispatch("increment")}>Increment</button>
      <button onClick={() => dispatch("decrement")}>Decrement</button>
      <button onClick={() => dispatch("reset")}>Reset</button>
    </div>
  );
};

export default UseReducer;
