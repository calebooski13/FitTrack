import React, { Component } from "react";
import MyWorkoutManager from "../../modules/MyWorkoutManager";
// import './MyWorkoutDetail.css'

class MyWorkoutDetail extends Component {
  state = {
    workouts: []
  };

  componentDidMount() {
    console.log("MyWorkoutDetail: ComponentDidMount");
    //get(id) from MyWorkoutManager and hang on to the data; put it into state
    MyWorkoutManager.getAllExercises(this.props.match.params.workoutId).then(
      workoutObject => {
        this.setState({
          workouts: workoutObject
        });
      }
    );
  }

  render() {
    return (
      <div className="card">
        <div className="card-content">
          {this.state.workouts.map(exercise => (
            <>
              <h3>
                Name:{" "}
                <span style={{ color: "darkslategrey" }}>
                  {exercise.exercise.name}
                </span>
              </h3>
              <p>{exercise.exercise.url}</p>
              <p>Sets: {exercise.sets}</p>
              <p>Reps: {exercise.reps}</p>
              <p>Weight: {exercise.weight}</p>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default MyWorkoutDetail;
