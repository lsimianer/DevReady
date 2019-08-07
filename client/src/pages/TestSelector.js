import API from "../utils/API";
import { Link } from "react-router-dom";
// import { Col, Row, Container } from "../components/Grid";
// import './DottedBox.css'
import React, { Component } from "react";
import "./TestSelector.css";

class TestSelector extends Component {
  state = {
    tests: [],
    subject: "",
    // author: "",
    // synopsis: ""
  };

  

  loadTests = () => {
    API.getTests()
      .then(res =>
        this.setState({ tests: res.data, subject: ""})
      )
      .catch(err => console.log(err));
  };

 

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveTest({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadTests())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
    <div>
      <div className="jumbotron-test">
      <h1 id="landingHeader">Available Tests</h1>
      </div>
      <div className="container">
        
        <div className="card">
        <i class="devicon-javascript-plain"></i>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/tests/JavaScript" class="btn btn-primary">Get JavaScript Certified</Link>
          </div>
        </div>

        <div className="card">
        <i class="devicon-python-plain"></i>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/tests/Python" class="btn btn-primary">Get Python Certified</Link>
          </div>
        </div>

        <div className="card">
          <i class="devicon-react-original"></i>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/tests/React" class="btn btn-primary">Get React Certified</Link>
          </div>
        </div>

        <div className="card">
        <i class="devicon-css3-plain"></i>
          <div className="card-body">
            <h5 className="card-title"></h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <Link to="/tests/CSS3" class="btn btn-primary">Get CSS3 Certified</Link>
          </div> 
        </div>
          </div>
          </div>
                
    );
  }
}

export default TestSelector;
