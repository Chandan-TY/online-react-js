import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    user: "Ajay"
  };
  constructor(props) {
    super(props);
    console.log("App constructor executed");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("App gdsfp executed");
    return null;
    // or
    // return newState
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("App scu executed");
    if (this.state.user === nextState.user) {
      return false;
    } else {
      return true;
    }

    // return false;
  }

  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log("App gsbu executed");
    return null;
  };

  componentDidUpdate(prevProps, prevState) {
    console.log("App cdu executed");
  }

  componentWillUnmount() {
    console.log("App comp will unmount executed");
  }
  changeUser = () => {
    // this.state.user = "Anil";
    this.setState({
      user: "Anil"
    });
  };
  render() {
    console.log("App render method executed");
    return (
      <div className="App">
        <h1>{this.state.user}</h1>
        <button onClick={this.changeUser}>Click</button>
      </div>
    );
  }

  componentDidMount() {
    console.log("App cdm executed");
  }
}
