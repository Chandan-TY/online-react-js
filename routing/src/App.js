import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { routing } from "./router";
import { BrowserRouter } from "react-router-dom";
import CreateAccount from "./components/CreateAccount";
import { LoginProvider } from "./context-api/loginContext";

export default class App extends React.Component {
  state = {
    login: false
  };

  changeLogin = status => {
    this.setState({
      login: status
    });
  };

  render() {
    const loginInfo = {
      login: this.state.login,
      changeLogin: this.changeLogin
    };
    return (
      <div>
        <LoginProvider value={loginInfo}>
          <BrowserRouter>
            <div>
              {routing}
              {/* <CreateAccount /> */}
            </div>
          </BrowserRouter>
        </LoginProvider>
      </div>
    );
  }
}

// function App() {
//   return (
//     <BrowserRouter>
//     <div>
//       {routing}
//       <CreateAccount />
//     </div>
//     </BrowserRouter>
//   );
// }

// export default App;
