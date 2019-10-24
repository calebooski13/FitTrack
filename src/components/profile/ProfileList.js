import React, { Component } from "react";
//import the components we will need
import ProfileCard from "./ProfileCard";
import ProfileManager from "../../modules/ProfileManager";

class ProfileList extends Component {
  //define what this component needs to render
  state = {
    users: {}
  };


  componentDidMount() {
    console.log("PROFILE LIST: ComponentDidMount");
    //getAll from ProfileManager and hang on to that data; put it in state
    ProfileManager.getOneProfile(localStorage.getItem("userId")).then(profileFromDatabase => {
      this.setState({
        users: profileFromDatabase
      });
    });
  }

  render() {
    console.log("ProfileList: Render");

    return (
      <>
        <section className="section-content">
          {/* <button
            type="button"
            className="btn"
            onClick={() => {
              this.props.history.push("/users/new");
            }}
          >Create Profile</button> */}
        </section>

        <div className="container-cards">
                <ProfileCard key={this.state.users.id} profileProp={this.state.users}{...this.props} />
            </div>
      </>
    );
  }
}
export default ProfileList;