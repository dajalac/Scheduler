import React,{useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateClient, getClientById} from '../redux/clients/ClientThunk';
import NewClientForm from '../components/client/NewClientForm';
import DisplayClients from '../components/client/DisplayClients';
import Alert from '@mui/material/Alert';
import './NewClientView.css';

export default function EditClient() {
    const dispatch = useDispatch();
    const { clients, status} = useSelector((state) => state.clients)

    
    useEffect(() => {
        if(status ==='update succeeded'){
            dispatch(getClientById(clients.id)) // get the client from the db again, but with the updates saved
        }
       
    }, [status])

    const handleAddNewClient = (client) => {
        dispatch(updateClient(client))
    }

    return (
    
        <div className="NewClientView">
             <DisplayClients client={clients}/>
             <NewClientForm saveClient={handleAddNewClient} client={clients}/>
             {status === 'fulfilled' &&
                <div className="NewClientView-saveAlert" >
                    <Alert severity="success" variant="filled">Changes saved!</Alert>
                </div>
            }
            {status === 'rejected' &&
                <div className="NewClientView-errorAlert" >
                    <Alert severity="error" variant="filled"> Something went wrong, try again!</Alert>
                </div>
            }
        </div>
    )
}
