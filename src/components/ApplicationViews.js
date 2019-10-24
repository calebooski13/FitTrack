import { Route, withRouter, Redirect } from "react-router-dom";
import React, { Component } from "react";
import Login from "./authenticate/Login";
import Home from "./home/Home";
import Register from "./register/Register";
import MyWorkoutList from "./myworkout/MyWorkoutList";
import MyWorkoutForm from "./myworkout/MyWorkoutForm";
import MyWorkoutDetail from "./myworkout/MyWorkoutDetail";
import MyWorkoutCreateDetailsForm from "./myworkout/MyWorkoutCreateDetailsForm";
import ProfileList from "./profile/ProfileList";
import ProfileForm from "./profile/ProfileForm";
import ProfileEditForm from "./profile/ProfileEditForm";

class ApplicationViews extends Component {

// component for routing each link in the nav bar to a certain page of the application
    // Check if credentials are in local storage
    // returns true/false
    credentialAuth = () => localStorage.getItem("userId") !== null;


    render() {
      return (
        <React.Fragment>

            {/* ____________HOME____________ */}
          <Route
            exact
            path="/home"
            render={props => {
              if (this.credentialAuth()) {
                return <Home {...props} />;
              } else {
                return <Redirect to="/" />;
              }
            }}
          />

            {/* ______________LOGIN and REGISTER */}
        <Route
          exact
          path="/"
          render={props => {
            return <Login {...props} />;
          }}
        />
        <Route
          exact
          path="/register"
          render={props => {
            return <Register {...props} />;
          }}
        />
            {/* ___________________PROFILE_________________ */}

            <Route
          exact
          path="/users"
          render={props => {
            return this.credentialAuth() ? (
              <ProfileList {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
            <Route
          path="/users/new"
          render={props => {
            return this.credentialAuth() ? (
              <ProfileForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
            <Route
          path="/users/:newId(\d+)/edit"
          render={props => {
            return this.credentialAuth() ? (
              <ProfileEditForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />

            {/* __________________MY WORKOUTS______________ */}

          <Route
          exact
          path="/myworkouts"
          render={props => {
            return this.credentialAuth() ? (
              <MyWorkoutList {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/myworkouts/new"
          render={props => {
            return this.credentialAuth() ? (
              <MyWorkoutForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/workouts/:workoutId"
          render={props => {
            return this.credentialAuth() ? (
              <MyWorkoutDetail {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        />
        <Route
          path="/workouts/:workoutId"
          render={props => {
            return this.credentialAuth() ? (
              <MyWorkoutCreateDetailsForm {...props} />
            ) : (
              <Redirect to="workouts/" />
            );
          }}
        />
        {/* <Route
          path="/myworkout/:workoutId(\d+)/edit"
          render={props => {
            return this.credentialAuth() ? (
              <MyWorkoutEditForm {...props} />
            ) : (
              <Redirect to="/" />
            );
          }}
        /> */}
          </React.Fragment>
    );
  }
}

export default ApplicationViews;