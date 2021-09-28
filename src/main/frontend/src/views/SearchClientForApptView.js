import React from 'react'
import DisplayClients from '../components/client/DisplayClients';
import SearchClient from '../components/client/SearchClient';
import './SearchClientForApptView.css'

export default function SearchClientForAppt() {
    return (
        <div className="SearchClientForAppt">
            <SearchClient/>
            <DisplayClients/>
        </div>
    )
}
