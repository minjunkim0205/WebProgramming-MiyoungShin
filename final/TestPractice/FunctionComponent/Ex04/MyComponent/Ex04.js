import React from "react";
import { useState, useRef } from "react";

const Ex04 = () => {
  const [str, setStr] = useState("");
  const inputTextReference = useRef(null);

  const setButtonOnClick = () => {
    setStr(inputTextReference.current.value);
  }
  const resetButtonOnClick = () => {
    inputTextReference.current.value = "";
    setStr("");
  }

  return (
    <div>
      <p>{str}</p>
      <input type="text" ref={inputTextReference}></input>
      <input type="button" value={"Set"} onClick={setButtonOnClick}></input>
      <input type="button" value={"Reset"} onClick={resetButtonOnClick}></input>
      <br/>
    </div>
  );
}

export default Ex04;