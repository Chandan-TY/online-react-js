import React, { Component } from "react";

export default class Child extends Component {
  state = {
    count: 5
  };
  sendDataToParent = () => {
    /* 
    Never ever update the state in this manner
    this.setState({
      count: this.state.count + 5
    }); */

    /*
    Second way of updating state
   this.setState(
      {
        count: this.state.count + 5
      },
      () => {
        this.props.action(this.state.count);
      }
    ); */
    // This is the best way of updating the state
    this.setState(
      prevState => {
        // logic
        console.log("Prev state ", prevState);
        return {
          count: prevState.count + 5
        };
      },
      () => {
        this.props.action(this.state.count);
      }
    );
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.sendDataToParent}>Click</button>
      </div>
    );
  }
}
