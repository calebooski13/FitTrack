import React, { Component } from "react";
import MyWorkoutManager from "../../modules/MyWorkoutManager";
// import "./MyWorkoutForm.css";

class MyWorkoutForm extends Component {
  state = {
    workoutName: "",
    sets: "",
    reps: "",
    weight: "",
    date: "",
    loadingStatus: false
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create workout object, invoke the MyWorkoutManager post method, and redirect to the full event list
   */
  constructNewEvent = evt => {
    evt.preventDefault();
    if (this.state.workoutName === "" || this.state.sets === "" || this.state.reps === "" || this.state.weight === "") {
      window.alert("Please input a workout name, amount of sets, reps, weight and then a date");
    } else {
      this.setState({ loadingStatus: true });
      const workout = {
        name: this.state.workoutName,
        sets: this.state.sets,
        reps: this.state.reps,
        weight: this.state.weight,
        date: this.state.date,
        active: true,
        userId: 1
      };

      // Create the workout and redirect user to workout list
      MyWorkoutManager.post(workout).then(() =>
        this.props.history.push("/workouts")
      );
    }
  };

  render() {
    return (
      <>
        <form>
          <fieldset>
            <div className="formgrid">
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="workoutName"
                placeholder="Workout name"
              />
              <label htmlFor="workoutName">Name</label>
              <input
                type="number"
                name="quantity"
                min="1" max="5"
                required
                onChange={this.handleFieldChange}
                id="sets"
                placeholder="Sets"
              />
              <label htmlFor="sets">Sets</label>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="reps"
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
              <input
                type="date"
                required
                onChange={this.handleFieldChange}
                id="date"
                placeholder="Workout date"
              />
              <label htmlFor="date">Date</label>
            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.constructNewEvent}
              >
                Submit
              </button>
            </div>
          </fieldset>
        </form>
      </>
    );
  }
}

export default MyWorkoutForm;