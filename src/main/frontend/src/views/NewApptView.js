import React from 'react';
import StaticCalendar from '../components/miscComponents/StaticCalendar';
import NewApptForm from '../components/miscComponents/NewApptForm';
import AvailableTime from '../components/miscComponents/AvailableTime';
import DisplayClients from '../components/client/DisplayClients';
import ProviderInfoForAppt from '../components/provider/ProviderInfoForAppt';
import './NewApptView.css'

import Button from '@mui/material/Button';

export default function NewAppt() {
    return (
        <div className="NewAppt">
             <DisplayClients />
            <NewApptForm />
            <div className="NewAppt-result">
                <div className="NewAppt-availability">
                    <ProviderInfoForAppt />
                    <StaticCalendar />
                    <AvailableTime />
                </div>
                <div className="NewAppt-saveBtn">
                    <Button variant="contained" size="small" >Schedule</Button>
                </div>
            </div>
        </div>
    )
}
