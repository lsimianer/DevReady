import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import Logo from "../Images/ab_ReadyDev-02.png"

class Nav extends Component {

  render() {
    return (
      <div>
        <div className="logo-image"><img src={Logo} /></div>
        <nav className="menu">
          <ol>
            <li className="menu-item"><Link to={"/home"}>Home</Link>
              <ol className="sub-menu">
                <li className="menu-item"><Link to={"/"}>Switch Accounts</Link></li>
              </ol>
            </li>
            <li className="menu-item"><Link to={"/about"}>Info</Link></li>
            <li className="menu-item"><Link to={"/testSelector"}>Tests</Link>
              <ol className="sub-menu">
                <li className="menu-item"><Link to={"/profilepage"}>Your Scores</Link></li>
                <li className="menu-item"><Link to={"/testSelector"}>View All Tests</Link></li>
              </ol>
            </li>
            <li className="menu-item"><Link to={"#0"}>Jobs</Link>
              <ol className="sub-menu">
                <li className="menu-item"><Link to={"#0"}>Partnered Employers</Link></li>
                <li className="menu-item"><Link to={"#0"}>Careers</Link></li>

              </ol>
            </li>
            <li className="menu-item"><a href={"https://mailchi.mp/f8406d2a0301/signinpage"}>Subscribe</a></li>
          </ol>
        </nav>
      </div>
    );
  }
}

export default Nav;
