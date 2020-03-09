import React, { Component } from "react";
import Axios from "axios";

export default class CreateAccount extends Component {
  state = {
    email: "",
    password: "",
    name: "",
    phoneno: ""
    // emailError: false,
    // nameError: false,
    // passwordError: false,
    // phonenoError: false
  };
  handleSubmit = event => {
    event.preventDefault();
    // console.log(this.state);
    /*  if (this.state.email === "") {
      this.setState({
        emailError: true,
        nameError: false,
        passwordError: false,
        phonenoError: false
      });
    } */
    const url = "https://react-js-f3568.firebaseio.com/accounts.json";
    const account = { ...this.state };
    // console.log("Account ", account);
    Axios.post(url, account)
      .then(response => {
        console.log("Response ", response);
        this.setState({
          email: "",
          password: "",
          name: "",
          phoneno: ""
        });
      })
      .catch(err => {
        console.log("Error ", err);
      });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              value={this.state.name}
              onChange={this.handleChange}
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="name"
            />
            {this.state.emailError ? (
              <p style={{ color: "red" }}>Please enter valid email</p>
            ) : null}
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Phone Number</label>
            <input
              value={this.state.phoneno}
              onChange={this.handleChange}
              type="number"
              className="form-control"
              id="exampleInputPassword1"
              name="phoneno"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              value={this.state.email}
              onChange={this.handleChange}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              name="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              name="password"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}
