import React, { Component } from "react";

class Display extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <h1>Calculator</h1>
        <input
          type="text"
          placeholder="0"
          style={{ padding: 20, width: 500, borderRadius: 6, fontSize: 30 }}
          value={this.props.expression}
        />
        <hr style={{ width: 540 }}></hr>
      </React.Fragment>
    );
  }
}

export default Display;
