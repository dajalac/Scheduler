import React from 'react'
import DisplayClients from '../components/client/DisplayClients';
import SearchPatient from '../components/client/SearchPatient';
import './SearchClientForApptView.css'

export default function SearchClientForAppt() {
    return (
        <div className="SearchClientForAppt">
            <SearchPatient/>
            <DisplayClients/>
        </div>
    )
}
