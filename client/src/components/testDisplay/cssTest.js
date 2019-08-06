import React from "react";
import "./testy.css";
import testData from "../../testFolder/cssTest.json";

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
          
        
        <div className="card">
        <p><strong>Question {testData[1].id}:  {testData[1].q}</strong></p>
          <input type="radio" value="1" />   {testData[1].a[0]}<br></br>
          <input type="radio" value="2" />   {testData[1].a[1]}<br></br>
          <input type="radio" value="3" />   {testData[1].a[2]}<br></br>
          <input type="radio" value="4" />   {testData[1].a[3]}
        </div>
        <div className="card">
        <p><strong>Question {testData[2].id}:  {testData[2].q}</strong></p>
          <input type="radio" value="1" />   {testData[2].a[0]}<br></br>
          <input type="radio" value="2" />   {testData[2].a[1]}<br></br>
          <input type="radio" value="3" />   {testData[2].a[2]}<br></br>
          <input type="radio" value="4" />   {testData[2].a[3]}
        </div>
        <div className="card">
        <p><strong>Question {testData[3].id}:  {testData[3].q}</strong></p>
          <input type="radio" value="1" />   {testData[3].a[0]}<br></br>
          <input type="radio" value="2" />   {testData[3].a[1]}<br></br>
          <input type="radio" value="3" />   {testData[3].a[2]}<br></br>
          <input type="radio" value="4" />   {testData[3].a[3]}
        </div>
        <div className="card">
        <p><strong>Question {testData[4].id}:  {testData[4].q}</strong></p>
          <input type="radio" value="1" />   {testData[4].a[0]}<br></br>
          <input type="radio" value="2" />   {testData[4].a[1]}<br></br>
          <input type="radio" value="3" />   {testData[4].a[2]}<br></br>
          <input type="radio" value="4" />   {testData[4].a[3]}
        </div>
        <div className="card">
        <p><strong>Question {testData[5].id}:  {testData[5].q}</strong></p>
          <input type="radio" value="1" />   {testData[4].a[0]}<br></br>
          <input type="radio" value="2" />   {testData[4].a[1]}<br></br>
          <input type="radio" value="3" />   {testData[4].a[2]}<br></br>
          <input type="radio" value="4" />   {testData[4].a[3]}
        </div>
        <div className="card">
        <p><strong>Question {testData[6].id}:  {testData[6].q}</strong></p>
          <input type="radio" value="1" />   {testData[4].a[0]}<br></br>
          <input type="radio" value="2" />   {testData[4].a[1]}<br></br>
          <input type="radio" value="3" />   {testData[4].a[2]}<br></br>
          <input type="radio" value="4" />   {testData[4].a[3]}
        </div>
      </div>
    </div>
  );
}

export default cssTest;