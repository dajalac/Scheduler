import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addNewClient } from '../redux/clients/ClientThunk';
import { setClient } from '../redux/clients/ClientSlice';
import NewClientForm from '../components/client/NewClientForm';
import Button from '@mui/material/Button';
import './NewClientView.css'

export default function NewClient() {
    const dispatch = useDispatch();
    const { client } = useSelector((state) => state.clients)

    const handleAddNewClient = (client) => {
         dispatch(addNewClient(client))
       // dispatch(setClient(client))
    }

    return (
        <div className="NewClientView">
            <NewClientForm addNewClient={handleAddNewClient} />
           
        </div>
    )
}
