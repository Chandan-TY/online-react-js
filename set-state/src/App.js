import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Parent from "./components/Parent";
import InputRef from "./components/InputRef";
import FocusOnLoad from "./components/FocusOnLoad";
import ErrorBoundary from "./error-boundary/ErrorBoundary";
import TestComp from "./components/TestComp";
import Err1 from "./error-boundary/Err1";

function App() {
  return (
    <div className="App">
      {/* <Parent /> */}
      {/* <InputRef /> */}
      <ErrorBoundary>
        <FocusOnLoad name="vijay" />
      </ErrorBoundary>
      <Err1>
        <TestComp />
      </Err1>
    </div>
  );
}

export default App;
