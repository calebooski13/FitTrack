import React, { Component } from 'react';

class ProfileCard extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-content">
          <h3>Name: <b>{this.props.profileProp.name}</b></h3>
          <p>Date: {this.props.profleProp.age}</p>
        <p>Weight: {this.props.profileProp.weight}</p>

          <button type="button"
        onClick={() => {this.props.history.push(`/profile/${this.props.profileProp.id}/edit`)}}>Edit</button>


        </div>
      </div>
    );
  }
}

export default ProfileCard;