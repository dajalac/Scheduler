import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

import './DisplayClients.css';

export default function DisplayClients() {


    return (

        <div className="displayResults">

            <div className="displayResults-info">
                <p>Name:  Ana Luz</p>
                <p>Birthday:  05/29/1990</p>
                <p>Member Number: 12345679</p>
                <p>Phone:  (12)1234-1234</p>
                <p>e-mail: analuz@gmail.com</p>
                <p>Adress: 1523 Holleman, Madison, WI</p>
            </div>
            <div className="displayResults-actions">
                <Link to='/ApptSchedule' className="displayResults-actions-options"> Schedule an appointment</Link>
                <Link to='/newClient' className="displayResults-actions-options"> Edit information</Link>
                <Link to='/ManageAppts' className="displayResults-actions-options"> Manage appointments</Link>
                <Link to='/ManageAppts'className="displayResults-actions-options" > Appointments history</Link>
            </div>

        </div>
    )
}
