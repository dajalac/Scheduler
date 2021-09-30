import React from 'react';
import DisplayClients from '../components/client/DisplayClients';
import ApptHistory from '../components/miscComponents/ApptHistory';

import './AppointmentsHisotoryView.css'

export default function AppointmentsHisotoryView() {
    return (
        <div className="AppointmentsHistoryView">
             <DisplayClients />
             <ApptHistory/>
        </div>
    )
}
