import React from "react";
import "./testy.css";
// import "client/src/testFolder/cssTest.json";

function checkValue (props) {
  var totalScore = 0;
  totalScore++;
  console.log(totalScore);
  return totalScore;
}

function cssTest(props) {
  return (
    <div className="card">
      <div className="content">
          
        <p><strong>Question {props.id}:  {props.question}</strong></p>
        
        
        <input type="radio" value="1" />   {props.answer[0]}<br></br>
        <input type="radio" value="2" />   {props.answer[1]}<br></br>
        <input type="radio" value="3" />   {props.answer[2]}<br></br>
        <input type="radio" value="4" />   {props.answer[3]}
          
      </div>
    </div>
  );
}

export default cssTest;