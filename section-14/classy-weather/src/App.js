import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { counter: 0 };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
  }
  handleAdd() {
    this.setState((currState) => {
      return { counter: currState.counter + 1 };
    });
  }

  handleMinus() {
    this.setState((currState) => {
      return { counter: currState.counter - 1 };
    });
  }

  render() {
    const date = new Date("january 19 2027");

    return (
      <>
        <button onClick={this.handleMinus}>-</button>
        <span>
          {date.toDateString()} - {this.state.counter}
        </span>
        <button onClick={this.handleAdd}>+</button>
      </>
    );
  }
}
export default Counter;
