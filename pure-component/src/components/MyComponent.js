import React, { Component } from "react";

export class MyComponent extends Component {
  shouldComponentUpdate(props, state) {
    // console.log(props)
    // console.log(state)
    // console.log(this.props)
    if (this.props.username === props.username) {
      return false;
    } else {
      return true;
    }
  }

  render() {
    console.log("My Component rendering");
    return (
      <>
        <h1>Name - {this.props.username}</h1>
      </>
    );
  }
}

export default MyComponent;
