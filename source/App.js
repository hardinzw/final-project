import React, { Component } from 'react';
import './App.css';

/*Styles*/

/*Actions*/

/*My Components*/
import NavBar from './components/NavBar';
import LoggedHabits from './components/LoggedHabits';
import HabitTrends from './components/HabitTrends';
import RecommendedHabits from './components/RecommendedHabits';
import CalendarTracker from './components/CalendarTracker';

class App extends Component {


componentDidMount() {
  console.log("component successfully created")
}

render() {
  return (
    <div>
      <NavBar />
      <LoggedHabits />
      <HabitTrends />
      <RecommendedHabits />
      <CalendarTracker />
    </div>
  );
 }
}


export default App;
