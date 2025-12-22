import React, { Component } from "react";

// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
class CounterClass extends Component {
  constructor(props) {
    console.log("Constructor");
    super(props);
    this.state = {
      count: 1000,
      num:{}
    };
  }
  
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }
  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h2>Counter (Class-Based)</h2>
        <p>Count: {this.state.count}</p>
        <p>name: {this.state.name}</p>
        <p>mobile: {this.state.mobile}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}
export default CounterClass;
