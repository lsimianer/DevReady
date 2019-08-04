import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import CreateDeveloper from "./pages/CreateDeveloper";
import CreateRecruiter from "./pages/CreateRecruiter";
import Home from "./pages/Home";
import TestSelector from "./pages/TestSelector";
import TestActual from "./pages/TestActual";
import JobsView from "./pages/JobsView";
import JobsPost from "./pages/JobsPost";
import ViewDevs from "./pages/ViewDevs";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/createUser" component={CreateDeveloper} />
          <Route exact path="/createEmp" component={CreateRecruiter} />
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
