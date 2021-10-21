import React from 'react';
import { Link } from 'react-router-dom';

import './DisplayClients.css';

export default function DisplayClients({client}) {
    
    const bdayFormated= new Date(client.birthday).toLocaleDateString('en-US');
    return (

        <div className="displayResults">
            <div className="displayResults-info">
                <div>Name: {client.firstName +' '+ client.lastName}</div>
                <div>Birthday:  {bdayFormated}</div>
                <div>Member Number: {client.memberNumber}</div>
                <div>Phone:  {client.phone}</div>
                <div>e-mail: {client.email}</div>
                <div>Adress: {client.address +', '+client.city+', '+client.state+', '+client.zipCode}</div>
            </div>
            <div className="displayResults-actions">
                <Link to='/ApptSchedule' className="displayResults-actions-options"> Schedule an appointment</Link>
                <Link to='/EditClient' className="displayResults-actions-options"> Edit information</Link>
                <Link to='/ManageAppts' className="displayResults-actions-options"> Manage appointments</Link>
                <Link to='/AppointmentsHistory'className="displayResults-actions-options" > Appointments history</Link>
            </div>

        </div>
    )
}
