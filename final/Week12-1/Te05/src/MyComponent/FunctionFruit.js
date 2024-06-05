import React, {useState} from 'react';

const FunctionFruit = ({ children, cnt, cost }) => {
  const [count, setCount] = useState(cnt);
  const buttonEvent = () => {
    const new_count = count + parseInt(prompt(`${children} 추가할 개수를 입력하세요:`, 0));
    alert(`${children}, 가격: ${cost}, 개수: ${new_count} => ${new_count * cost}`);
    setCount(new_count);
  };
  return (
    <div>
      종류: {children}, 가격: {cost}, 개수: {count} = {count * cost} 
      <button onClick={buttonEvent}>추가하기</button>
    </div>
  );
};

export default FunctionFruit;