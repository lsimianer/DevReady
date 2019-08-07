import React, {Component} from "react";
import "../log in page/logIn.css"


class Landing extends Component {

  


  render() {
  return (
    <div>
      <h1 id="landingHeader">Welcome to ReadyDev</h1>
      <h4 id="landingSubHeader">Get Ready, Stay Ready</h4>
      <br/>
      <div className="container">
        <form id="logInForm">
            <div className="form-group">
              <label for="emailaccount">Email</label>
              <br></br>
              <input type="text/email" className="form-control" id="emailaccount" placeholder="Newdev@greatdev.com"/>
              </div>
              <div className="form-group">
              <label for="password">Password</label>
              <br></br>
              <input type="text/password" className="form-control" id="password" placeholder="Password"/>
              <br></br>
            </div>
          <button id="logIn" className="btn btn-primary" type="submit">LogIn</button>
          <button id="createAcct" className="btn btn-primary" type="submit">Register</button>
        </form>
      </div> 

      <div className="Logo"></div>      
    </div>
  );
}}

export default Landing;