import React, { Component } from "react";

class Earthquake extends Component {
  state = {};
  render() {
    return (
      <div className="info">
        <ul>
          <li>{this.props.title}</li>
          <li>{this.props.title1}</li>
          <li>{this.props.title2}</li>
        </ul>
      </div>
    );
  }
}

export default Earthquake;
