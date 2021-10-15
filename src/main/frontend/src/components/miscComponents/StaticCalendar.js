import React,{useState, useEffect} from 'react';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

import './StaticCalendar.css'



export default function DisplayAvailableAppt({availableDates, getApptDate}) {
    const [dateSelected, setdateSelected] = useState(null);
    const maxDateToDisplay = new Date(new Date().setMonth(new Date().getMonth()+2))

    useEffect(() => {
        getApptDate(dateSelected)
    }, [dateSelected, getApptDate])

    const disableUnavailableDates= ((date)=>{
        const weekends = date.getDay() === 0 || date.getDay() === 6;
        let unavailableDates = false

        availableDates.map(date=>(
           unavailableDates= new Date(date[0]+date[1]) === date
        ))
        
        return weekends || unavailableDates;

    })

    const handleSelectedDate =(event)=>{
        setdateSelected(event);
    }



    return (
        <div className = "staticCalendar"> 
            <div>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <StaticDatePicker
                        displayStaticWrapperAs="desktop"
                        value={dateSelected}
                        minDate={new Date()}
                        maxDate={maxDateToDisplay}
                        shouldDisableDate={disableUnavailableDates}
                        onChange={handleSelectedDate}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>
            </div>
        
        </div>
    )
}
