import React, { Component } from 'react'
// creating component for the home page layout.
class Home extends Component {

handleLogout = () => {
    window.localStorage.clear()
    this.props.history.push("/")

}


    render() {
        //fetching credentials from api and importing login card from login.js
        return (
            <section>

                <h1 className="home-fitTrack-title">Welcome To FitTrack!</h1><br />

                <div id="login-card">
                <button type="logout" className="logout-btn" onClick={this.handleLogout}>Log Out</button>
                </div>
            </section>
        )
    }
}

export default Home;