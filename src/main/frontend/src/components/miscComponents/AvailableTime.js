import React,{useState}from 'react';
import './AvailableTime.css'

const createData = (appoitmentTime, id) => {
    return { appoitmentTime, id };
}

const rows = [
    createData('10:40', 1),
    createData('11:40',2),
    createData('12:40',3),
];


export default function TimeTable() {

    const handleSelectTime = (event) => {

        console.log(event.target.textContent)
    
     
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
