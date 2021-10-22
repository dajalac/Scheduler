import React, { useEffect, useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

import './NewApptForm.css';

const getSpecialities = (providers)=>{
    let specialities=[]; 
    const uniqueSpecialities = [...new Set(providers.map(p =>(p.speciality)))]

    if(providers){
        uniqueSpecialities.map(provider=>(
           specialities.push(<MenuItem value={provider}>{provider}</MenuItem>)
        ))
    }
    return specialities;
}

const getProviders = (providers,speciality ) =>{
    let providersName = []
    let providersNameToDisplay =[]

    providers.map(provider=>{
        if(provider.speciality ===speciality){
           return  providersName.push({name: provider.firstName+' '+provider.lastName, id:provider.id})
        }else{
            return ''
        }
    })

    if(providers){
        providersName.map(p=>(
            providersNameToDisplay.push(<MenuItem value={p.id}>{p.name}</MenuItem>)
        ))
    }

    return providersNameToDisplay 
}


export default function NewApptForm({providers, onCheckAvailableTime, onGetProviderInfo}) {
    const [speciality, setSpeciality] = useState('');
    const [providerId, setProviderId] = useState('');
    const [fromTime, setFromTime] = useState('8:00');
    const [toTime, setToTime] = useState('16:00')
    const [enableProviderName, setEnableProviderName] = useState(true)
    const [enableBtb, setEnableBtn] = useState(true)



    const saveProviderInfo=()=>{
        const provider = providers.filter((individual)=>{
            return individual.id === providerId
        })

        onGetProviderInfo(provider)
    }

    const handleSpeciality = (event) => {
        setSpeciality(event.target.value);
        setEnableProviderName(false)  
    };

    const handleProvider = (event) => {
        setProviderId(event.target.value);
        setEnableBtn(false)
    };

    const handleRadioBtn = (event) => {
        const timeChoosen = event.target.value
        if(timeChoosen ==='morning'){
            setFromTime('8:00')
            setToTime('12:00')
        }
        else if(timeChoosen ==='afternoon'){
            setFromTime('13:00')
            setToTime('16:00')
        }
        else if (timeChoosen ==='either'){
            setFromTime('18:00')
            setToTime('16:00') 
        }
    }

    const onClickBtn = ()=>{
        onCheckAvailableTime({id:providerId, fromTime:fromTime, toTime:toTime})
        saveProviderInfo()
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
                        {getSpecialities(providers)}
                       
                    </Select>
                </FormControl>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-autowidth-label" sx={{ backgroundColor: 'white' }}>Provider</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={providerId}
                        onChange={handleProvider}
                        autoWidth
                        disabled={enableProviderName}
                    >
                        {getProviders(providers, speciality)}
                    </Select>
                </FormControl>
            </div>


            <div className="newApptForm-radioBtn" onChange={handleRadioBtn}>
                <label> Periodo of day: </label>
                <label><input type="radio" value="morning" name="periodoOfDay" /> <span>Morning</span></label>
                <label><input type="radio" value="afternoon" name="periodoOfDay" /> <span>Afternoon</span></label>
                <label><input type="radio" value="either" name="periodoOfDay" checked/> <span>Either</span></label>
            </div>
            <div className="newApptForm-butn">
                <Button variant="contained"
                 size="small"
                 disabled={enableBtb}
                 onClick={onClickBtn}>See appointments availables</Button>
            </div>

        </div>
    )
}
