import React, { Component } from "react";

class ToggleColor extends Component {
  // Field, Props
  constructor(props) {
    super(props);
    this.state = {
        is_toggle_on : true
    };
  }
  // Event
  handleClick = () => {
    this.setState(prev_state => ({is_toggle_on : !prev_state.is_toggle_on}));
  };
  // Render
  render() {
    const style = {
      margin : "5px", 
      backgroundColor : this.state.is_toggle_on ? "red" : "yellow", 
      color : this.state.is_toggle_on ? "yellow" : "red"
    }
    return (
      <div>
        <button style={style} onClick={this.handleClick}>Button 을 클릭하세요</button>
      </div>
    );
  }
}

export default ToggleColor;