import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

const Ex05 = () => {
  const target = useRef(null);

  useEffect(() => { 
    target.current.focus(); 
  });

  return (
    <div>
      <input type="text"></input>
      <br/>
      <input type="text"></input>
      <br/>
      <input type="text"></input>
      <br/>
      <input type="text" ref={target}></input>
      <br/>
      <input type="text"></input>
    </div>
  );
}

export default Ex05;