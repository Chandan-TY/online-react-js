import React, { Component } from "react";
import Axios from "axios";

export default class ShowAccount extends Component {
  state = {
    accounts: []
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
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
