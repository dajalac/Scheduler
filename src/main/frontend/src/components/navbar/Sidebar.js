import React from 'react';
import {Link} from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import InfoIcon from '@mui/icons-material/Info';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FolderIcon from '@mui/icons-material/Folder';
import './Sidebar.css'

export default function sidebar() {

    return (
        <div className= 'side-bar'>
        <nav>
            <ul className = "side-bar-items">
            <li className="side-bar-links">
                    <HomeIcon className="side-bar-menu-icons"/>
                    <Link to ='/'>Home</Link>
                </li>
                <li className="side-bar-links">
                    <FolderIcon  className="side-bar-menu-icons"/>
                   <Link to= '/newAppt'> Manage Appoitments </Link>
                </li>
                <li className="side-bar-links">
                    <PersonAddIcon className="side-bar-menu-icons" />
                    <Link to ='/newClient'> New client </Link>
                </li>
                {/*
                <li className="side-bar-links">
                    <InfoIcon className="side-bar-menu-icons"/>
                    <Link to ='/clientInfo'> Client info</Link>
                </li>*/ }
                <li className="side-bar-links">
                    <DateRangeIcon className="side-bar-menu-icons"/>
                     <Link to ='/providerSchedule'>Provider schedule</Link>
                </li>
            </ul>
        </nav>
        </div>

    )
}
