import React from 'react';
import logo from './logo.svg';
import './App.css';
import { routing } from './router';
import { BrowserRouter } from 'react-router-dom';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <BrowserRouter>
    <div>
      {routing}
      <CreateAccount />
    </div>
    </BrowserRouter>
  );
}

export default App;
