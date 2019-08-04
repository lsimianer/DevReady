import React from "react";

function CreateDeveloper() {
  
  return (
    <div>
      <div className="jumbotron">
      <h1>Create Developer Account</h1>
      </div>
      
      <p>
        Welcome aspiring developer once you've created an account. You'll be able to take our tests to prove to recruiters(and more importantly yourself) that you are ready to take on the world. Sign up and start knocking out these certs!
      </p>

      <form>
        <div className="form-group">
          <label for="username">Name</label>
          <br></br>
        <input type="text/name" id="username" className="form-control"placeholder="John Doe"/> 
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

export default CreateDeveloper;