import React, { Component } from 'react'
import NavBar from "./nav/NavBar"
import ApplicationViews from "./ApplicationViews"
// import './FitTrack.css'

class FitTrack extends Component {
    render() {
        return (
		<>
			<NavBar />
			<ApplicationViews />
		</>

        );
    }
}
export default FitTrack