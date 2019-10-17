import React, { Component } from 'react';
import MyWorkoutManager from '../../modules/MyWorkoutManager';
// import './MyWorkoutDetail.css'

class MyWorkoutDetail extends Component {

  state = {
      workouts: {},
      exerciseWorkouts: [],

  }

  componentDidMount(){
    console.log("MyWorkoutDetail: ComponentDidMount");
    //get(id) from MyWorkoutManager and hang on to the data; put it into state
    MyWorkoutManager.get(this.props.workoutId)
    .then((workoutObject) => {
      this.setState({
        workouts: workoutObject,
        exerciseWorkouts: workoutObject.exerciseWorkouts
      });
    });
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
            <h3>Name: <span style={{ color: 'darkslategrey' }}>{this.state.workout.name}</span></h3>
            <p>Sets: {this.state.exerciseWorkouts.sets}</p>
            <p>Reps: {this.state.exerciseWorkouts.reps}</p>
            <p>Weight: {this.state.exerciseWorkouts.weight}</p>
        </div>
      </div>
    );
  }
}

export default MyWorkoutDetail;