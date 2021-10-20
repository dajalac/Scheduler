import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetClient } from '../redux/clients/ClientSlice';
import { updateClient} from '../redux/clients/ClientThunk';
import NewClientForm from '../components/client/NewClientForm';
import DisplayClients from '../components/client/DisplayClients';
import './NewClientView.css';

export default function EditClient() {
    const dispatch = useDispatch();
    const { clients, status } = useSelector((state) => state.clients)

    const handleAddNewClient = (client) => {
        dispatch(updateClient(client))
    }

    return (
        <div className="NewClientView">
             <DisplayClients client={clients[0]}/>
             <NewClientForm saveClient={handleAddNewClient} client={clients[0]}/>
        </div>
    )
}
