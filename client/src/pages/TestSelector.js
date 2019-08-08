import API from "../utils/API";
import { Link } from "react-router-dom";
import React, { Component } from "react";
import "./TestSelector.css";
import jsLogo from "../components/Images/jsImage.png";
import cssLogo from "../components/Images/cssImage.png";
import reactLogo from "../components/Images/reactImage.png";
import pythonLogo from "../components/Images/pythonImage.png";

class TestSelector extends Component {
  state = {
    tests: [],
    subject: ""
    // author: "",
    // synopsis: ""
  };

  loadTests = () => {
    API.getTests()
      .then(res => this.setState({ tests: res.data, subject: "" }))
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
          <div className="test-card">
            <img className="logo" src={jsLogo} />
            <div className="card-body">
              <h5 className="card-title" />
              <p className="card-text" />
              <Link to="/tests/JavaScript" class="btn btn-primary test-btn">
                Get JavaScript Certified
              </Link>
            </div>
          </div>

          <div className="test-card">
            <img className="logo" src={pythonLogo} />
            <div className="card-body">
              <h5 className="card-title" />
              <p className="card-text" />
              <Link to="/tests/Python" class="btn btn-primary test-btn">
                Get Python Certified
              </Link>
            </div>
          </div>

          <div className="test-card">
            <img className="logo" src={reactLogo} />
            <div className="card-body">
              <h5 className="card-title" />
              <p className="card-text" />
              <Link to="/tests/React" class="btn btn-primary test-btn">
                Get React Certified
              </Link>
            </div>
          </div>

          <div className="test-card">
            <img className="logo" src={cssLogo} />
            <div className="card-body">
              <h5 className="card-title" />
              <p className="card-text" />
              <Link to="/tests/CSS3" class="btn btn-primary test-btn">
                Get CSS3 Certified
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TestSelector;
