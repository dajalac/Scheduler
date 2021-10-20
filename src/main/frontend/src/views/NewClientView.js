import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetClient } from '../redux/clients/ClientSlice';
import { addNewClient } from '../redux/clients/ClientThunk';
import NewClientForm from '../components/client/NewClientForm';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import './NewClientView.css'

export default function NewClient() {
    const dispatch = useDispatch();
    const { status } = useSelector((state) => state.clients)

    useEffect(() => {
        dispatch(resetClient())
    }, [dispatch])

    const handleAddNewClient = (client) => {
        dispatch(addNewClient(client))
    }

    return (
        <div className="NewClientView">
            <NewClientForm saveClient={handleAddNewClient} />

            {status === 'success' &&
                <div className="NewClientView-saveAlert" >
                    <Alert severity="success" variant="filled">New client saved with success!</Alert>
                </div>
            }
            {status === 'rejected' &&
                <div className="NewClientView-errorAlert" >
                    <Alert severity="error" variant="filled">
                        <AlertTitle>Error</AlertTitle>
                        Cliente already exists! Go to Edit or registate a new one.
                    </Alert>
                </div>
            }
        </div>
    )
}
