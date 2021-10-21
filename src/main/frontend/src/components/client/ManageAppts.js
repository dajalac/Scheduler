import React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ManageAppts.css';

export default function ManageAppts({appointment}) {
    const providerName = appointment.providerId.firstName +' '+appointment.providerId.lastName
    const speciality = appointment.providerId.speciality

    const timeFormat = {hour: 'numeric', minute: 'numeric', hour12: true };
    const apptTime = new Date(appointment.apptDate + 'T' + appointment.starTime).toLocaleTimeString('en-US', timeFormat)

    const weekday = new Date(appointment.apptDate+ 'T' + appointment.starTime).toLocaleDateString('en-US', {weekday: 'short'})
    const year = new Date(appointment.apptDate+ 'T' + appointment.starTime).getFullYear();
    const date = new Date(appointment.apptDate+ 'T' + appointment.starTime).toLocaleDateString('en-US', {month: 'short', day: 'numeric'})

    return (
        <div className="ManageAppts">
            <div className="ManageAppts-calendar">
                <div className="ManageAppts-calendar-header">
                    <div >{weekday}</div>
                    <div >{year}</div>
                </div>
                <div className="ManageAppts-calendar-date">{date}</div>
                <div className="ManageAppts-calendar-time">{apptTime}</div>
            </div>
            <div className="ManageAppts-info">
                <div>Provider: {providerName}</div>
                <div>Speciality: {speciality}</div>
            </div>
            <div className="ManageAppts-btns">
                <Button variant="contained"
                    startIcon={<EditIcon />}
                    size='small' sx={{width:'100px'}}>Edit</Button>
                <Button variant="contained"
                    startIcon={< DeleteIcon />}
                    size='small' sx={{width:'100px'}}>Cancel</Button>

            </div>

        </div>
    )
}
