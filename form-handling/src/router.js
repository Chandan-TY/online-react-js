import React from 'react'
import {  Route, Link } from 'react-router-dom'
import Home from './components/Home'
import CreateAccount from './components/CreateAccount'
import ShowAccount from './components/ShowAccount'

export const routing = (
    <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item active">
            
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/createaccount">
              Create Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/showaccounts">
              Show Accounts
            </Link>
          </li>
        </ul>
      </div>
    </nav>

    <Route exact path="/" component={Home} />
    <Route path="/createaccount" component={CreateAccount} />
    <Route path="/showaccounts" component={ShowAccount} />
    </div>
)