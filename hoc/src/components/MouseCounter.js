import React, { Component } from "react";
import withCounter from "../hoc/withCounter";

export class MouseCounter extends Component {
  render() {
    const { count, incrementCount, message, name } = this.props;
    console.log("Mouse Counter", this.props);
    return (
      <>
        <h1 onMouseOver={incrementCount}>Hovered {count} times</h1>
        <h1>Name - {name}</h1>
        <h1>Message - {message}</h1>
      </>
    );
  }
}

export default withCounter(MouseCounter, "mouse");
