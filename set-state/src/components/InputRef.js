import React, { Component } from "react";

export default class InputRef extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  focusInput = () => {
      this.inputRef.current.focus();
    // console.log(this.inputRef);
  };
  render() {
    return (
      <div>
        <input ref={this.inputRef} placeholder="Enter you name" />
        <hr />
        <button onClick={this.focusInput}>Focus Input</button>
      </div>
    );
  }
}
