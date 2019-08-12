import React from "react";
import logo1 from "./logo1.png";
import "../Contact/contact.css";

function AboutUs() {

  return(
    <div>
      <div className="container">
        <img id="logo-main" src={logo1} alt="logo" />
      
        <div id="cardy" className="card">
          <div className="card-header">
          <h4>WHO WE ARE</h4>
        </div>
      
        <p className="cardy-text">
        ReadyDev started as a solution to a genuine need. As the need for software engineers increases yearly so do the people running towards the career field.
        The mechanisms for entry into this field include the traditional cs degree, bootcamps, and self taught. None of the afforementioned prepare you for
        the code intensive tasks of the jobs new developers seek.</p>

        <h4> OUR SOLUTION</h4>
        <p className="cardy-text">
          We enable developers to test their skills, build confidence for interviews, and most of all we help companies hiring junior
          developers save time and money by screening applicants with a test they built or one of our skill level and language specific tests.
        </p>
        </div>
      </div>


    </div>

  );


}

export default AboutUs;