import React from "react";
import { useReducer } from "react";

const Ex07 = () => {
  const reducer = (element, action) => {
    switch (action.type) {
      case "INCREMENT":
        return element + 1;
      case "DECREMENT":
        return element - 1;
      default:
        return element;
    }
  }

  const [value, changeValue] = useReducer(reducer, 0);

  const onIncrease = () => {
    changeValue({ type: "INCREMENT" });
  };
  const onDecrease = () => {
    changeValue({ type: "DECREMENT" });
  };

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={onDecrease}>-1</button>
      <button onClick={onIncrease}>+1</button>
    </div>
  );
};

export default Ex07;
