import React, { Component } from "react";
import "./App.css";
import Display from "./Components/display";
import Keypad from "./Components/keypad";

class App extends Component {
  state = {
    expression: ""
  };
  handleKey = key => {
    if (key === "AC") {
      this.setState({ expression: "" });
    } else if (key === "=") {
      let exp = this.state.expression;
      exp = eval(exp);
      exp = exp.toString();
      if (exp === "0") {
        this.setState({ expression: "" });
      } else if (exp.charAt(0) === "-") {
        exp = "(" + exp + ")";
        this.setState({ expression: exp });
      } else {
        this.setState({ expression: exp });
      }
    } else {
      let exp = this.state.expression;
      let operator = exp.charAt(exp.length - 1);
      //console.log(operator);
      if (
        operator === "*" ||
        operator === "-" ||
        operator === "+" ||
        operator === "/"
      ) {
        if (key === "*" || key === "/" || key === "+" || key === "-") {
          exp = exp.substr(0, exp.length - 1);
          console.log(exp);
          exp = exp + key;
          this.setState({ expression: exp });
        } else {
          exp = exp + key;
          this.setState({ expression: exp });
        }
      } else {
        exp = exp + key;
        this.setState({ expression: exp });
      }
    }
  };
  render() {
    return (
      <div className="App">
        <Display expression={this.state.expression}></Display>
        <Keypad onClick={this.handleKey}></Keypad>
      </div>
    );
  }
}

export default App;
