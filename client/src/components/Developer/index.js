import React from "react";
import "./style.css";

function Developer(props) {
  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong>
          </li>
          <li>
            <strong>Occupation:</strong>
          </li>
          <li>
            <strong>Language:</strong>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Developer;
