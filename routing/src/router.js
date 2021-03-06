import React from "react";
import { Link, Route } from "react-router-dom";
import MyApp from "./components/MyApp";
import Home from "./components/Home";
import PersonList from "./components/PersonList";
import PersonDetail from "./components/PersonDetail";
import Login from "./components/Login";
import { LoginConsumer } from "./context-api/loginContext";

export const routing = (
  <div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        MyApp
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
            <Link className="nav-link" to="/home">
              Home <span className="sr-only">(current)</span>
            </Link>
          </li>
          {
            <LoginConsumer>
              {info => {
                if (info.login) {
                  return (
                    <div>
                      <li className="nav-item">
                        <Link className="nav-link" to="/personlist">
                          Person List
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/persondetail">
                          Person Detail
                        </Link>
                      </li>
                      <li className="nav-item">
                        <Link className="nav-link" to="/login">
                          Logout
                        </Link>
                      </li>
                    </div>
                  );
                } else {
                  return (
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  );
                }
              }}
            </LoginConsumer>
          }
        </ul>
      </div>
    </nav>

    <Route exact path="/" component={MyApp} />
    <Route path="/home" component={Home} />
    <Route path="/personlist" component={PersonList} />
    <Route path="/persondetail" component={PersonDetail} />
    <Route path="/login" component={Login} />
  </div>
);
