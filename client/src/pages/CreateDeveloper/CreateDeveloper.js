import React, {Component} from "react";
// import API from "../pages/src/utils/API";
import API from "../../utils/API.js";
import "./createdev.css"

class CreateDeveloper extends Component {

  state = {
    developername: "",
    email:"",
    password:"",
    felony: false,
    veteran: false,
    aboutMe:"",
    experience: 0,
    companyName:"",
   
  };



  

  submission = event => {
    event.preventDefault();
    console.log(this.state);
    const developerData = {
      developername: this.state.developername,
      email: this.state.email,
      password: this.state.password,
      aboutMe: this.state.aboutMe,
      felony: this.state.felony,
      experience: this.state.experience,
      veteran: this.state.veteran,
      companyName: this.state.companyName
    }
    console.log(developerData);
    if (this.state.developername && this.state.email && this.state.password) {
      console.log("SENDING");
      API.saveDevelopers(developerData).then(response => {
        console.log(response)
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

  vet= event => {
    this.setState({veteran: true})
  };

  vetF = event => {
    this.setState({veteran: false})
  };

  // exp = event => {
  //   this.setState({experience : value})
  // };

  felon = event => {
    this.setState({felony : true})
    
  };

  felonF = event => {
    this.setState({felony : false})
  };






  render() {
  
  return (
    <div>
    <div className="create">
      <div className="jumbotron">
      <h1>Create Developer Account</h1>
      <h3>
        Sign Up and Start Taking Tests!
      </h3>
      </div>
      
      

      <form>
        <div className="form-group">
          <label htmlFor="username">Name</label>
          <br></br>
        <input value={this.state.developername}type="text/name" id="username"onChange={this.handleInputChange} className="form-control"placeholder="John Doe" name="developername"/> 
        </div>
        
        <div className="form-group">
        <label htmlFor="emailaccount">Email</label>
        <br></br>
        <input value={this.state.email}onChange={this.handleInputChange} type="text/email" className="form-control" id="emailaccount" placeholder="Newdev@greatdev.com" name="email"/>
        </div>
        <div className="form-group">
        <label htmlFor="password">Password</label>
        <br></br>
        <input value={this.state.password}onChange={this.handleInputChange}type="text/password" className="form-control" id="password" placeholder="Password" name="password"/>
        <br></br>
        </div>
        <p>How many years of experience do you have?</p>
        <input type="number" value={this.state.experience} onChange={this.handleInputChange} name="experience"/>
        <br></br>
        <br></br> 
        
        <p>Have you ever been convicted of a felony?</p>
        <input type="radio" value={this.state.felony} onClick={this.felon} name="felony" value="true" checked={this.state.felony ? "checked" : ""} /> Yes 
        <input value="false" type="radio" value={this.state.felony} onClick={this.felonF} name="felony" checked={this.state.felony ? "" : "checked"} /> No 
        <br></br>
        <br></br>
        <p>Are you a veteran?</p>
        <input type="radio" value={this.state.veteran} value="true" onClick={this.vet} name="veteran" checked={this.state.veteran ? "checked" : ""}/> Yes <input type="radio" value={this.state.veteran} onClick={this.vetF} checked={this.state.veteran ? "" : "checked"} name="veteran" value="false"/> No 
        <br></br>
        <br></br>
        <br></br>

        <div className="form-group">
          <label htmlFor="referredby">If referred by a Company who sent you?</label> 
          <select className="form-control" id="referredby" value={this.companyName} onChange={this.handleInputChange} name="companyname">
      <option>Apple</option>
      <option>Microsoft</option>
      <option>Walmart</option>
      <option>Capital One</option>
      <option>Chase</option>
          </select>
        </div>
        <br></br>
        
        <div className="form-group">
        <label htmlFor="aboutme">Tell Us About Yourself!</label>
        <br></br>
        <textarea className="form-control" id="aboutme" rows="5" value={this.state.aboutMe} onChange={this.handleInputChange} name="aboutMe"></textarea>
        <br></br>
        </div>
        



        <button className="btn btn-primary" type="submit" onClick={this.submission}>
          Create Account 
        </button>
      </form>




    </div>
    </div>
  );
}}

export default CreateDeveloper;