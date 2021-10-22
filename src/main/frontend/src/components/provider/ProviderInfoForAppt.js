import React, { useState, useEffect } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProviderInfoForAppt.css'
import { Provider } from 'react-redux';

export default function ProviderInfoForAppt({provider}) {
    //console.log('provider'+ provider[0].firstName)
    return (
        <div className="ProviderInfoForAppt">
            <AccountCircleIcon  sx={{fontSize: '3rem'}}/>
            <div>
            <label>Provider:</label>
            <p>{provider.firstName+' '+provider.lastName}</p>
            </div>
            <div>
            <label>Speciality:</label>
            <p>{provider.speciality}</p>
            </div>
            
        </div>
    )
}
