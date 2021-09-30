import React from 'react'
import NewClientForm from '../components/client/NewClientForm';
import Button from '@mui/material/Button';
import DisplayClients from '../components/client/DisplayClients';
import './NewClientView.css'

export default function NewClient() {
    return (
        <div className="NewClientView">
             <DisplayClients />
            <NewClientForm/>
        <Button variant="contained" color="success" size="large"> Save </Button>
        </div>
    )
}
