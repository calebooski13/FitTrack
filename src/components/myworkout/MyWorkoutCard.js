import React, { Component } from 'react';
import { Link } from "react-router-dom";

class MyWorkoutCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        {/* <picture>
            <img src={require('./event.png')} alt="Event" />
          </picture> */}
          <h3>Name: <b>{this.props.workoutProp.name}</b></h3>
          <p>Date: {this.props.workoutProp.date}</p>

          <Link to={`/workouts/${this.props.workoutProp.id}`}><button>Details</button></Link>
        <button type="button" onClick={() => this.props.deleteWorkout(this.props.workoutProp.id)}>Delete</button>

        </div>
      </div>
    );
  }
}

export default MyWorkoutCard;