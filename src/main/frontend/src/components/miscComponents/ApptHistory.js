import React ,{ useState, useEffect } from 'react';
import Pagination from '@mui/material/Pagination';


function createData(appoitmentTime, appointmentDate, appointmentSpeciality, appointmentProvider, appointmentId) {
    return { appoitmentTime, appointmentDate, appointmentSpeciality, appointmentProvider, appointmentId };
}

const rows = [
    createData('10:40', '09/21/2021', 'Family doctor', 'Dr. Sarah Smith', '01'),
    createData('10:40', '09/21/2021', 'Family doctor', 'Dr. Sarah Smith', '01'),
    createData('10:40', '09/21/2021', 'Family doctor', 'Dr. Sarah Smith', '01'),
];


export default function ApptHistory() {
     /** states for paging */
     const [page, setPage] = useState(1);
     const [numberOfPages, setNumberOfPages] = useState(1);
 
    
     const handleChange = (event, value) => {
         setPage(value);   
     };
 
 
     useEffect(() =>(
        console.log(page)
     ), [page])
 
    return (
        <div className="tableAppts">
            <table className="tableAppts-table">
                <thead>
                    <tr>
                        <th scope="col">Appointment date</th>
                        <th scope="col">Appointment time</th>
                        <th scope="col">Provider</th>
                        <th scope="col">Speciality</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((appt) => (
                        <tr>
                            <td data-label="Appointment date">{appt.appointmentDate}</td>
                            <td data-label="Appointment time">{appt.appoitmentTime}</td>
                            <td data-label="Provider">{appt.appointmentProvider}</td>
                            <td data-label="Speciality">{appt.appointmentSpeciality}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='tableAppts-pagination'>
                {/*<Typography>Page {page} of {numberOfPages} </Typography>*/}
                <Pagination count={numberOfPages} page={page} onChange={handleChange}
                        color='primary' shape='rounded' size='small' />
            </div>
        </div>
    )
}
