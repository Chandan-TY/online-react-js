import React, { Component } from "react";
import withCounter from "../hoc/withCounter";

class ButtonCounter extends Component {
  render() {
    const { count, incrementCount } = this.props;
    // console.log("Button counter ", this.props);
    return (
      <React.Fragment>
        <h1>{count}</h1>
        <button onClick={incrementCount}>Increase Count</button>
      </React.Fragment>
    );
  }
}
export default withCounter(ButtonCounter);
