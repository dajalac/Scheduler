import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


import { makeStyles } from '@mui/styles';

import './SearchTable.css'

const useStyles = makeStyles({
    label: {
        backgroundColor: 'white'
    }
});


export default function SearchTable() {
    const [searchBy, setSearchBy] = React.useState('All');
    const [userInput, setUserInput] = React.useState('');
    const [selectedDate, setDate] = React.useState('');

    const classes = useStyles();

    const handleSearchBy = (event) => {
        setSearchBy(event.target.value);
    };

    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    }


    return (
        <div className="searchTable">
            <div className='searchTable-searchBy'>
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

                <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          With a start adornment
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          }
        />
      </FormControl>
      </Box>

            </div >

            <div className="searchTable-input">
                <TextField id="outlined-basic" onChange={handleUserInput} variant="outlined" />

                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DatePicker
                        label="Pick up a date"
                        onChange={(newValue) => {
                            setDate(newValue);
                        }}
                        renderInput={(params) => <TextField {...params} />}
                    />
                </LocalizationProvider>

            </div>
        </div>
    )
}

/*
  <div className='searchTable-searchBy'>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel >Search by: </InputLabel>
                    <Select
                        value={searchBy}
                        onChange={handleChange}
                    >
                        <MenuItem value={'All'}>All Appointments</MenuItem>
                        <MenuItem value={'Customer'}>Customer name and birthday</MenuItem>
                        <MenuItem value={'Member number'}>Member number</MenuItem>
                        <MenuItem value={'Provider'}>Provider</MenuItem>
                    </Select>
                </FormControl>
            </Box>
            </div>

            <div className='searchTable-searchBy'>
            <p>Search by:  </p>
            <select
            value={searchBy}
            onChange={handleChange}>
                <option  value={'All'} defaultValue>All Appointments </option>
                <option  value={'Customer'}>Customer name and birthday </option>
                <option value={'Member number'}>Member number</option>
                <option value={'Provider'}>Provider</option>
            </select>
            </div>

            */
