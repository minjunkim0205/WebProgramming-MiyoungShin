import React from "react";
import { useState } from "react";

const Ex02 = () => {
  const [valueX, setValueX] = useState(0);
  const [valueY, setValueY] = useState(10);

  return (
    <div>
      <p>value X : {valueX}</p>
      <p>value y : {valueY}</p>
    </div>
  );
}

export default Ex02;