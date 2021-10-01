import React from 'react';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import './SearchTable.css'


export default function SearchTable() {
    const [searchBy, setSearchBy] = React.useState('All');
    const [userInput, setUserInput] = React.useState('');
    const [selectedDate, setDate] = React.useState('');


    const handleSearchBy = (event) => {
        setSearchBy(event.target.value);
    };

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    }

    const handleRadioBtn = (event) => {
        console.log(event.target.value);
    }


    return (
        <div className="searchTable">

            <div className="searchTable-searchBy">
                <div className="searchTable-input">

                    <TextField className="searchTable-TextField"
                        fullWidth
                        size='small'
                        id="input-with-icon-textfield"

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" >
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"
                    />

                </div>
                <div className="searchTable-button">
                    <Button variant="contained" color="success" sx={{ height: '100%' }}> Search </Button>
                </div>

            </div>
            <div className="searchTable-radioBtn" onChange={handleRadioBtn}>
                <label>Search by: </label>
                <label><input type="radio" value="client" name="searchBy" /> <span>Customer Name</span></label>
                <label><input type="radio" value="memberNumber" name="searchBy" /> <span>Member Number</span></label>
                <label><input type="radio" value="provider" name="searchBy" /> <span>Provider</span></label>

            </div>
        </div>
    )
}

