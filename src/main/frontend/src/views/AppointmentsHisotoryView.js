import React from 'react';
import DisplayClients from '../components/client/DisplayClients';
import ApptHistory from '../components/miscComponents/ApptHistory';
import PrintIcon from '@mui/icons-material/Print';

import './AppointmentsHisotoryView.css'


export default function AppointmentsHisotoryView() {

    return (
        <div className="AppointmentsHistoryView" id="printableArea">
             <DisplayClients />
             <div className="AppointmentsHistoryView-print" onClick={() => window.print()}>
             <PrintIcon />   
             print</div> 
             <ApptHistory/>
        </div>
    )
}
