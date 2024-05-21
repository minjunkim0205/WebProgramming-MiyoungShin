import React, { Component } from "react";

class Fruit extends Component {
  render() {
    const content = [];
    const fruit_data =[
      {type:"apple", number:4}, 
      {type:"banana", number:6}
    ];
    fruit_data.forEach(element => 
      content.push(<div><li>kind={element.type}</li><li>cnt={element.number}</li></div>)
    );
    return (
      <div style={{color : "green"}}>
        {content}
        <br></br>
        <br></br>
      </div>
    );
  };
}
export default Fruit;