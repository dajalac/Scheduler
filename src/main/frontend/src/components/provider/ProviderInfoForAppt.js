import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProviderInfoForAppt.css'

export default function ProviderInfoForAppt() {
    return (
        <div className="ProviderInfoForAppt">
            <AccountCircleIcon  sx={{fontSize: '3rem'}}/>
            <div>
            <label>Provider:</label>
            <p>Dr. Keppeler</p>
            </div>
            <div>
            <label>Speciality:</label>
            <p>Family Doctor</p>
            </div>
            
        </div>
    )
}
