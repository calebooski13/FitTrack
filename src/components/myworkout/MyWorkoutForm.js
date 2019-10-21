import React, { Component } from "react";
import MyWorkoutManager from "../../modules/MyWorkoutManager";
// import "./MyWorkoutForm.css";

class MyWorkoutForm extends Component {
  state = {
    workoutName: "",
    date: "",
    loadingStatus: false,
  };

  handleFieldChange = evt => {
    console.log("this is event.target.id", evt.target.id);
    console.log("this is event.target.value", evt.target.value);
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*  Local method for validation, set loadingStatus, create workout object, invoke the MyWorkoutManager post method, and redirect to the full event list
   */
  constructNewEvent = evt => {
    evt.preventDefault();
    if (this.state.workoutName === "" || this.state.date === "") {
      window.alert("Please input a workout name, and then a date");
    } else {
      this.setState({ loadingStatus: true });
      const workout = {
        name: this.state.workoutName,
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
              <br></br>
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