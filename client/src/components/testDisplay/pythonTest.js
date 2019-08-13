import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./testy.css";
import testData from "../../testFolder/pythonTest.json";
import API from "../../utils/API";

class pythonTest extends Component {
  state = {
    data: [],
    responses: {},
    pythonScore: 0
  };

  componentDidMount() {
    // in the future, you'll be making an API call here

    const responseObj = {};
    /*  - what responseObj looks like
    {
      "1": null,
      "2": null,
      "3": null,
      ...
    } */
    
    testData.forEach(elem => {
      responseObj[elem.id] = null;
    });

    this.setState({ data: testData, responses: responseObj });
  };

  handleRadioClick = (event, id) => {
    const value = parseInt(event.target.value);
    const updatedResponses = this.state.responses;
    updatedResponses[id] = value;

    this.setState({ responses: updatedResponses });
    console.log("Question " + (id+1) + " was updated to choice (array index of) " + value + " --- The correct answer = " + testData[id].c);
  };

  save = () => {
    console.log("I'm trying to save!!")

  if(this.state.pythonScore >= 0){
    console.log("I'm down here")
    
    API.saveScore(this.state.pythonScore, "python").then(response => {
      console.log(response)
    })
    .catch(err => console.log(err));
  } }

  
  handleSubmit = () => {
    // compare answers here

    var testScore = 0; //16.6

    for (let i = 0; i < testData.length; i++) {
      if (this.state.responses[i] === testData[i].c) {
        testScore += 16.6;
      }
    }
    this.setState({ pythonScore: Math.floor(testScore) })
    console.log("The test score is " + testScore);
    alert("Congrats you scored " + Math.floor(testScore) + " on this test. Redirecting you to the home page.");
  }

  render() {
    return (
      <div className="card">
        <div className="content">

        <h1><span class="badge badge-secondary">Your score: {this.state.pythonScore? this.state.pythonScore : ""}</span></h1>
        {/* <p> Your score: {this.state.pythonScore? this.state.pythonScore : ""}</p> */}

          {this.state.data.map(elem => (
            <div key={elem.id} className="card">
              <p><strong>Question {elem.id+1}:  {elem.q}</strong></p>
              <p><input type="radio" name={elem.id} value="0" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[0]}</p>
              <p><input type="radio" name={elem.id} value="1" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[1]}</p>
              <p><input type="radio" name={elem.id} value="2" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[2]}</p>
              <p><input type="radio" name={elem.id} value="3" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[3]}</p>
            </div>
          ))}

          <button className="btn btn-primary" type="submit" onClick={(event) => {this.handleSubmit(); this.save(this.state.pythonScore)}}>Submit Answers</button>

        </div>
      </div>
    );
  };
};

export default pythonTest;