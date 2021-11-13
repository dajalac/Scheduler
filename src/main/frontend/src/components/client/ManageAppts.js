import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import './ManageAppts.css';

export default function ManageAppts({ appointment, selectApptToUpdate, selectClientToUpdate, deleteAppt }) {
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(true)

    const providerName = appointment.providerId.firstName + ' ' + appointment.providerId.lastName
    const speciality = appointment.providerId.speciality

    const timeFormat = { hour: 'numeric', minute: 'numeric', hour12: true };
    const apptTime = new Date(appointment.apptDate + 'T' + appointment.starTime).toLocaleTimeString('en-US', timeFormat)

    const weekday = new Date(appointment.apptDate + 'T' + appointment.starTime).toLocaleDateString('en-US', { weekday: 'short' })
    const year = new Date(appointment.apptDate + 'T' + appointment.starTime).getFullYear();
    const date = new Date(appointment.apptDate + 'T' + appointment.starTime).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })


    let history = useHistory()

    const handleEditarAppt = () => {

        if (selectClientToUpdate()) {
            selectClientToUpdate(appointment.patientId.id)
        }

        selectApptToUpdate(appointment)
        history.push('/ApptSchedule');
    }

    const handleCancelAppointment = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false);
    };


    const handleAgreed = () => {
        setOpen(false);
        deleteAppt(appointment)
        setShow(false)
    }

    return (
        <div className ="ManageApptsRoot">
            {show &&
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
                            size='small' sx={{ width: '100px' }}
                            onClick={handleEditarAppt}>Edit</Button>
                        <Button variant="contained"
                            startIcon={< DeleteIcon />}
                            size='small' sx={{ width: '100px' }}
                            onClick={handleCancelAppointment}>Cancel</Button>
                        <Dialog open={open} onClose={handleClose} aria-labelledby="alert-dialog-title"
                            aria-describedby="alert-dialog-description">
                            <DialogTitle id="alert-dialog-title">
                                {'Cancel Appointment'}
                            </DialogTitle>
                            <DialogContent>
                                <DialogContentText id="alert-dialog-description">
                                    Are you sure do you want to CANCEL this appointment?
                                </DialogContentText>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Disagree</Button>
                                <Button onClick={handleAgreed} autoFocus>Agree</Button>
                            </DialogActions>
                        </Dialog>

                    </div>

                </div>}
        </div>

    )
}
