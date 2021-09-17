import React from 'react';
import DehazeIcon from '@mui/icons-material/Dehaze';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css'

export default function Navbar({setShowSideBar, showSideBar}) {


    const displaySidebar =()=>{

        setShowSideBar(!showSideBar);

    }
    return (
        <>
        <div className = "nav-bar">
            {showSideBar 
                ?
                <CloseIcon className="nav-bar-burger" onClick={displaySidebar} onKeyDown={displaySidebar}/>
                :
                <DehazeIcon className="nav-bar-burger" onClick={displaySidebar} onKeyDown={displaySidebar}/>
        } 
            <p className="nav-bar-logo">Scheduler</p>
        </div>
        </>
    )

}
