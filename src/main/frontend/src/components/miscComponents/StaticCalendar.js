import React from 'react';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import './StaticCalendar.css'

const disableUnavailableDates= ((date)=>{
    const weekends = date.getDay() === 0 || date.getDay() === 6;
    const unavailableDates = Math.random() > 0.7; /**change for db dates */
    return weekends || unavailableDates;
})



export default function DisplayAvailableAppt() {
    const [value, setValue] = React.useState(null);

    return (
        <div className = "staticCalendar"> 
            <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        value={value}
                        minDate={new Date()}
                        shouldDisableDate={disableUnavailableDates}
                        onChange={(newValue) => {
                            setValue(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        
        </div>
    )
}
