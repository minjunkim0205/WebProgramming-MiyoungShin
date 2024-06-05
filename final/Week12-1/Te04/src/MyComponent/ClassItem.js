import React, { Component } from "react";
import './Item.css';

class ClassItem extends Component {
  render() {
    const {title, page} = this.props;
    return (
      <li className="style">제목 :{title}, 페이지 :{page}</li>
    );
  }
}

export default ClassItem;