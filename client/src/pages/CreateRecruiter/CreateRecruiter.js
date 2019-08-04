import React from "react";

function CreateRecruiter() {
  return (
    <div>
      <div className="jumbotron">
      <h1>Create Recruiter Account</h1>
      </div>
      <form>
        <div className="form-group">
          <label for="username">Name</label>
          <br></br>
        <input type="text/name" id="username" className="form-control"placeholder="John Doe"/> 
        </div>
        <div className="form-group">
          <label for="companyname">Company Name</label>
          <br></br>
        <input type="text/name" id="companyname" className="form-control"placeholder="Cool Startup"/> 
        </div>
        
        <div className="form-group">
        <label for="emailaccount">Email</label>
        <br></br>
        <input type="text/email" className="form-control" id="emailaccount" placeholder="Newdev@greatdev.com"/>
        </div>
        <div className="form-group">
        <label for="password">Password</label>
        <br></br>
        <input type="text/password" className="form-control" id="password" placeholder="Password"/>
        <br></br>
        </div>
        <button className="btn btn-primary" type="submit">
          Create Account 
        </button>
      </form>
    </div>
  );
}

export default CreateRecruiter;