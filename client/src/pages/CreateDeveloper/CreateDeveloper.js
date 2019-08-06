import React, {Component} from "react";
// import API from "../pages/src/utils/API";
import API from "../../utils/API.js"

class CreateDeveloper extends Component {

  state = {
    name: "",
    email:"",
    password:"",
    felony: false,
    veteran: false,
    aboutme:"",
    experience: 0
  };



  

  submission = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.password && this.state.linkedin) {
      API.saveDevelopers({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        linkedin: this.state.linkedin
      })
        
        .catch(err => console.log(err));
    }
  };
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };


  render() {
  
  return (
    <div>
      <div className="jumbotron">
      <h1>Create Developer Account</h1>
      <h3>
        Sign Up and Start Taking Tests!
      </h3>
      </div>
      
      

      <form>
        <div className="form-group">
          <label for="username">Name</label>
          <br></br>
        <input value={this.state.name}type="text/name" id="username"onChange={this.handleInputChange} className="form-control"placeholder="John Doe"/> 
        </div>
        
        <div className="form-group">
        <label for="emailaccount">Email</label>
        <br></br>
        <input value={this.state.email}onChange={this.handleInputChange} type="text/email" className="form-control" id="emailaccount" placeholder="Newdev@greatdev.com"/>
        </div>
        <div className="form-group">
        <label for="password">Password</label>
        <br></br>
        <input value={this.state.password}onChange={this.handleInputChange}type="text/password" className="form-control" id="password" placeholder="Password"/>
        <br></br>
        </div>
        <p>How many years of experience do you have?</p>
        <input type="radio" value="0"/>&nbsp; Less than 1 &nbsp;
        <input type="radio" value="1"/>&nbsp; 1 &nbsp;
        <input type="radio" value="2"/>&nbsp; 2 &nbsp;
        <input type="radio" value="3"/>&nbsp; 3 &nbsp;
        <input type="radio" value="4"/>&nbsp; 4 &nbsp;
        <input type="radio" value="5"/>&nbsp; 5 &nbsp;
        <input type="radio" value="6"/>&nbsp; 5+ &nbsp; 
        <br></br>
        <br></br> 
        
        <p>Have you ever been convicted of a felony?</p>
        <input type="radio"/> Yes <input type="radio"/> No 
        <br></br>
        <br></br>
        <p>Are you a veteran?</p>
        <input type="radio"/> Yes <input type="radio"/> No 
        <br></br>
        <br></br>
        <br></br>
        <div className="form-group">
        <label for="aboutme">Tell Us About Yourself!</label>
        <br></br>
        <textarea className="form-control" id="aboutme" rows="5"></textarea>
        <br></br>
        </div>
        



        <button className="btn btn-primary" type="submit" onClick={this.submission}>
          Create Account 
        </button>
      </form>




    </div>
  );
}}

export default CreateDeveloper;