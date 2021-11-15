import React ,{ useState} from 'react';
import { formatName } from '../../utils/Formating';
import Pagination from '@mui/material/Pagination';


function createData(appoitmentTime, appointmentDate, appointmentSpeciality, appointmentProvider, appointmentId) {
    return { appoitmentTime, appointmentDate, appointmentSpeciality, appointmentProvider, appointmentId };
}

const insertDataInRows = (appointments,rows) => {
    const dateFormat = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
    const timeFormat = {hour: 'numeric', minute: 'numeric', hour12: true };

    appointments.map((appt)=>{
        
        rows.push(createData(new Date(appt.apptDate + 'T' + appt.starTime).toLocaleTimeString('en-US', timeFormat),
                            new Date(appt.apptDate+ 'T' + appt.starTime).toLocaleDateString('en-US', dateFormat),
                            appt.providerId.speciality,
                            appt.providerId.firstName +' '+appt.providerId.lastName,
                            appt.id ))
    })
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

export default function ApptHistory({appointments}) {
     const [page, setPage] = useState(1);
     let numberOfPages = 1

     if (typeof appointments !== 'undefined') {
         numberOfPages = Math.ceil((appointments.length) / 10)
     }


    const rows =[]

    insertDataInRows(appointments,rows);
    const rowsToDisplay = pagination(page, rows)

    
     const handleChange = (event, value) => {
         setPage(value);   
     };
 
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
                    {rowsToDisplay.map((appt) => (
                        <tr>
                            <td data-label="Appointment date">{appt.appointmentDate}</td>
                            <td data-label="Appointment time">{appt.appoitmentTime}</td>
                            <td data-label="Provider">{formatName(appt.appointmentProvider)}</td>
                            <td data-label="Speciality">{appt.appointmentSpeciality}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='tableAppts-pagination'>
                <Pagination count={numberOfPages} page={page} onChange={handleChange}
                        color='primary' shape='rounded' size='small' />
            </div>
        </div>
    )
}
