import React from "react";
import { Link } from "react-router-dom";
import "./ProfilePage.css";
import jsLogo from "../../components/Images/jsImage.png";
import cssLogo from "../../components/Images/cssImage.png";
import reactLogo from "../../components/Images/reactImage.png";
import pythonLogo from "../../components/Images/pythonImage.png";

function ProfilePage() {
    return (
        <div className="container info-container">
            
            <div className="row">
                <div className="col-12 info-card">
                    <div class="card info-card">
                        <div class="card-body top-card-text-inside">
                            <h5 class="card-title name-display">Welcome Roman</h5>
                            <p class="card-text">Current progress: %100</p>
                            <p class="card-text">Email: </p>
                            <p class="card-text">Company Name: </p>
                        </div>
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-3">
                    <div class="card card-text-inside">
                        <img src={jsLogo} class="card-img-top card-logo-image" alt="..." />
                        <div class="card-body card-text-color">
                            <h5 class="card-title">JavaScript Test</h5>
                            <p class="card-text"><h2>Your Score</h2></p>
                            <h1><span class="badge badge-secondary">83</span></h1>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card card-text-inside">
                        <img src={cssLogo} class="card-img-top card-logo-image" alt="..." />
                        <div class="card-body card-text-color">
                            <h5 class="card-title">CSS Test</h5>
                            <p class="card-text"><h2>Your Score</h2></p>
                            <h1><span class="badge badge-secondary">82</span></h1>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card card-text-inside">
                        <img src={reactLogo} class="card-img-top card-logo-image" alt="..." />
                        <div class="card-body card-text-color">
                            <h5 class="card-title">CSS Test</h5>
                            <p class="card-text"><h2>Your Score</h2></p>
                            <h1><span class="badge badge-secondary">72</span></h1>
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div class="card card-text-inside">
                        <img src={pythonLogo} class="card-img-top card-logo-image" alt="..." />
                        <div class="card-body card-text-color">
                            <h5 class="card-title">Python Test</h5>
                            <p class="card-text"><h2>Your Score</h2></p>
                            <h1><span class="badge badge-secondary">52</span></h1>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ProfilePage;