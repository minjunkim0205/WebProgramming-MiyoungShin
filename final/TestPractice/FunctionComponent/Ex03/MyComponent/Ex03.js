import React from "react";
import { useState } from "react";

const Ex03 = () => {
  const [value, setValue] = useState(0);

  const plusButtonOnClick = () => {
    setValue(value + 1);
  }
  const minusButtonOnClick = () => {
    setValue(value - 1);
  }

  return (
    <div>
      <p>value : {value}</p>
      <input type="button" value={" - "} onClick={minusButtonOnClick}></input>
      <input type="button" value={" + "} onClick={plusButtonOnClick}></input>
    </div>
  );
}

export default Ex03;