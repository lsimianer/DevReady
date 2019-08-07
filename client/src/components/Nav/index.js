import React from "react";
import "./style.css";
import Logo from "../Images/ab_ReadyDev-02.png"

function Nav() {
  return (
    <div>
      <div className="logo-image"><img src={Logo} /></div>
      <nav class="menu">
        <ol>
          <li class="menu-item"><a href={"/home"}>Home</a></li>
          <li class="menu-item"><a href="#0">Info</a></li>
          <li class="menu-item"><a href="/testSelector">Tests</a>
            <ol class="sub-menu">
              <li class="menu-item"><a href="/tests/JavaScript">JavaScript</a></li>
              <li class="menu-item"><a href="/tests/Python">Python</a></li>
              <li class="menu-item"><a href="/tests/CSS3">CSS</a></li>
              <li class="menu-item"><a href="/tests/React">React</a></li>
            </ol>
          </li>
          <li class="menu-item"><a href="#0">Jobs</a>
            <ol class="sub-menu">
              <li class="menu-item"><a href="#0">Employers</a></li>
              <li class="menu-item"><a href="#0">Some Dude</a></li>
              <li class="menu-item"><a href="#0">Info</a></li>
            </ol>
          </li>
          <li class="menu-item"><a href="#0">Contact</a></li>
        </ol>
      </nav>
    </div>
  );
}

export default Nav;
