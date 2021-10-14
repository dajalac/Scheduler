import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import './NewApptForm.css';

export default function NewApptForm({providers}) {
    const [speciality, setSpeciality] = useState('');
    const [provider, setProvider] = useState('');
    const [enableProviderName, setEnableProviderName] = useState(true)

    const handleSpeciality = (event) => {
        setSpeciality(event.target.value);
        setEnableProviderName(false)  
    };

    const handleProvider = (event) => {
        setProvider(event.target.value);
    };

    const handleRadioBtn = (event) => {
        console.log(event.target.value);
    }


    const getSpecialities = ()=>{
        let specialities=[]; 
        const uniqueSpecialities = [...new Set(providers.map(p =>(p.speciality)))]

        if(providers){
            uniqueSpecialities.map(provider=>(
               specialities.push(<MenuItem value={provider}>{provider}</MenuItem>)
            ))
        }
        return specialities;
    }

    const getProviders = () =>{
        let providersName = []
        let providersNameToDisplay =[]

        providers.map(provider=>{
            if(provider.speciality ===speciality){
               return  providersName.push(provider.firstName+' '+provider.lastName)
            }else{
                return ''
            }
        })

        if(providers){
            providersName.map(name=>(
                providersNameToDisplay.push(<MenuItem value={name}>{name}</MenuItem>)
            ))
        }
        return providersNameToDisplay 
    }



    return (
        <div className="newApptForm">
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
                        {getSpecialities()}
                       
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
                        disabled={enableProviderName}
                    >
                        {getProviders()}
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
