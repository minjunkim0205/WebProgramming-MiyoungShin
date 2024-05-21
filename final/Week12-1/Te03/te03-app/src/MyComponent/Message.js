import React, { Component } from "react";

class Message extends Component {
  constructor(props){
    
  }
  render() {
    return (
      <div>
        <button className="" onClick={() => this.setState()}>enter</button>
        <button className="" onClick={() => this.setState()}>enter</button>
        <h1 style={{color}}>{say}</h1>
      </div>
    );
  }
}

export default Message;