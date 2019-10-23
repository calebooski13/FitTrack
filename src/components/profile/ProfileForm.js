import React, { Component } from "react";
import ProfileManager from "../../modules/ProfileManager";


class ProfileForm extends Component {
    state = {
      profileName: "",
      age: "",
      weight: "",
    };

    handleFieldChange = evnt => {
        console.log("this is event.target.id", evnt.target.id);
        console.log("this is event.target.value", evnt.target.value);
        const profileStateToChange = {};
        profileStateToChange[evnt.target.id] = evnt.target.value;
        this.setState(profileStateToChange);
      };

      constructNewProfileEvent = evnt => {
        evnt.preventDefault();
        if (this.state.profileName === "" || this.state.age === ""|| this.state.weight === "") {
          window.alert("Please input profile information");
        } else {
          this.setState({ loadingStatus: true });
          const profile = {
            name: this.state.profileName,
            age: this.state.age,
            weight: this.state.weight,
            active: true,
            userId: 1
          };

          // Create the workout and redirect user to workout list
      ProfileManager.post(profile).then(() =>
      this.props.history.push("/profile")
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
              id="profileName"
              placeholder="First and Last name"
            />
            <label htmlFor="profileName">Name</label>
            <br></br>
            <input
              type="text"
              required
              onChange={this.handleFieldChange}
              id="age"
              placeholder="Age"
            />
            <label htmlFor="age">Age</label>
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

export default ProfileForm;