import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import FitTrack from './components/FitTrack';

ReactDOM.render(
    <Router>
        <FitTrack />
    </Router>
    , document.getElementById('root')
)
