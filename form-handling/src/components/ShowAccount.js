import React, { Component } from "react";
import Axios from "axios";
import { Button, Modal } from "react-bootstrap";
export default class ShowAccount extends Component {
  state = {
    accounts: [],
    show: false,
    name: "",
    email: "",
    password: "",
    phoneno: "",
    id: ""
  };

  componentDidMount() {
    this.getAccounts();
  }

  getAccounts = () => {
    const url = "https://react-js-f3568.firebaseio.com/accounts.json";
    Axios.get(url)
      .then(response => {
        // console.log("Response ", response);
        const data = [];
        const fetchedAccounts = response.data;
        for (let key in fetchedAccounts) {
          data.push({
            id: key,
            ...fetchedAccounts[key]
          });
        }
        // console.log("Fetched Accounts ", data);
        this.setState({
          accounts: data
        });
      })
      .catch(err => {
        console.log("Error ", err);
      });
  };
  deleteAccount = account => {
    console.log(account);
    const url = `https://react-js-f3568.firebaseio.com/accounts/${account.id}/.json`;
    Axios.delete(url)
      .then(response => {
        console.log("Response ", response);
        // this.getAccounts();
        const updatedAccounts = this.state.accounts.filter(acc => {
          if (acc.id !== account.id) {
            return acc;
          }
        });
        this.setState({
          accounts: updatedAccounts
        });
      })
      .catch(err => {
        console.log("Error ", err);
      });
  };
  editAccount = acc => {
    const { name, email, password, phoneno, id } = acc;
    this.setState({
      show: true,
      name,
      email,
      password,
      phoneno,
      id
    });
  };

  handleClose = () => {
    this.setState({
      show: false
    });
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  updateAccount = () => {
    const url = `https://react-js-f3568.firebaseio.com/accounts/${this.state.id}/.json`;
    const { name, phoneno, password, email } = this.state;
    const account = {
      name,
      phoneno,
      password,
      email
    };
    Axios.put(url, account)
      .then(response => {
        const updatedAccount = response.data;
        if (response.status === 200) {
          const updatedAccounts = this.state.accounts.map(account => {
            if (account.id === this.state.id) {

              return {
                id: this.state.id,
                ...updatedAccount
              }
              // return account;
            } else {
              return account;
            }
          });
          this.setState({
            accounts: updatedAccounts,
            show: false
          });
        }
        console.log(response);
      })
      .catch(err => {
        console.log(err);
      });
  };
  render() {
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">SL.NO</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Phone No</th>
            </tr>
          </thead>
          <tbody>
            {this.state.accounts.map((account, index) => {
              return (
                <tr key={account.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{account.name}</td>
                  <td>{account.email}</td>
                  <td>{account.phoneno}</td>
                  <td>
                    <button
                      onClick={() => {
                        this.deleteAccount(account);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        this.editAccount(account);
                      }}
                      className="btn btn-success"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>

        <div>
          <Modal show={this.state.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Edit Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div className="container">
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
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={this.updateAccount}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    );
  }
}
