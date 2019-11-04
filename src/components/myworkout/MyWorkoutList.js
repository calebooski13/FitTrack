import React, { Component } from "react";
import MyWorkoutCard from "./MyWorkoutCard";
import MyWorkoutManager from "../../modules/MyWorkoutManager";

class MyWorkoutList extends Component {
  //define what this component needs to render
  state = {
    workouts: []
  };

  deleteWorkout = id => {
    MyWorkoutManager.delete(id).then(() => {
      MyWorkoutManager.getAll().then(newWorkouts => {
        this.setState({
          workouts: newWorkouts
        });
      });
    });
  };

  componentDidMount() {
    //getAll from MyWorkoutManager and hang on to that data; put it in state
    MyWorkoutManager.getAll(localStorage.getItem("userId")).then(workoutsFromDatabase => {
      this.setState({
        workouts: workoutsFromDatabase
      });
    });
  }

  render() {

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/myworkouts/new");
            }}
          >Create Workout</button>
        </section>

        <div className="container-cards">
                {this.state.workouts.map(singleWorkout =>

                <MyWorkoutCard key={singleWorkout.id} workoutProp={singleWorkout} deleteWorkout={this.deleteWorkout} {...this.props} /> )}
            </div>
      </>
    );
  }
}
export default MyWorkoutList;