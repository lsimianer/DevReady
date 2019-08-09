import React from "react";
import {Link} from "react-router-dom";

import "./style.css";
import Logo from "../Images/ab_ReadyDev-02.png"

function Nav() {
  return (
    <div>
      <div className="logo-image"><img src={Logo} /></div>
      <nav className="menu">
        <ol>



          <li className="menu-item"><Link to={"/home"}>Home </Link></li>
          <li className="menu-item"><a href="/about">Info</a></li>
          <li className="menu-item"><a href="/testSelector">Tests</a>
            <ol className="sub-menu">
              <li className="menu-item"><a href="/tests/JavaScript">JavaScript</a></li>
              <li className="menu-item"><a href="/tests/Python">Python</a></li>
              <li className="menu-item"><a href="/tests/CSS3">CSS</a></li>
              <li className="menu-item"><a href="/tests/React">React</a></li>
              <li className="menu-item"><a href="/testSelector">All Tests</a></li>
            </ol>
          </li>
          <li className="menu-item"><a href="#0">Jobs</a>
            <ol className="sub-menu">
              <li className="menu-item"><a href="#0">Partnered Employers</a></li>
              <li className="menu-item"><a href="#0">Careers</a></li>

            </ol>
          </li>
          <li className="menu-item"><a href="#0">Contact</a></li>
          
          
        </ol>
      </nav>
    </div>
  );
}

export default Nav;
