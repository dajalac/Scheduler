import React,{useState} from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import TablePagination from '@mui/material/TablePagination';
import Pagination from '@mui/material/Pagination';
import './TableAppts.css'

function createData(appoitmentTime,appointmentDate, appointmentClient, appointmentProvider, appointmentId ) {
    return {appoitmentTime, appointmentDate, appointmentClient, appointmentProvider, appointmentId };
}

const rows = [
    createData('10:40','09/21/2021','Ana Luz','Dr. Sarah Smith', '01'),
    createData('10:40','09/21/2021','Ana Luz','Dr. Sarah Smith', '01'),
    createData('10:40','09/21/2021','Ana Luz','Dr. Sarah Smith', '01'),
];


export default function TableAppts() {
    /** states for paging */
    const [page, setPage] = React.useState(2);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
    
      const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };


    return (
        <div className="tableAppts">
            <table className="tableAppts-table">
                <thead>
                    <tr>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Appointment date</th>
                        <th scope="col">Appointment time</th>
                        <th scope="col">Provider</th>
                        <th scope="col">Reschedule ?</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((appt)=>(
                        <tr>
                        <td data-label="Customer Name">{appt.appointmentClient}</td>
                        <td data-label="Appointment date">{appt.appointmentDate}</td>
                        <td data-label="Appointment time">{appt.appoitmentTime}</td>
                        <td data-label="Provider">{appt.appointmentProvider}</td>
                        <td data-label="" >
                            <Button variant="contained" 
                            startIcon={<EditIcon/>}
                            >Edit</Button></td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <Pagination count={10} shape="rounded"  />
        </div>
    );

}
