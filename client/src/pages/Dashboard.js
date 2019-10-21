import React, { Component, Fragment } from 'react';
import { Header, Footer } from '../components/Layouts';
import Habits from '../components/Habits';
import { frequency, habits } from '../store'

class Dashboard extends Component {
  state = {
    habits,
    habit: {}
  }

  getHabitByFrequency() {
    return Object.entries(
      this.state.habits.reduce((habits, habit) => {
        const { frequency } = habit
        habits[frequency] = habits[frequency]
        ? [...habits[frequency], habit]
        : [habit]
        return habits
      }, {})
    )
  }

  handleCategorySelected = category => {
    this.setState({
      category
    })
  }

  handleHabitSelected = id => {
    this.setState(({ habits }) => ({
      habit: habits.find(ex => ex.id === id)
    }))
  }

  render() {
    const habits = this.getHabitByFrequency(),
    { category, habit } = this.state
    return <Fragment>
        <Header />
        <Habits
        habit={habit}
        category={category}
        habits={habits}
        onSelect={this.handleHabitSelected}
        />
        <Footer
          category={category}
          frequency={frequency}
          onSelect={this.handleCategorySelected}
        />
      </Fragment>
   }
  }


export default Dashboard;