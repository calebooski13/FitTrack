import React, { Component } from 'react';
import { Link } from "react-router-dom"
// import './NavBar.css'

class NavBar extends Component {
 render(){
   return (
    <header>
    <h1 className="site-title">FitTrack<br />
    </h1>
    <nav>
    <div className="nav-wrapper">
      <ul className="container">
           <li><Link className="nav-link" to="/home">Home</Link></li>
           <li><Link className="nav-link" to="/myworkouts">My Workouts</Link></li>
           <li><Link className="nav-link" to="/photos">Photos</Link></li>
      </ul>
    </div>
  </nav>
  </header>
   )}}

   export default NavBar;