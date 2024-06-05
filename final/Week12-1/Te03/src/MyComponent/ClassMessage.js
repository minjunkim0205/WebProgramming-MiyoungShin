import React, { Component } from "react";
import './Message.css';

class ClassMessage extends Component {
  constructor(props){
    super(props);
    this.state = {
      say: "",
      color: "black",
      count: 0
    };
  }
  render() {
    const {say, color, count} = this.state;
    return (
      <div>
        <button className="style" onClick={() => this.setState({say:"Hello~~"})}>enter</button>
        <button className="style" onClick={() => this.setState({say:"Good bye"})}>leave</button>
        <h3 style={{color}}>{say}</h3>
        <button className="style style1" onClick={() => this.setState({color:"red"})}>red</button>
        <button className="style style2" onClick={() => this.setState({color:"green"})}>green</button>
        <button className="style style3" onClick={() => this.setState({color:"blue"})}>blue</button>
        <br></br>
        <button className="style" onClick={() => this.setState({count:count+1})}>{count} : +1증가</button>
      </div>
    );
  }
}

export default ClassMessage;