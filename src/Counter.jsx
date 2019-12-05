import React, { Component } from "react";
import './Counter.css'
class Counter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 3501
    };
  }

  incrementCount = () => {
    this.setState({
          count: this.state.count + 1
        });

  };
  decrementCount = () => {
    this.setState({
          count: this.state.count - 1
        });

  };

  render() {
    return (
      <div className="counter">
        <h1>{this.state.count} Likes</h1>

        <button onClick={this.incrementCount}>Like</button>
        <button onClick={this.decrementCount}>Dislike</button>
      </div>
    );
  }
}

export default Counter;
