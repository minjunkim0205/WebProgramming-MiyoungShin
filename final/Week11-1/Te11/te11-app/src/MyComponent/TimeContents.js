import React, { Component } from "react";

class TimeContents extends Component {
  render() {
    const data = [
      {title:"동창모임", todo:"장소알리기", result:"완료"},
      {title:"회의", todo:"오전 10시", result:"수행전"}
    ];
    const content = [];
    data.forEach(element => 
      content.push(<tr><td>{element.title}</td><td>{element.todo}</td><td>{element.result}</td></tr>)
    );
    return (
      <tbody>
        {content}
      </tbody>
    );
  };
}
export default TimeContents;