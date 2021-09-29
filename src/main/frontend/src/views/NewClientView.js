import React from 'react'
import NewClientForm from '../components/client/NewClientForm';
import Button from '@mui/material/Button';

export default function NewClient() {
    return (
        <div>
        <div className="App-center-div">
            <NewClientForm/>
        </div>
        <Button variant="contained" color="success" size="large"> Save </Button>
        </div>
    )
}
