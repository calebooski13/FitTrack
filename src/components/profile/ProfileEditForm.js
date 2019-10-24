import React, { Component } from "react";
import ProfileManager from "../../modules/ProfileManager";
// import "./AnimalForm.css"

class ProfileEditForm extends Component {
  //set the initial state
  state = {
    email: "",
    password: "",
    username: "",
    profileName: "",
    age: "",
    weight: "",
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingProfile = evt => {
    evt.preventDefault();
    this.setState({ loadingStatus: true });
    const editedProfile = {

      email: this.state.email,
      username:this.state.username,
      password: this.state.password,
      id: this.props.match.params.newId,
      name: this.state.profileName,
      age: this.state.age,
      weight: this.state.weight,
    };
console.log(editedProfile)
    ProfileManager.update(editedProfile).then(() =>
      this.props.history.push("/users")
    );
  };

  componentDidMount() {
    ProfileManager.getOneProfile(this.props.match.params.newId)
    .then(user => {
        console.log(user)
        this.setState({
          email: user.email,
          password: user.password,
          username: user.username,
          profileName: user.name,
          age: user.age,
          weight: user.weight,
          active: true,
        });
    });
  }

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
                id="username"
                value={this.state.username}
              />
              <label htmlFor="username">Username</label>
              <br></br>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="password"
                value={this.state.password}
              />
              <label htmlFor="password">Password</label>
              <br></br>
            <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="email"
                value={this.state.email}
              />
              <label htmlFor="email">Email</label>
              <br></br>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="profileName"
                value={this.state.profileName}
              />
              <label htmlFor="profileName">Name</label>
              <br></br>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="age"
                placeholder="Age"
                value={this.state.age}
              />
              <label htmlFor="age">Age</label>
              <br></br>
              <input
                type="text"
                required
                onChange={this.handleFieldChange}
                id="weight"
                placeholder="Weight"
                value={this.state.weight}
              />
              <label htmlFor="weight">Weight</label>

            </div>
            <div className="alignRight">
              <button
                type="button"
                disabled={this.state.loadingStatus}
                onClick={this.updateExistingProfile}
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

  export default ProfileEditForm;