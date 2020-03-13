import React, { Component } from "react";

export default class FocusOnLoad extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }
  componentDidMount() {
    console.log(this);
    this.myRef.current.focus();
  }
  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <input ref={this.myRef} />
      </div>
    );
  }
}
