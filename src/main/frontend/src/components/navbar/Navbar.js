import React from 'react'
import DehazeIcon from '@material-ui/icons/Dehaze';
import logo from './logo.png'
import './Navbar.css'

export default function navbar() {
    return (
        <div className = "nav-bar">
            <DehazeIcon className="nav-bar-burger"/>
            <p className="nav-bar-logo">Scheduler</p>
        </div>
    )
}
