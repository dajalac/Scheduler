import React from 'react'
import AddIcon from '@material-ui/icons/Add';
import InfoIcon from '@material-ui/icons/Info';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import HomeIcon from '@material-ui/icons/Home';
import DateRangeIcon from '@material-ui/icons/DateRange';
import './Sidebar.css'

export default function sidebar() {
    
    return (
        <>
        <nav className= 'side-bar' >
            <ul className = "side-bar-items">
            <li className="side-bar-links">
                    <HomeIcon className="side-bar-menu-icons"/>
                    <p> Home</p>
                </li>
                <li className="side-bar-links">
                    <AddIcon className="side-bar-menu-icons"/>
                   <p> New Appointment </p>
                </li>
                <li className="side-bar-links">
                    <PersonAddIcon className="side-bar-menu-icons" />
                    <p> New client </p>
                </li>
                <li className="side-bar-links">
                    <InfoIcon className="side-bar-menu-icons"/>
                    <p> Client info</p>
                </li>
                <li className="side-bar-links">
                    <DateRangeIcon className="side-bar-menu-icons"/>
                     <p>Provider schedule</p>
                </li>
            </ul>
        </nav>
        </>

    )
}
