import React, { Component } from "react";

class Timetable extends Component {
  render() {
    const data = [
      "제목", 
      "할일", 
      "수행결과"
    ];
    const content = [];
    data.forEach(element => 
      content.push(<th>{element}</th>)
    );
    return (
      <thead>
        <tr>
          {content}
        </tr>
      </thead>
    );
  };
}
export default Timetable;