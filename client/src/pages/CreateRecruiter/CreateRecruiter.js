import React, {Component} from "react";
import API from "../../utils/API.js"

class CreateRecruiter extends Component {
      state= {
        name: "",
        company:"",
        email:"",
        password:""
      }

      submission = event => {
        event.preventDefault();
        if (this.state.name && this.state.email && this.state.password) {
          API.saveRecruiters({
            name: this.state.name,
            email: this.state.email,
            company: this.state.company,
            password: this.state.password
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







      render(){

  return (
    <div>
      <div className="jumbotron">
      <h1>Create Recruiter Account</h1>
      </div>
      <form>
        <div className="form-group">
          <label for="username">Name</label>
          <br></br>
        <input type="text/name" id="username" className="form-control"placeholder="John Doe" onChange={this.handleInputChange} value={this.state.name}/> 
        </div>
        <div className="form-group">
          <label for="companyname">Company Name</label>
          <br></br>
        <input type="text/name" id="companyname" className="form-control"placeholder="Cool Startup"onChange={this.handleInputChange} value={this.state.company}/> 
        </div>
        
        <div className="form-group">
        <label for="emailaccount">Email</label>
        <br></br>
        <input type="text/email" className="form-control" id="emailaccount" placeholder="Newdev@greatdev.com" onChange={this.handleInputChange} value={this.state.email}/>
        </div>
        <div className="form-group">
        <label for="password">Password</label>
        <br></br>
        <input type="text/password" className="form-control" id="password" placeholder="Password" onChange={this.handleInputChange} value={this.state.password}/>
        <br></br>
        </div>
        <button className="btn btn-primary" type="submit" onClick={this.submission}>
          Create Account 
        </button>
      </form>
    </div>
  );
}}

export default CreateRecruiter;