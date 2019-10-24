import React, { Component } from 'react';
import './ProfileCard.css'

class ProfileCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <b>{this.props.profileProp.name}</b></h3>
          <p>Age: {this.props.profileProp.age}</p>
        <p>Weight: {this.props.profileProp.weight}</p>
        <p>Email: {this.props.profileProp.email} </p>

          <button type="button"
        onClick={() => {this.props.history.push(`/users/${this.props.profileProp.id}/edit`)}}>Update</button>


        </div>
      </div>
    );
  }
}

export default ProfileCard;