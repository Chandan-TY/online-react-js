import React, { Component } from "react";

export default class Err1 extends Component {
  state = {
    hasError: false
  };
  static getDerivedStateFromError(error) {
    return {
      hasError: true
    };
  }
  render() {
    if (this.state.hasError) {
      return <h1>This image is not available</h1>;
    } else {
      return this.props.children;
    }
  }
}
