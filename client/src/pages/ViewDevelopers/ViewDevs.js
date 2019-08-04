import React, { Component } from 'react';
import API from "../../utils/API";
import "./View.css";


class ViewDevs extends Component  {
  state = {
    developers: []
  };

  componentDidMount() {
    this.loadDevs();
  }

  loadDevs = () => {
    API.getDevelopers()
      .then(res => this.setState({ developers: res.data }))
      .catch(err => console.log(err));};


      render(){


  return (
    <div>
      <div className="jumbotron">
      <h1 id="headtext">Current Developers</h1>
    

      </div>
      
      
      <p>
        ReadyDev puts developers through extreme tests to ensure that they are ready to hit the ground running in any area they earn certifications in on our site.
      </p>

      <ul>
        <li>

        </li>
      </ul>

    </div>
  );
}};

export default ViewDevs;