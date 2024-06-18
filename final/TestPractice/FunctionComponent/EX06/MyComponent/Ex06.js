import React from "react";
import { useState, useRef, useMemo, useCallback } from "react";

const Ex06 = () => {
  const getListAverage = useCallback((list) => {
    if (list.length === 0) {
      return 0;
    } else {
      let sum = 0;
      list.forEach(element => {
        sum += element;
      });
      return (sum / list.length);
    }
  }, []);

  const [valueList, setValueList] = useState([]);
  const average = useMemo(() => getListAverage(valueList), [valueList, getListAverage]);
  const inputTextReference = useRef(null);

  const addButtonOnClick = useCallback(() => {
    const value = parseInt(inputTextReference.current.value);
    if (!isNaN(value)) {
      setValueList(prevList => [...prevList, value]);
    }
    inputTextReference.current.value = "";
  }, []);
  const resetButtonOnClick = useCallback(() => {
    setValueList([]);
    inputTextReference.current.value = "";
  }, []);

  return (
    <div>
      <p>Average : {average}</p>
      <input type="text" ref={inputTextReference} />
      <input type="button" value={" + "} onClick={addButtonOnClick} />
      <input type="button" value={"Reset"} onClick={resetButtonOnClick} />
      <hr />
      <ul>
        {valueList.map((value, index) => (<li key={index}>{value}</li>))}
      </ul>
    </div>
  );
};

export default Ex06;
