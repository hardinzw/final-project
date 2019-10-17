import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import React from "react";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
