import React, { Component } from "react";

class ClassFruit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.cnt
    };
  }
  buttonEvent = () => {
    const new_count = this.state.count + parseInt(prompt(`${this.props.children} 추가할 개수를 입력하세요:`, 0));
    alert(`${this.props.children}, 가격: ${this.props.cost}, 개수: ${new_count} => ${new_count * this.props.cost}`);
    this.setState({ count: new_count });
  };
  render() {
    const { children, cost } = this.props;
    const { count } = this.state;
    return (
      <div>
        종류: {children}, 가격: {cost}, 개수: {count} = {count * cost}
        <button onClick={this.buttonEvent}>추가하기</button>
      </div>
    );
  }
}

export default ClassFruit;