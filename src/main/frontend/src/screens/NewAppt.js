import React from 'react'
import DisplayClients from '../components/displayReulsts/DisplayClients';
import SearchPatient from '../components/search/SearchPatient';
import './NewAppt.css'

export default function NewAppt() {
    return (
        <div className="newAppt">
            <SearchPatient/>
            <DisplayClients/>
        </div>
    )
}
