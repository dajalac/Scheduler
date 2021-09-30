import React from 'react';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import './ProviderSearchByName.css';

export default function ProviderSearchByName() {
    return (
        <div className="ProviderSearchByName">
            <TextField
                        fullWidth
                        size='small'
                        id="input-with-icon-textfield"
                        label="Provider Name"

                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start" >
                                    <SearchIcon />
                                </InputAdornment>
                            ),
                        }}
                        variant="outlined"/>
             <Button variant="contained" color="success" sx={{ height: '100%' }}> Search </Button>
        </div>
    )
}
