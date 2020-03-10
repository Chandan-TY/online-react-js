import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter  } from 'react-router-dom'
import {routing} from "./router"
import Footer from './components/Footer';
function App() {
  return (
    <BrowserRouter>
    <div>
     {routing}
     <Footer />
    </div>
    </BrowserRouter>
  );
}

export default App;
