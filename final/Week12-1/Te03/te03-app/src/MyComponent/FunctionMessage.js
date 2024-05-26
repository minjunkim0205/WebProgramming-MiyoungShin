import React, {useState} from 'react';
import './Message.css';

const FunctionMessage = () => {
  const [say, setSay] = useState("");
  const [color, setColor] = useState("black");
  const [count, setCount] = useState(0);
  return (
    <div>
      <button className="style" onClick={() => setSay("Hello~~")}>enter</button>
      <button className="style" onClick={() => setSay("Good bye")}>leave</button>
      <h3 style={{color}}>{say}</h3>
      <button className="style style1" onClick={() => setColor("red")}>red</button>
      <button className="style style2" onClick={() => setColor("green")}>green</button>
      <button className="style style3" onClick={() => setColor("blue")}>blue</button>
      <br></br>
      <button className="style" onClick={() => setCount(count+1)}>{count} : +1증가</button>
    </div>
  );
}

export default FunctionMessage;