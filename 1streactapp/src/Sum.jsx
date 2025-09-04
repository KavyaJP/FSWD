import React from "react";

class Sum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      no1: "",
      no2: "",
      result: null,
    };
  }

  doSum = () => {
    const { no1, no2 } = this.state;
    
    const sum = parseFloat(no1) + parseFloat(no2);

    if (isNaN(sum)) {
      alert("Please enter valid numbers.");
      return;
    }

    this.setState({ result: sum });
  };

  render() {
    return (
      <>
        <h1>Sum</h1>
        No.1:
        <input
          type="text"
          placeholder="Number 1"
          value={this.state.no1}
          onChange={(e) => this.setState({ no1: e.target.value })}
        />
        <br />
        No.2:
        <input
          type="text"
          placeholder="Number 2"
          value={this.state.no2}
          onChange={(e) => this.setState({ no2: e.target.value })}
        />
        <br />
        <input type="button" value="Add" onClick={this.doSum} />
        <br />
        {this.state.result !== null && <h2>Result: {this.state.result}</h2>}
      </>
    );
  }
}

export default Sum;
