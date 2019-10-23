import React, { Component } from "react";
import MyWorkoutManager from "../../modules/MyWorkoutManager";
import MyWorkoutCreateDetailsForm from "./MyWorkoutCreateDetailsForm"
// import './MyWorkoutDetail.css'

class MyWorkoutDetail extends Component {
  state = {
    workouts: []
  };

  handleDelete = () => {
    console.log("this is props", this.props)
    //invoke the delete function in MyWorkoutManger and re-direct to the workout list.
    this.setState({loadingStatus: true})
    MyWorkoutManager.delete(this.props.workoutId)
    .then(() => this.props.history.push("/workouts"))
}

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
        <button
            className="back button"
            onClick={this.navigateBack}>
            Back to workouts
        </button>
      </div>
    );
  }
}

export default MyWorkoutDetail;
