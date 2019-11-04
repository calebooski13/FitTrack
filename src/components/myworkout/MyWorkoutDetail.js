import React, { Component } from "react";
import MyWorkoutManager from "../../modules/MyWorkoutManager";


class MyWorkoutDetail extends Component {
  state = {
    workouts: []
  };

  handleDelete = () => {
    //invoke the delete function in MyWorkoutManger and re-direct to the workout list.
    this.setState({loadingStatus: true})
    MyWorkoutManager.delete(this.props.workoutId)
    .then(() => this.props.history.push("/workouts"))
}

  componentDidMount() {
    //get(id) from MyWorkoutManager and hang on to the data; put it into state
    MyWorkoutManager.getAllExercises(this.props.match.params.workoutId).then(
      workoutObject => {
        this.setState({
          workouts: workoutObject
        });
      }
    );
  }

// display the details of the workouts

  render() {
    return (
      <div className="card">
        <div className="card-content">
          {this.state.workouts.map(exercise => (
            <>
              <h3>
                Name:{" "}
                <span style={{ color: "white" }}>
                  {exercise.exercise.name}
                </span>
              </h3>
              <p><a href={exercise.exercise.url} target="_blank">How to video</a></p>
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
