import React, {Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from './components/Navbar';
import MoviesPage from './pages/MoviesPage';
import TvPage from './pages/TvPage';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

class App extends Component {

  render(){
    return (
      <Router>
        <div className='main-container'>
        <Navbar/>
          <Switch>
            <Route exact path="/" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/movies" component={MoviesPage} />
            <Route exact path="/tv" component={TvPage} />
          </Switch>
        </div>
      </Router>
      )
    }
};

export default App;
