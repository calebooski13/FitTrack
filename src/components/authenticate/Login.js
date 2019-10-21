import React, { Component } from 'react'
import LoginManager from '../../modules/LoginManager'
import { Link } from "react-router-dom";
// creating component to display login form and validate credentials
class Login extends Component {
    // set state
    state = {
        username: "",
        password: ""
    }

    // method to handle changing of input field
    handleFieldChange = (event) => {
        const stateChange = {}
        stateChange[event.target.id] = event.target.value
        this.setState(stateChange)
    }
    // method for handling login event
    handleLogin = (event) => {
        event.preventDefault()
        // const passAuth = users.password.value
        LoginManager.getOneUser(this.state.username).then(users => {
            console.log(users)
            if (this.state.password === users[0].password) {
                localStorage.setItem("userId", users[0].id)
                this.props.history.push("/home");
            } else {
                alert("Invalid Password")
            }
        })

    }
    render() {
        return (
            <form onSubmit={this.handleLogin}>
                <fieldset>
                    <h3>Sign In</h3>
                    <div className="xxxxx">
                        <label htmlFor="inputUsername">Username</label>
                        <input onChange={this.handleFieldChange} type="username"
                            id="username"
                            placeholder="Username"
                            required=""
                            autoFocus="" />
                        <label htmlFor="inputPassword">Password</label>
                        <input onChange={this.handleFieldChange} type="password"
                            id="password"
                            placeholder="Password"
                            required="" />
                    </div>
                    <button type="submit">Sign In</button>
                    <div>
                        <Link to={`/register`}><button>Register</button></Link>
                    </div>
                </fieldset>
            </form>
        )
    }
}

export default Login;