import React, { Component } from "react";
import "./style.css";

class Header extends Component {

  state = {
    firstName: "",
    lastName: "",
    password: ""
  };


  render() {

    return (
      <div className="header">
        <p>
          This is where the tags go for the header
        </p>
       
      </div>
    );
  }
}

export default Header;
