import React from "react";
import "./testy.css";
import testData from "../../testFolder/javaScriptTest";

console.log(testData)
function checkValue (props) {
  var totalScore = 0;
  totalScore++;
  console.log(totalScore);
  return totalScore;
}

function javaScriptTest(props) {
  return (
    <div className="card">
      <div className="content">
          
        <p><strong>Question {testData.id}:  {testData.q}</strong></p>
        
        
        <input type="radio" value="1" />   {testData.q[0]}<br></br>
        <input type="radio" value="2" />   {testData.a[1]}<br></br>
        <input type="radio" value="3" />   {testData.a[2]}<br></br>
        <input type="radio" value="4" />   {testData.a[3]}
          
      </div>
    </div>
  );
}

export default javaScriptTest;