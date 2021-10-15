import React,{useState}from 'react';
import './AvailableTime.css'



const createData = (appoitmentTime, id) => {
    return { appoitmentTime, id };
}


export default function TimeTable({availableTimeSlot,getApptTime,dateSelected}) {
    const rows = []


    availableTimeSlot.map((item,index)=>{
       if(item[0] ===dateSelected ){
        rows.push(createData(item[1],index))
       }
    })


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
