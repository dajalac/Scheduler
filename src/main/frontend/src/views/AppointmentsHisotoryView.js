import React from 'react'
import { useSelector } from 'react-redux';
import DisplayClients from '../components/client/DisplayClients';
import ApptHistory from '../components/miscComponents/ApptHistory';
import PrintIcon from '@mui/icons-material/Print';

import './AppointmentsHisotoryView.css'


export default function AppointmentsHisotoryView() {
    const { clients} = useSelector((state) => state.clients)

    return (
        <div className="AppointmentsHistoryView" id="printableArea">
             <DisplayClients client={clients}/>
             <div className="AppointmentsHistoryView-print" onClick={() => window.print()}>
             <PrintIcon />   
             print</div> 
             <ApptHistory appointments={clients.appointment}/>
        </div>
    )
}
