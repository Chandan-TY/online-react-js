import React from "react";

function withCounter(OriginalComponent, value) {
  class MyComponent extends React.Component {
    state = {
      count: 1
    };

    incrementCount = () => {
      this.setState(prevState => {
        return {
          count: prevState.count + 1
        };
      });
    };
    render() {
      if (value === "mouse") {
        return (
          <OriginalComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            message="Good Morning"
            {...this.props}
          />
        );
      } else {
        return (
          <OriginalComponent
            count={this.state.count}
            incrementCount={this.incrementCount}
            {...this.props}
          />
        );
      }
    }
  }
  return MyComponent;
}

export default withCounter;
