import React from 'react';
import {  NavLink } from 'react-router-dom';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HomeIcon from '@mui/icons-material/Home';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FolderIcon from '@mui/icons-material/Folder';
import './Sidebar.css'

export default function sidebar() {


    return (
        <div className='side-bar'>
            <nav>
                <ul className="side-bar-items">
                    <NavLink exact to='/' style={{ textDecoration: 'none' }} activeClassName="side-bar-items-active-tab">
                        <li className="side-bar-links">
                            <HomeIcon className="side-bar-menu-icons" />
                            <div>Home </div>
                        </li>
                    </NavLink>

                    <NavLink  exact to='/newAppt' style={{ textDecoration: 'none' }} activeClassName="side-bar-items-active-tab">
                        <li className="side-bar-links">
                            <FolderIcon className="side-bar-menu-icons" />
                            <div>Manage Appoitments</div>
                        </li>
                    </NavLink>
                    <NavLink exact to='/newClient' style={{ textDecoration: 'none' }} activeClassName="side-bar-items-active-tab">
                        <li className="side-bar-links">
                            <PersonAddIcon className="side-bar-menu-icons" />
                            <div> New client </div>
                        </li>
                    </NavLink>
                    <NavLink exact to='/providerSchedule' style={{ textDecoration: 'none' }} activeClassName="side-bar-items-active-tab">
                        <li className="side-bar-links">
                            <DateRangeIcon className="side-bar-menu-icons" />
                            <div>Provider schedule</div>
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </div>

    )
}
