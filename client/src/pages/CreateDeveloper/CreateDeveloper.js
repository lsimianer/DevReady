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


// lukas needs help
  

  submission = event => {
    event.preventDefault();
    if (this.state.name && this.state.email && this.state.password && this.state.aboutme && this.state.experience) {
      API.saveDevelopers({
        name: this.state.name,
        email: this.state.email,
        password: this.state.password,
        aboutMe: this.state.aboutMe,
        felony: this.state.felony,
        experience: this.state.experience,
        veteran: this.state.veteran,
        
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

  vet = event => {
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
    this.setState({felony : true})
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
          <label for="username">Name</label>
          <br></br>
        <input value={this.state.name}type="text/name" id="username"onChange={this.handleInputChange} className="form-control"placeholder="John Doe" name="developername"/> 
        </div>
        
        <div className="form-group">
        <label for="emailaccount">Email</label>
        <br></br>
        <input value={this.state.email}onChange={this.handleInputChange} type="text/email" className="form-control" id="emailaccount" placeholder="Newdev@greatdev.com" name="email"/>
        </div>
        <div className="form-group">
        <label for="password">Password</label>
        <br></br>
        <input value={this.state.password}onChange={this.handleInputChange}type="text/password" className="form-control" id="password" placeholder="Password" name="password"/>
        <br></br>
        </div>
        <p>How many years of experience do you have?</p>
        <input type="number" value={this.state.experience} onChange={this.handleInputChange} name="experience"/>
        <br></br>
        <br></br> 
        
        <p>Have you ever been convicted of a felony?</p>
        <input type="radio" onClick={this.felon} name="felony"/> Yes <input type="radio"onClick={this.felonF} name="felony"/> No 
        <br></br>
        <br></br>
        <p>Are you a veteran?</p>
        <input type="radio" onClick={this.vet} name="veteran"/> Yes <input type="radio"onClick={this.vetF} name="veteran"/> No 
        <br></br>
        <br></br>
        <br></br>

        <div className="form-group">
          <label for="referredby">If referred by a Company who sent you?</label> 
          <select class="form-control" id="referredby" value={this.companyName} onChange={this.handleInputChange} name="companyname">
      <option>Apple</option>
      <option>Microsoft</option>
      <option>Walmart</option>
      <option>Capital One</option>
      <option>Chase</option>
          </select>
        </div>
        <br></br>
        
        <div className="form-group">
        <label for="aboutme">Tell Us About Yourself!</label>
        <br></br>
        <textarea className="form-control" id="aboutme" rows="5" value={this.state.aboutMe} onChange={this.handleInputChange} name="aboutme"></textarea>
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