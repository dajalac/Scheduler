import React from 'react';
import { formatName } from '../../utils/Formating';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './ProviderInfoForAppt.css';

export default function ProviderInfoForAppt({provider}) {
    return (
        <div className="ProviderInfoForAppt">
            <AccountCircleIcon  sx={{fontSize: '3rem'}}/>
            <div>
            <label>Provider:</label>
            <p>{formatName(provider.firstName+' '+provider.lastName)}</p>
            </div>
            <div>
            <label>Speciality:</label>
            <p>{provider.speciality}</p>
            </div>
            
        </div>
    )
}
