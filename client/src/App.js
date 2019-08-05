import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/log in page/Landing";
import CreateDeveloper from "./pages/CreateDeveloper/CreateDeveloper";
import CreateRecruiter from "./pages/CreateRecruiter/CreateRecruiter";
import Home from "./pages/Home";
import TestSelector from "./pages/TestSelector";
import TestActual from "./pages/TestActual";
import JobsView from "./pages/JobsView";
import JobsPost from "./pages/JobsPost";
import ViewDevs from "./pages/ViewDevelopers/ViewDevs";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Logo from "./components/Images/ab_ReadyDev-02.png"

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/createDeveloper" component={CreateDeveloper} />
          <Route exact path="/createRecruiter" component={CreateRecruiter} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/testSelector" component={TestSelector} />
          <Route exact path="/tests/:id" component={TestActual} />
          <Route exact path="/jobsView" component={JobsView} />
          {/* employer acces only  maybe add test create */}
          <Route exact path="/jobsPost" component={JobsPost} /> 
          <Route exact path="/viewDevs" component={ViewDevs} /> 
          {/* 404 page */}
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
