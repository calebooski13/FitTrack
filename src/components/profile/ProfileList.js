import React, { Component } from "react";
//import the components we will need
import ProfileCard from "./ProfileCard";
import ProfileManager from "../../modules/ProfileManager";

class ProfileList extends Component {
  //define what this component needs to render
  state = {
    users: []
  };


  componentDidMount() {
    console.log("PROFILE LIST: ComponentDidMount");
    //getAll from ProfileManager and hang on to that data; put it in state
    ProfileManager.getAllProfile(localStorage.getItem("userId")).then(profileFromDatabase => {
      this.setState({
        profile: profileFromDatabase
      });
    });
  }

  render() {
    console.log("ProfileList: Render");

    return (
      <>
        <section className="section-content">
          <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/profile/new");
            }}
          >Create Profile</button>
        </section>

        <div className="container-cards">
                {this.state.users.map(singleProfile =>

                <ProfileCard key={singleProfile.id} profileProp={singleProfile}{...this.props} /> )}
            </div>
      </>
    );
  }
}
export default ProfileList;