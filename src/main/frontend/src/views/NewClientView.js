import React from 'react'
import NewClientForm from '../components/client/NewClientForm';
import Button from '@mui/material/Button';
import './NewClientView.css'

export default function NewClient() {
    return (
        <div className="NewClientView">
            <NewClientForm/>
        <Button variant="contained" color="success" size="large"> Save </Button>
        </div>
    )
}
