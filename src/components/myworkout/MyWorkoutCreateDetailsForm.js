import React, { Component } from "react";
import ExerciseWorkoutManager from "../../modules/ExerciseWorkoutManager"

class MyWorkoutCreateDetailsForm extends Component {
  state = {
    exercises: [],
    exerciseId: "",
    workoutId: "",
    sets: "",
    reps: "",
    weight: "",
    loadingStatus: false,
  };

componentDidMount() {
    //getAll from MyWorkoutManager and hang on to that data; put it in state
    ExerciseWorkoutManager.getAllThemExercises(localStorage.getItem("exerciseId")).then(exercisesFromDatabase => {
      this.setState({
        exercises: exercisesFromDatabase
      });
    });
  }

handleFieldChange = evt => {
  const stateToChange = {};
  stateToChange[evt.target.id] = evt.target.value;
  this.setState(stateToChange);
};

// Create the details of a workout

constructNewExerciseEvent = evt => {
  evt.preventDefault();
  if (this.state.sets === "" || this.state.reps === "" || this.state.weight === "") {
    window.alert("Please input your planned sets, reps, weight, and exercise");
  } else {
    this.setState({ loadingStatus: true });
    const workoutDetails = {
      sets: this.state.sets,
      reps: this.state.reps,
      weight: this.state.weight,
      exerciseId: +this.state.exerciseId,
      workoutId: +this.props.match.params.workoutId,

      active: true,
    };

    // Create the workout and redirect user to workout list
    ExerciseWorkoutManager.post(workoutDetails).then(() =>
      this.props.history.push("/myworkouts")
    );
  }
};

render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">

            <select
                className="form-control"
                id="exerciseId"
                value={this.state.exerciseId}
                onChange={this.handleFieldChange}
              >
                {this.state.exercises.map(exercise => (
                  <option key={exercise.id} value={exercise.id}>
                    {exercise.name}
                  </option>
                ))}
              </select>
              <label htmlFor="exercise">Exercise</label>

<br></br>
              <input
                type="number"
                required
                onChange={this.handleFieldChange}
                id="sets"
                name="quantity" min="1" max="10"
                placeholder="Sets"
              />
              <label htmlFor="sets">Sets</label>

              <input
                type="number"
                required
                onChange={this.handleFieldChange}
                id="reps"
                name="quantity" min="1" max="25"
                placeholder="Reps"
              />
              <label htmlFor="reps">Reps</label>

              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="weight"
                placeholder="Weight"
              />
              <label htmlFor="weight">Weight</label>


            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewExerciseEvent}
              >
                Save
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default MyWorkoutCreateDetailsForm