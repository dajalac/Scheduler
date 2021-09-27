import React from 'react';
import StaticCalendar from '../components/miscComponents/StaticCalendar';
import NewApptForm from '../components/miscComponents/NewApptForm';
import AvailableTime from '../components/miscComponents/AvailableTime';
import './NewApptView.css'
import ProviderInfoForAppt from '../components/provider/ProviderInfoForAppt';

import Button from '@mui/material/Button';

export default function NewAppt() {
    return (
        <div className="NewAppt">
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
