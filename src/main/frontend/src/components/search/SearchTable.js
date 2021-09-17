import React from 'react';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import './SearchTable.css'

export default function SearchTable() {
    const [searchBy, setSearchBy] = React.useState('All');

    const handleChange = (event) => {
        setSearchBy(event.target.value);
    };
    return (
        <div className="searchTable">
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
