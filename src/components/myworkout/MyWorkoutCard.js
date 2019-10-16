import React, { Component } from 'react';

class MyWorkoutCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
        {/* <picture>
            <img src={require('./event.png')} alt="Event" />
          </picture> */}
          <h3>Name: <b>{this.props.workoutProp.userId}</b></h3>
          <p>Location: {this.props.workoutProp.date}</p>

          <button type="button"
        onClick={() => {this.props.history.push(`/workouts/${this.props.workoutProp.id}/edit`)}}>Edit</button>
        <button type="button" onClick={() => this.props.deleteWorkout(this.props.workoutProp.id)}>Delete</button>

        </div>
      </div>
    );
  }
}

export default MyWorkoutCard;