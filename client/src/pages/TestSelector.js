import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import React, { Component } from "react";
// import  div  from "../components/ ";
// import { Input, TextArea, FormBtn } from "../components/Form";

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
      <div className="jumbotron">
              <h1>Available Tests</h1>
      </div>
      <div className="container">
        {/* <div className="row">
          <div className="col" size="md">            */}
                  <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">JavaScript</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Get Certified</a>
                  </div>

                  <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">Python</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Get Certified</a>
                  </div>

                  <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">React</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Get Certified</a>
                  </div>

                  <div className="card">
                  <img className="card-img-top" src="..." alt="Card image cap"/>
                  <div className="card-body">
                    <h5 className="card-title">CSS3</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Get Certified</a>
                  </div> 
                  </div>
                  </div>
                </div>  
                </div>                           
          </div>
    </div>
    );
  }
}

export default TestSelector;
