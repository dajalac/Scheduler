import React, { useState } from 'react';

import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import './SearchTable.css'


export default function SearchTable({onSelectMemberNumber, onSelectProvider, onSelectByCustomer,onSearchNoFilter}) {
    const [userInput, setUserInput] = useState('');
    const [searchBy, setSearchBy] = useState('')



    const handleUserInput = (event) => {
        setUserInput(event.target.value);
    }

    const handleRadioBtn = (event) => {
        setSearchBy(event.target.value);
    }

    const onClickSearchBtn=()=>{
        console.log(searchBy)
        if (searchBy ==='memberNumber') {
            onSelectMemberNumber(userInput)
        }
        if (searchBy ==='provider'){
            onSelectProvider(userInput)
        }
        if (searchBy==='client'){
            onSelectByCustomer(userInput)
        }
        if(!searchBy){
            onSearchNoFilter(userInput)
            console.log('inside search')
        }
       
    }


    return (
        <div className="searchTable">

            <div className="searchTable-searchBy">
                <div className="searchTable-input">

                    <TextField className="searchTable-TextField"
                        fullWidth
                        size='small'
                        id="input-with-icon-textfield"
                        onChange={handleUserInput}
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
                    <Button variant="contained" color="success" sx={{ height: '100%' }} onClick={onClickSearchBtn}> Search </Button>
                </div>

            </div>
            <div className="searchTable-radioBtn" onChange={handleRadioBtn}>
                <label>Filter by: </label>
                <label><input type="radio" value="client" name="searchBy"/> <span>Customer Name</span></label>
                <label><input type="radio" value="memberNumber" name="searchBy" /> <span>Member Number</span></label>
                <label><input type="radio" value="provider" name="searchBy" /> <span>Provider</span></label>

            </div>
        </div>
    )
}

