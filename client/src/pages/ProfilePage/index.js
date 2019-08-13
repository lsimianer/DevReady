import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import jsLogo from "../../components/Images/jsImage.png";
import cssLogo from "../../components/Images/cssImage.png";
import reactLogo from "../../components/Images/reactImage.png";
import pythonLogo from "../../components/Images/pythonImage.png";

class ProfilePage extends Component {

    state = {
        developers : []
    }

    render(){
    return (
        <div className="container info-container">
            
            <div className="row">
                <div className="col-12 info-card">
                    <div className="card info-card">
                        <div className="card-body top-card-text-inside">
                            <h5 className="card-title name-display">Welcome Roman</h5>
                            <p className="card-text">Current progress: %100</p>
                            <p className="card-text">Email: </p>
                            <p className="card-text">Company Name: </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-3">
                    <div className="card card-text-inside">
                        <img src={jsLogo} className="card-img-top card-logo-image" alt="..." />
                        <div className="card-body card-text-color">
                            <h5 className="card-title">JavaScript Test</h5>
                            <p className="card-text"><h2>Your Score</h2></p>
                            <h1><span className="badge badge-secondary">83</span></h1>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card card-text-inside">
                        <img src={cssLogo} className="card-img-top card-logo-image" alt="..." />
                        <div className="card-body card-text-color">
                            <h5 className="card-title">CSS Test</h5>
                            <p className="card-text"><h2>Your Score</h2></p>
                            <h1><span className="badge badge-secondary">82</span></h1>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card card-text-inside">
                        <img src={reactLogo} className="card-img-top card-logo-image" alt="..." />
                        <div className="card-body card-text-color">
                            <h5 className="card-title">CSS Test</h5>
                            <p className="card-text"><h2>Your Score</h2></p>
                            <h1><span className="badge badge-secondary">72</span></h1>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="card card-text-inside">
                        <img src={pythonLogo} className="card-img-top card-logo-image" alt="..." />
                        <div className="card-body card-text-color">
                            <h5 className="card-title">Python Test</h5>
                            <p className="card-text"><h2>Your Score</h2></p>
                            <h1><span className="badge badge-secondary">52</span></h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}}

export default ProfilePage;