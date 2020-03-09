import React from "react";
import "./App.css";
import PersonList from "./components/PersonList";

class App extends React.Component {
  state = {
    persons: [
      {
        id: 1,
        name: "Guru"
      },
      {
        id: 2,
        name: "Nikhil"
      },
      {
        id: 3,
        name: "Divya"
      }
    ]
  };

  getPersonData = data => {
    console.log("Clicked Person Data", data);
  };
  render() {
    return (
      <div className="App">
        <h1>App Component</h1>
        <PersonList action={this.getPersonData} persons={this.state.persons} />
      </div>
    );
  }
}

export default App;
