import React, { Component } from "react";
import MyComponent from "./MyComponent";
import MyPureComponent from "./MyPureComponent";
import MyFuncComp from "./MyFuncComp";

export class ParentComp extends Component {
  state = {
    name: "Vijay"
  };
  handleClick = () => {
    this.setState(prevState => {
      return {
        name: "Suresh"
      };
    });
  };
  render() {
    return (
      <>
        {/* <MyComponent username={this.state.name} /> */}
        {/* <MyPureComponent username={this.state.name} /> */}
        <MyFuncComp username={this.state.name} />
        <button onClick={this.handleClick}>Click</button>
      </>
    );
  }
}

export default ParentComp;
