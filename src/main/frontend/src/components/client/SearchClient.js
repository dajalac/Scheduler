import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';
import DatePicker from '@mui/lab/DatePicker';

import './SearchClient.css'

export default function SearchClient() {
    const [value, setValue] = useState(null);

    return (
        <div className= "SearchClient">
            <h5>Search Client by: </h5>
            <div className= "SearchClient-by-name">
            <TextField className = "SearchClient-TextField"id="outlined-basic" label="Client First and last name" variant="outlined" />
            
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
            <div className= "SearchClient-by-member-number">
            <TextField className = "SearchClient-TextField" id="outlined-basic" label="Member number" variant="outlined"/> 
            </div>
            <div className="SearchClient-btn">
            <Button variant="contained" size="small">Search</Button>
            </div>
            
                    
        </div>
    )
}
