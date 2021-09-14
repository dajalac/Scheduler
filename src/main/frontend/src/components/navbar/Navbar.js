import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import './Navbar.css'

export default function navbar() {

    return (
        <>
        <nav className="nav-bar">
            <ul className = "nav-bar-items">
            <li className="nav-bar-links">
                    <HomeIcon className="nav-bar-menu-icons"/>
                    <p> Home</p>
                </li>
                <li className="nav-bar-links">
                    <AddIcon className="nav-bar-menu-icons"/>
                   <p> New Appointment </p>
                </li>
                <li className="nav-bar-links">
                    <PersonAddIcon className="nav-bar-menu-icons" />
                    <p> New client </p>
                </li>
                <li className="nav-bar-links">
                    <InfoIcon className="nav-bar-menu-icons"/>
                    <p> Client info</p>
                </li>
                <li className="nav-bar-links">
                    <DateRangeIcon className="nav-bar-menu-icons"/>
                     <p>Provider schedule</p>
                </li>
            </ul>
        </nav>
        </>

    )
}
