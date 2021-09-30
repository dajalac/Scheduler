import React from 'react'
import DisplayClients from '../components/client/DisplayClients';
import ManageAppts from '../components/client/ManageAppts';
import './ManageApptsView.css';

export default function ManageApptsView() {
    return (
        <div className="ManageApptsView">
            <DisplayClients />
            <ManageAppts/>
            <ManageAppts/>
            <ManageAppts/>
            <ManageAppts/>
            <ManageAppts/>
        </div>
    )
}
