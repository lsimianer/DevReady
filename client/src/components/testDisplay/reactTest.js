import React, { Component } from "react";
import "./testy.css";
import testData from "../../testFolder/reactTest.json";
import API from "../../utils/API";

class reactTest extends Component {
  state = {
    data: [],
    responses: {},
    reactScore: 0
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

  if(this.state.reactScore>= 0){
    console.log("I'm down here")
    
    API.saveScore(this.state.reactScore).then(response => {
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
    this.setState({ reactScore: testScore })
    console.log("The test score is " + testScore);

    
  }

  render() {
    return (
      <div className="card">
        <div className="content">

          <p> Your score: {this.state.reactScore? this.state.reactScore : ""}</p>

          {this.state.data.map(elem => (
            <div key={elem.id} className="card">
              <p><strong>Question {elem.id+1}:  {elem.q}</strong></p>
              <p><input type="radio" name={elem.id} value="0" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[0]}</p>
              <p><input type="radio" name={elem.id} value="1" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[1]}</p>
              <p><input type="radio" name={elem.id} value="2" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[2]}</p>
              <p><input type="radio" name={elem.id} value="3" onClick={event => this.handleRadioClick(event, elem.id)} />   {elem.a[3]}</p>
            </div>
          ))}

          <button className="btn btn-primary" type="submit" onClick={(event) => {this.handleSubmit(); this.save(this.state.reactScore)}}>Submit Answers</button>

        </div>
      </div>
    );
  };
};

export default reactTest;




// function checkValue (props) {
//   var totalScore = 0;
//   totalScore++;
//   console.log(totalScore);
//   return totalScore;
// }

// function reactTest(props) {
//   return (
//     <div className="card">
//       <div className="content">
          
        
//         <div className="card">
//         <p><strong>Question {testData[1].id}:  {testData[1].q}</strong></p>
//           <input type="radio" value="1" />   {testData[1].a[0]}<br></br>
//           <input type="radio" value="2" />   {testData[1].a[1]}<br></br>
//           <input type="radio" value="3" />   {testData[1].a[2]}<br></br>
//           <input type="radio" value="4" />   {testData[1].a[3]}
//         </div>
//         <div className="card">
//         <p><strong>Question {testData[2].id}:  {testData[2].q}</strong></p>
//           <input type="radio" value="1" />   {testData[2].a[0]}<br></br>
//           <input type="radio" value="2" />   {testData[2].a[1]}<br></br>
//           <input type="radio" value="3" />   {testData[2].a[2]}<br></br>
//           <input type="radio" value="4" />   {testData[2].a[3]}
//         </div>
//         <div className="card">
//         <p><strong>Question {testData[3].id}:  {testData[3].q}</strong></p>
//           <input type="radio" value="1" />   {testData[3].a[0]}<br></br>
//           <input type="radio" value="2" />   {testData[3].a[1]}<br></br>
//           <input type="radio" value="3" />   {testData[3].a[2]}<br></br>
//           <input type="radio" value="4" />   {testData[3].a[3]}
//         </div>
//         <div className="card">
//         <p><strong>Question {testData[4].id}:  {testData[4].q}</strong></p>
//           <input type="radio" value="1" />   {testData[4].a[0]}<br></br>
//           <input type="radio" value="2" />   {testData[4].a[1]}<br></br>
//           <input type="radio" value="3" />   {testData[4].a[2]}<br></br>
//           <input type="radio" value="4" />   {testData[4].a[3]}
//         </div>
//         <div className="card">
//         <p><strong>Question {testData[5].id}:  {testData[5].q}</strong></p>
//           <input type="radio" value="1" />   {testData[4].a[0]}<br></br>
//           <input type="radio" value="2" />   {testData[4].a[1]}<br></br>
//           <input type="radio" value="3" />   {testData[4].a[2]}<br></br>
//           <input type="radio" value="4" />   {testData[4].a[3]}
//         </div>
//         <div className="card">
//         <p><strong>Question {testData[6].id}:  {testData[6].q}</strong></p>
//           <input type="radio" value="1" />   {testData[4].a[0]}<br></br>
//           <input type="radio" value="2" />   {testData[4].a[1]}<br></br>
//           <input type="radio" value="3" />   {testData[4].a[2]}<br></br>
//           <input type="radio" value="4" />   {testData[4].a[3]}
//         </div>
//       </div>
//     </div>
//   );
// }