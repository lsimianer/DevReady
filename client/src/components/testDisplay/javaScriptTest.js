import React, { Component } from "react";
import "./testy.css";
import testData from "../../testFolder/javaScriptTest.json";

class javaScriptTest extends Component {
  state = {
    data: [],
    responses: {},
    javaScriptScore: 0
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
    console.log("Question " + (id + 1) + " was updated to choice (array index of) " + value + " --- The correct answer = " + testData[id].c);
  };


  handleSubmit = () => {
    // compare answers here

    // This is  the test score variable that updates the state: score.
    var testScore = 0; //16.6

    for (let i = 0; i < testData.length; i++) {
      if (this.state.responses[i] === testData[i].c) {
        testScore += 16.6;
      }
    }
    this.setState({ javaScriptScore: testScore })
    console.log("The test score is " + testScore);
  }

  render() {
    return (
      <div className="card">
        <div className="content">

          {this.state.data.map(elem => (
            <div key={elem.id} className="card">
              <p><strong>Question {elem.id + 1}:  {elem.q}</strong></p>
              <p><input type="radio" name={elem.id} value="0" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[0]}</p>
              <p><input type="radio" name={elem.id} value="1" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[1]}</p>
              <p><input type="radio" name={elem.id} value="2" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[2]}</p>
              <p><input type="radio" name={elem.id} value="3" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[3]}</p>
            </div>
          ))}


          <button className="btn btn-primary" type="submit" data-toggle="modal" data-target="#myModal" onClick={event => this.handleSubmit()}>Submit Answers</button>

        </div>
      </div>
    );
  };
};


export default javaScriptTest;