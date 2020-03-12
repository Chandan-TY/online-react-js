import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter  } from 'react-router-dom'
import {routing} from "./router"
import Footer from './components/Footer';
import ComponentD from './components/ComponentD';
function App() {
  let name = "Ajay";
  /* return (
    <BrowserRouter>
    <div>
     {routing}
     <Footer />
    </div>
    </BrowserRouter>
  ); */
  return(
    <ComponentD name={name}/>
  )
}

export default App;
