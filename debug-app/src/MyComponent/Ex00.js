import React from "react";
import { useState, useRef, useEffect, useCallback, useMemo } from "react";

const Ex00 = () => {
  const getAvg = useCallback(list => {
    if(list.length === 0){
      return 0;
    }else{
      let sum = 0;
      list.map((value) => (sum += value));
      return (sum/list.length);
    }
  }, []);

  const [valueList, setValueList] = useState([]);
  const avg = useMemo(() => getAvg(valueList), [valueList, getAvg]);
  const inputTextRef = useRef(null);

  const addButtonOnClick = () => {
    let value = parseInt(inputTextRef.current.value);
    if(!isNaN(value)){
      setValueList(valueList.concat(value));
    }
    inputTextRef.current.value = "";
  }
  const resetButtonOnClick = () => {
    setValueList([]);
    inputTextRef.current.value = "";
  }

  useEffect(() => {inputTextRef.current.focus()});
 
  return (
    <div>
      <h3>Avg : {avg}</h3>
      <input type="text" ref={inputTextRef}></input>
      <input type="button" value={"Add"} onClick={addButtonOnClick}></input>
      <input type="button" value={"Reset"} onClick={resetButtonOnClick}></input>
      <hr/>
      <ul>
        {valueList.map((value, index) => (<li key={index}>{value}</li>))}
      </ul>
    </div>
  );
};

export default Ex00;
