import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      color: "blue"
    };
  }
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
      color: this.state.count < 1 ? "red" : "green"
    });
  };
  handleReset = () => {
    this.setState({ count: 0, color: "blue" });
  };
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
      color: this.state.count > -1 ? "green" : "red"
    });
  };

  render() {
    const { count, color } = this.state;
    return (
      <>
        <div className="container">
          <div className="counter">
            <h1>Counter</h1>
            <h1 className={color}>{count}</h1>
          </div>
          <div className="buttons">
            <button className="btn decrease" onClick={this.handleDecrement}>
              Decrease
            </button>
            <button className="btn reset" onClick={this.handleReset}>
              Reset
            </button>
            <button className="btn increase" onClick={this.handleIncrement}>
              Increase
            </button>
          </div>
        </div>
      </>
    );
  }
}
