import React, { Component } from 'react';
import API from "../../utils/API.js";
import { List, ListItem } from "../../components/List";


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
      <h3 id="headtext">
        ReadyDev puts developers through extreme tests to ensure that they are ready to hit the ground running in any area they earn certifications in on our site.
      </h3>

      </div>
      
      
      
      
      {this.state.developers.length ? (
        <List>
        {this.state.developers.map(
          dev => (
            
              <ListItem key={dev._id}>
                    <a href={"/developers/" + dev._id}>
                      <strong>
                        Name: {dev.developername} <br></br>
                        Email: {dev.email}
                      </strong>
                      <p> Years of Experience: {dev.experience}</p>
                      {dev.veteran ? <p>This member is a Veteran!</p> : ""}
                      {dev.felony ? <p>This member is a convicted felon.</p> : ""}
                      {dev.cssScore < 79 ? <p>This member has earned our CSS Certification!</p> : ""}
                      <p>About Me: {dev.aboutMe} </p>
                      <p>Member since: {dev.date}</p>
                    </a>
                    </ListItem>
                   
          )
        )}
        </List>
      ): (
        <h1 id="headtext">No Developers to Show! Check Back Later!</h1>
      )} 

    </div>
  );
}};

export default ViewDevs;