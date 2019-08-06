import React from "react";
import "../log in page/logIn.css"
import axios from 'axios'
class App extends React.Component {
  state = {
    email:'test@test.com',
    password:'testtest',
    welcomeEmail: "",
    googleSigninUrl: ""
  }

  handleInput = event => {
    const {name,value} = event.target
    this.setState({
      [name]: value
    })
  }

  // let's try and login

  handleFormSubmit = event => {
    event.preventDefault()
    const {email,password} = this.state
    axios.post("/api/login", {email, password})
      .then(result => {
        console.log(result.data)
        this.loadProfileInfo()
      })
  }
  handleFormLogout = event => {
    event.preventDefault()
    axios.get("/api/logout")
      .then(result => {
        console.log(result.data)
        this.setState({ welcomeEmail: ""})
      })
  }

  loadProfileInfo = () => {
    axios.get('/api/user/me')
      .then(response => {
        this.setState({welcomeEmail: response.data.email})
      })
      .catch(err => {
        axios.get("/api/google/url").then(response => {
          this.setState({googleSigninUrl: response.data.url})
        })
      })
  }

  componentDidMount(){
    // Mostly just for developing locally
    if(window.location.pathname === "/api/google/callback"){
      const searchParams = new URLSearchParams(window.location.search);
      axios.post("/api/google/code", {code: searchParams.get('code')}).then(() => {
        window.location.href = "/"
      })
    } else {
      this.loadProfileInfo()
    }
  }
  render(){
  // return (
  //   <div>
  //     <h1 id="landingHeader">Welcome to ReadyDev</h1>
  //     <h4 id="landingSubHeader">Get Ready, Stay Ready</h4>
  //     <br/>
  //     <div className="container">
  //       <form id="logInForm">
  //         <div className="form-group">
  //           <label for="emailaccount">Name</label>
  //           <br></br>
  //           <input type="name" className="form-control" id="name" name="name" placeholder="Jane Dev"/>
  //         </div>
  //         <div className="form-group">
  //           <label for="emailaccount">Email</label>
  //           <br></br>
  //           <input type="text/email" className="form-control" id="emailaccount" name="email" placeholder="Newdev@greatdev.com"/>
  //         </div>
  //         <div className="form-group">
  //           <label for="password">Password</label>
  //           <br></br>
  //           <input type="text/password" className="form-control" id="password" name="password" placeholder="Password"/>
  //           <br></br>
  //         </div>
  //         <button id="logIn" className="btn btn-primary" type="submit">LogIn</button>
  //         <button id="createAcct" className="btn btn-primary" type="submit">Register</button>
  //       </form>
  //     </div> 

  return (
    <div>
      <h1>{this.state.welcomeEmail.length > 0 
        ? "Welcome " + this.state.welcomeEmail
        : "Login"}</h1>
        {
          this.state.googleSigninUrl.length > 0 && this.state.welcomeEmail.length === 0
          ? (<h3>Sign in with <a href={this.state.googleSigninUrl} >google </a></h3>)
          : ""
        }
      <form>
        <input onChange={this.handleInput} name="email" value={this.state.email} type="text"/>
        <input onChange={this.handleInput} name="password" value={this.state.email} type="password"/>
        <button onClick={this.handleFormSubmit}>Login</button>
        <button onClick={this.handleFormLogout}>Logout</button>
      </form>
      <div className="Logo"></div>      
    </div>
    );
  }
}
  
export default Landing;