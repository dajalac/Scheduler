import React, { useState, useEffect } from 'react';
import './AvailableTime.css'



const createData = (appoitmentTime, id) => {
    return { appoitmentTime, id };
}


export default function TimeTable({ availableTimeSlot, getApptTime, dateSelected }) {
    const rows = []

    //To get current time
    const today = new Date().toLocaleDateString('fr-CA') // for the format yyy-mm-dd
    const timeNow = new Date().toLocaleTimeString('en-US', { hour12: false });

    
    // to clear the available time list
    useEffect(() => {
        rows.length=0
    }, [rows])

   
    // to not display time slots from today past the current time
    if(dateSelected ===today){
        availableTimeSlot.map((item,index)=>{
            if((item[0] ===dateSelected) && (item[1] > (timeNow)) ){
             rows.push(createData(item[1],index))
            }
         })
    }else{
        availableTimeSlot.map((item,index)=>{
            if((item[0] ===dateSelected) ){
             rows.push(createData(item[1],index))
            }
         })
    }


    const handleSelectTime = (event) => {
        getApptTime(event.target.value)
    }

    return (
        <div className="timeTable">
            <label> Available times</label>

            <div className="timeTable-grid" onClick={handleSelectTime} >
                {rows.map((appt) => (
                    <label className="timeTable-grid-container">
                        <input type="radio" value={appt.appoitmentTime} name="selectTime" />
                        <span className="timeTable-grid-checkmark">{appt.appoitmentTime}</span>
                    </label>
                ))}
            </div>

        </div>
    )


}

/**
 * <button onClick={handleSelectTime}>
                        {appt.appoitmentTime}
                    </button>
                    <div>
                        <input type="radio" value={appt.appoitmentTime} name="selectTime"/>
                        <label>{appt.appoitmentTime}</label>
                    </div>
 */
