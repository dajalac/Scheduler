import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';
import DatePicker from '@mui/lab/DatePicker';

import './SearchPatient.css'

export default function SearchPatient() {
    const [value, setValue] = useState(null);

    return (
        <div className="SearchPatient">
            <h5>Search Client by: </h5>
            <div className="SearchPatient-by-name">
            <TextField className ="SearchPatient-TextField"id="outlined-basic" label="Client First and last name" variant="outlined" />
            
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Birthday"
                    value={value}
                    onChange={(newValue) => {
                        setValue(newValue);
                    }}
                    renderInput={(params) => <TextField {...params} sx={{ width: 250 }}/>}
                />
            </LocalizationProvider>
            </div>
            <p> OR </p>
            <div className="SearchPatient-by-member-number">
            <TextField className ="SearchPatient-TextField" id="outlined-basic" label="Member number" variant="outlined"/> 
            </div>
            <div className="SeachPatient-btn">
            <Button variant="contained" size="small">Search</Button>
            </div>
            
                    
        </div>
    )
}
