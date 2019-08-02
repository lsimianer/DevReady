import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import landing from "./pages/Landing";
import CreateUser from "./pages/CreateUser";
import landing from "./pages/Landing";
import landing from "./pages/Landing";
import landing from "./pages/Landing";
import landing from "./pages/Landing";
import landing from "./pages/Landing";
import landing from "./pages/Landing";


import Detail from "./pages/TestActual";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/createUser" component={CreateUser} />
          <Route exact path="/createEmp" component={CreateEmp} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/testSelector" component={TestSelector} />
          <Route exact path="/tests/:id" component={TestActual} />
          <Route exact path="/jobsView" component={JobsView} />
          {/* employer acces only  maybe add test create */}
          <Route exact path="/jobsPost" component={JobsPost} /> 
          <Route exact path="/viewDevs" component={ViewDevs} /> 

          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
