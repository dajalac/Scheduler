import React from 'react'
import ManageAppts from '../components/client/ManageAppts';
import ProviderInfoCard from '../components/provider/ProviderInfoCard';
import ProviderSearchByName from '../components/provider/ProviderSearchByName';

import './ProviderScheduleView.css'

export default function ProviderSchedule() {
    return (
        <div className="ProviderSchedule">
            <ProviderSearchByName/>
            <ProviderInfoCard/>
            <div className="ProviderSchedule-title">Next Appointments:</div>
            {/**here you will pass the client name instead of the provider */}
            <ManageAppts/>
        </div>
    )
}
