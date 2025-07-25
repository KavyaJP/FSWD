import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
      msg: "",
    };
  }

  increment = () => {
    if (this.state.counter > 2) {
      this.setState({ msg: "Sorry, Value is >3" });
    } else {
      this.setState((prevState) => ({
        counter: prevState.counter + 1,
        msg: "",
      }));
    }
  };

  decrement = () => {
    if (this.state.counter < 1) {
      this.setState({ msg: "Sorry, Value is <0" });
    } else {
      this.setState((prevState) => ({
        counter: prevState.counter - 1,
        msg: "",
      }));
    }
  };

  render() {
    return (
      <>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p style={{ color: "red" }}>{this.state.msg}</p>
      </>
    );
  }
}

export default Counter;
