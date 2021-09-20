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
                <lable>Search by: </lable>
                <lable><input type="radio" value="client" name="searchBy" /> <span>Customer Name</span></lable>
                <lable><input type="radio" value="memberNumber" name="searchBy" /> <span>Member Number</span></lable>
                <lable><input type="radio" value="provider" name="searchBy" /> <span>Provider</span></lable>

            </div>
        </div>
    )
}

/*
<div className=".searchTable-searchBy">

            <Box sx={{ m: 1, width: 300 }}>
                    <FormControl fullWidth>
                        <InputLabel className={classes.label}
                            id="demo-simple-select-label">Search by: </InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={searchBy}
                            label="Age"
                            onChange={handleSearchBy}
                        >
                            <MenuItem value={'All'}>All Appointments</MenuItem>
                            <MenuItem value={'Customer'}>Customer name and birthday</MenuItem>
                            <MenuItem value={'Member number'}>Member number</MenuItem>
                            <MenuItem value={'Provider'}>Provider</MenuItem>
                        </Select>
                    </FormControl>

            </Box>

            </div>
            <div className="searchTable-searchBy-client">
                        <TextField
                    required
                    id="filled-required"
                    label= "Client name"
                    variant="filled"
                    helperText="Enter first and last name"

                    />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Pick up a date"
                        size="small"
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} style={{ width: 150 }} />}
                    />
                </LocalizationProvider>

                <Button variant="outlined" startIcon={<SearchIcon />}> Search </Button>
            </div>

            <div className ="searchTable-searchBy-memberNumber" >

                     <TextField
                    required
                    id="filled-required"
                    label="Member number"
                    variant="filled"

                    />

                <Button variant="outlined" startIcon={<SearchIcon />}> Search </Button>
            </div>
 */
