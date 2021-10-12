import React, { useState } from 'react';
import { validateName, validateMemberNumber } from '../../utils/Validation';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';
import DatePicker from '@mui/lab/DatePicker';

import './SearchClient.css'


export default function SearchClient({ onSearchByMemberNum, onSeachByNameAndBday }) {
    const [birthday, setBirthday] = useState(null);
    const [nameInput, setNameInput] = useState({ name: '', error: false, errorMsg: '' });
    const [memberNumber, setMemberNumber] = useState({ number: '', error: false, errorMsg: '' });
    const [btnDisabled, setBtnDisabled] = useState(true)

    const handleBirthday = (event) => {
        //const date = new Date(event).toLocaleTimeString('en-US',{year: 'numeric', month: '2-digit', day: '2-digit'})
        setBirthday(event)

        if (nameInput.name.length > 0) {
            setBtnDisabled(false)
        }

    }

    const handleName = (event) => {
        const nameError = validateName(event.target.value);
        setNameInput({ name: event.target.value, error: nameError.error, errorMsg: nameError.msg })
        //setNameInput({...nameInput, name: event.target.value})

        if (birthday !== null) {
            setBtnDisabled(false)
        }

    }

    const handleMemberNumber = (event) => {
        const memberNumberError = validateMemberNumber(event.target.value)
        setMemberNumber({ number: event.target.value, error: memberNumberError.error, errorMsg: memberNumberError.msg })
        //setMemberNumber({...memberNumber, number: event.target.value})
        setBtnDisabled(false)
    }


    const eventBtn = () => {
        if (nameInput.name && birthday !==null && !nameInput.error) {
            onSeachByNameAndBday({name:nameInput.name, birthday:birthday})
        }

        if(memberNumber.number && !memberNumber.error){
            onSearchByMemberNum(memberNumber.number)
        }
    }





    return (
        <div className="SearchClient">
            <h5>Search Client by: </h5>
            <div className="SearchClient-by-name">
                <TextField className="SearchClient-TextField"
                    id="outlined-basic"
                    label="Client First and last name"
                    variant="outlined"
                    error={nameInput.error}
                    helperText={nameInput.errorMsg}
                    onChange={handleName} />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Birthday"
                        value={birthday}
                        onChange={handleBirthday}
                        renderInput={(params) => <TextField {...params} sx={{ width: 250 }} />}
                    />
                </LocalizationProvider>
            </div>
            <p className="SearchClient-OR-division"> OR </p>
            <div className="SearchClient-by-member-number">
                <TextField className="SearchClient-TextField"
                    id="outlined-basic"
                    label="Member number"
                    variant="outlined"
                    error={memberNumber.error}
                    helperText={memberNumber.errorMsg}
                    onChange={handleMemberNumber} />
            </div>
            <div className="SearchClient-btn">
                <Button variant="contained"
                    size="small"
                    disabled={btnDisabled}
                    onClick={eventBtn}>Search</Button>
            </div>


        </div>
    )
}
