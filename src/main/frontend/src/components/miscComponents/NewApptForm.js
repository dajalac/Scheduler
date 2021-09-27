import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import './NewApptForm.css';

export default function NewApptForm() {
    const [speciality, setSpeciality] = useState('');
    const [provider, setProvider] = useState('');

    const handleSpeciality = (event) => {
        setSpeciality(event.target.value);
    };

    const handleProvider = (event) => {
        setProvider(event.target.value);
    };

    const handleRadioBtn = (event) => {
        console.log(event.target.value);
    }


    return (
        <div className="newApptForm">
            <div className="newApptForm-clientInfo">
                <div className="newApptForm-lables">
                    <label> Appointment for:</label>
                    <p >Ana Luz</p>
                </div>
                <div className="newApptForm-lables">
                    <label> Member number: </label>
                    <p> 12345 </p>
                </div>

            </div>

            <div className="newApptForm-selectBoxes">
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label" sx={{ backgroundColor: 'white' }}>Speciality</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={speciality}
                        onChange={handleSpeciality}
                        autoWidth
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label" sx={{ backgroundColor: 'white' }}>Provider</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={provider}
                        onChange={handleProvider}
                        autoWidth
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={10}>Twenty</MenuItem>
                        <MenuItem value={21}>Twenty one</MenuItem>
                        <MenuItem value={22}>Twenty one and a half</MenuItem>
                    </Select>
                </FormControl>
            </div>


            <div className="newApptForm-radioBtn" onChange={handleRadioBtn}>
                <label> Periodo of day: </label>
                <label><input type="radio" value="morning" name="periodoOfDay" /> <span>Morning</span></label>
                <label><input type="radio" value="afternoon" name="periodoOfDay" /> <span>Afternoon</span></label>
                <label><input type="radio" value="either" name="periodoOfDay" /> <span>Either</span></label>
            </div>
            <div className="newApptForm-butn">
                <Button variant="contained" size="small" >See appointments availables</Button>
            </div>

        </div>
    )
}
