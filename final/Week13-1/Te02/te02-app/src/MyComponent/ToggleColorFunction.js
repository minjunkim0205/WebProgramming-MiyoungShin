import React, { useState } from 'react';

const ToggleColor = () => {
  // Field, Props
  const [is_toggle_on, setToggle] = useState(true);
  // Event
  const handleClick = () => {
    setToggle(!is_toggle_on);
  };
  // Style
  const style = {
    margin : "5px", 
    backgroundColor : is_toggle_on ? "red" : "yellow", 
    color : is_toggle_on ? "yellow" : "red"
  }
  // 
  return (
    <div>
      <button style={style} onClick={handleClick}>Button 을 클릭하세요</button>
    </div>
  );
};

export default ToggleColor;