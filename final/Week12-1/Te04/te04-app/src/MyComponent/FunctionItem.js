import React from 'react';
import './Item.css';

const FunctionItem = ({title, page}) => {
  return (
    <li className="style">제목 :{title}, 페이지 :{page}</li>
  );
}

export default FunctionItem;