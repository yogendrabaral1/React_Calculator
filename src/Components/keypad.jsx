import React, { Component } from "react";

class Keypad extends Component {
  state = {};
  btnStyle = {
    margin: 5,
    padding: 20,
    borderRadius: 5,
    width: 117
  };
  render() {
    return (
      <div className="card-body" style={{ alignItems: "center" }}>
        <div className="btn-group row">
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(1)}
          >
            1
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(2)}
          >
            2
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(3)}
          >
            3
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick("AC")}
          >
            AC
          </button>
        </div>
        <br></br>
        <div className="btn-group row">
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(4)}
          >
            4
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(5)}
          >
            5
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(6)}
          >
            6
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick("*")}
          >
            *
          </button>
        </div>
        <br></br>
        <div className="btn-group row">
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(7)}
          >
            7
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(8)}
          >
            8
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(9)}
          >
            9
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick("/")}
          >
            /
          </button>
        </div>
        <br></br>
        <div className="btn-group row">
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(".")}
          >
            .
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick(0)}
          >
            0
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick("+")}
          >
            +
          </button>
          <button
            type="button"
            className="btn btn-primary"
            style={this.btnStyle}
            onClick={() => this.props.onClick("-")}
          >
            -
          </button>
        </div>
        <br></br>
        <div className="btn-group row">
          <button
            type="button"
            className="btn btn-primary"
            style={{ margin: 5, padding: 20, borderRadius: 5, width: 500 }}
            onClick={() => this.props.onClick("=")}
          >
            =
          </button>
        </div>
      </div>
    );
  }
}

export default Keypad;
