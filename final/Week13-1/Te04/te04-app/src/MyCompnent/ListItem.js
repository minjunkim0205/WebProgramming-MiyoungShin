import React, { useState } from 'react';

const ListItem = () => {
  /** Field */
  const [items, setItems] = useState([]);
  const [input_value, setInputValue] = useState("");
  /** Function */
  const handleAddItem = () => {
    if (input_value !== "") {
      setItems([...items, input_value]);
      setInputValue("");
    }
    else{
      alert("Enter value first.");
    }
  }
  const handleDeleteItem = (target_index) => {
    setItems(items.filter((element, index) => index !== target_index));
  }
  const renderListItems = () => {
    const list_items = [];
    items.forEach((element, index) => {list_items.push(<li key={index} onDoubleClick={() => handleDeleteItem(index)}>{element}</li>)});
    return(list_items);
  }
  /** Return */
  return (
    <div>
      <input type="text" value={input_value} onChange={(element) => setInputValue(element.target.value)}></input>
      <input type="button" value="Add" onClick={handleAddItem}></input>
      <ul>
        {renderListItems()}
      </ul>
    </div>
  );
};

export default ListItem;