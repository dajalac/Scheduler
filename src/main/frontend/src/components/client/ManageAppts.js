import React from 'react';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './ManageAppts.css';

export default function ManageAppts() {
    return (
        <div className="ManageAppts">
            <div className="ManageAppts-calendar">
                <div className="ManageAppts-calendar-header">
                    <div >Monday</div>
                    <div >2021</div>
                </div>
                <div className="ManageAppts-calendar-date">Sep, 14</div>
                <div className="ManageAppts-calendar-time">10:00PM</div>
            </div>
            <div className="ManageAppts-info">
                <div>Provider: Dr. Keppeler</div>
                <div>Speciality: Family doctor</div>
            </div>
            <div className="ManageAppts-btns">
                <Button variant="contained"
                    startIcon={<EditIcon />}
                    size='small' sx={{width:'100px'}}>Edit</Button>
                <Button variant="contained"
                    startIcon={< DeleteIcon />}
                    size='small' sx={{width:'100px'}}>Cancel</Button>

            </div>

        </div>
    )
}
