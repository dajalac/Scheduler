import React from 'react'
import DisplayClients from '../components/client/DisplayClients';
import SearchClient from '../components/client/SearchClient';
import './SearchClientForApptView.css'; /**go to fix it! */
export default function ClientInfo() {
    return (
        <div className="SearchClientForAppt">
            <SearchClient/>
            <DisplayClients />
        </div>
    )
}
