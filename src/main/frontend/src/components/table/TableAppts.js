import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import Pagination from '@mui/material/Pagination';
import { useHistory } from 'react-router-dom';
import './TableAppts.css';


const createData = (appoitmentTime, appointmentDate, appointmentClient, appointmentProvider, appointmentId) => {
    return { appoitmentTime, appointmentDate, appointmentClient, appointmentProvider, appointmentId };
}

const insertDataInRows = (appointments, status, rows) => {
    const dateFormat = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const timeFormat = { hour: 'numeric', hour12: true };

    if (status === 'success') {
        appointments.map((appt) => (
            rows.push(createData(new Date(appt.apptDate + 'T' + appt.starTime).toLocaleTimeString('en-US', timeFormat),
                new Date(appt.apptDate+ 'T' + appt.starTime).toLocaleDateString('en-US', dateFormat),
                appt.patientId.firstName + ' ' + appt.patientId.lastName,
                appt.providerId.firstName + ' ' + appt.providerId.lastName, appt.id))
        ))
    }
}

const pagination = (page, rows) => {
    if (Object.keys(rows).length > 0) {
        const indexOfLastApptInScreen = page * 10; // 10 is the number of item per page
        const indexOfFirstApptInSceen = indexOfLastApptInScreen - 10; // 10 is the number of item per page
        const rowsToDisplay = rows.slice(indexOfFirstApptInSceen, indexOfLastApptInScreen);

        return rowsToDisplay
    }
    else {
        return []
    }

}

export default function TableAppts({ appointments, status }) {
    const [page, setPage] = useState(1);
    const rows = []
    let history = useHistory()
    let numberOfPages = 1

    if (typeof appointments !== 'undefined') {
        numberOfPages = Math.ceil((appointments.length) / 10)
    }


    insertDataInRows(appointments, status, rows);

    const rowsToDisplay = pagination(page, rows)

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handleBtnClick = () => {
        history.push('/EditClient');
    }

    return (
        <div className="tableAppts">
            <table className="tableAppts-table">
                <thead>
                    <tr>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Appointment date</th>
                        <th scope="col">Appointment time</th>
                        <th scope="col">Provider</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {rowsToDisplay.map((appt) => (
                        <tr key={appt.appointmentId}>
                            <td data-label="Customer Name">{appt.appointmentClient}</td>
                            <td data-label="Appointment date">{appt.appointmentDate}</td>
                            <td data-label="Appointment time">{appt.appoitmentTime}</td>
                            <td data-label="Provider">{appt.appointmentProvider}</td>
                            <td data-label="" >
                                <Button variant="contained"
                                    startIcon={<EditIcon />}
                                    size='small'
                                    onClick={handleBtnClick}
                                >Edit</Button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='tableAppts-pagination'>
                <Pagination count={numberOfPages} page={page} onChange={handlePageChange}
                    color='primary' shape='rounded' size='small' />
            </div>
        </div>
    );

}


