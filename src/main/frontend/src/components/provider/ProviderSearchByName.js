import React,{useState} from 'react';
import{validateName} from '../../utils/Validation';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import './ProviderSearchByName.css';

export default function ProviderSearchByName({ onGetProvider }) {
     const [name, setName] = useState({value:'', error:false, errorMsg:''})

     const handleName =(event)=>{
        const nameError = validateName(event.target.value);
        setName({ value: event.target.value, error: nameError.error, errorMsg: nameError.msg })
     }

     const OnSearch =()=>{
         if(!name.value){
             setName({...name, error:true, errorMsg:'Pelase enter a name'})
         }
         else if(!name.error){
            onGetProvider(name.value)
         }
         
     }

    return (
        <div className="ProviderSearchByName">
            <TextField
                fullWidth
                size='small'
                id="input-with-icon-textfield"
                label="Provider Name"
                value={name.value}
                error ={name.error}
                helperText={name.errorMsg}
                onChange={handleName}

                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start" >
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined" />
            <Button variant="contained" color="success" sx={{ height: '100%' }} onClick={OnSearch}> Search </Button>
        </div>
    )
}
