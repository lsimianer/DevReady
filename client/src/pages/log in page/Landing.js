import React, { Component } from "react";
import "../log in page/logIn.css";
import API from "../../utils/API.js";


class Landing extends Component {

  state = {
    email: "",
    password: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  submission = event => {
    event.preventDefault();
    if (this.state.email && this.state.password) {
      API.getDevelopers({
        email: this.state.email,
        password: this.state.password
      })
    }
  }

  render() {
    return (
      <div>
        <h1 id="landingHeader">Welcome to ReadyDev</h1>
        <h4 id="landingSubHeader">Get Ready, Stay Ready</h4>
        <br />
        <div className="container">
          <form id="logInForm">
            <div className="form-group">
              <label htmlFor="emailaccount">Email</label>
              <br></br>
              <input type="text/email" onChange={this.handleInputChange} className="form-control" id="emailaccount" value={this.state.email} name="email" placeholder="Newdev@greatdev.com" />
            </div>
            <div className="form-group">
              <label for="password">Password</label>
              <br></br>
              <input type="text/password" onChange={this.handleInputChange} className="form-control" id="password" value={this.state.password} name="password" placeholder="Password" />
              <br></br>
            </div>

            <div className="flexbox-container">
            <button id="logIn" className="btn btn-primary btn-lg" type="submit" onClick={this.submission}>Login</button>
            <button id="createAcct" className="btn btn-primary btn-lg" type="submit">Register</button>
            </div>

          </form>
        </div>

        <div className="Logo"></div>
        
        <div className="top-background-main">
          <div className="top-background-left"></div>
          <div className="top-background-right"></div>
        </div>
      </div>

    );
  }
}

export default Landing;