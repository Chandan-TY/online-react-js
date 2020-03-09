import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter  } from 'react-router-dom'
import {routing} from "./router"
function App() {
  return (
    <BrowserRouter>
    <div>
     {routing}
    </div>
    </BrowserRouter>
  );
}

export default App;
