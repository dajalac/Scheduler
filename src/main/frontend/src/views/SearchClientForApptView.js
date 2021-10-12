import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getClientByMemberNumber, getClientBynameAndBday} from '../redux/clients/ClientThunk';
import DisplayClients from '../components/client/DisplayClients';
import SearchClient from '../components/client/SearchClient';
import './SearchClientForApptView.css'

export default function SearchClientForAppt() {
    const dispatch = useDispatch();
    const {clients, status} = useSelector((state)=>state.clients)

    const searchByNameAndBday =(values)=>{
        dispatch(getClientBynameAndBday(values))
    }

    const serachByMemberNumber=(value)=>{
        dispatch(getClientByMemberNumber(value))
    }

    const displayResult= ()=>{
        if(status === 'loading'){
            return 'Loading'
        }
       if (status === 'rejected'){
            return 'something went wrong'
        }
       if (status ==='success'){
            if(clients === null || clients.length===0){
               return 'The client could not be found'
            }else{
                return <DisplayClients />
            }
        }
        if (status ===null) {
            return 'Enter an existent client'
        }
    }

    return (
        <div className="SearchClientForAppt">
            <SearchClient onSearchByMemberNum={serachByMemberNumber} onSeachByNameAndBday={searchByNameAndBday}/>
            {displayResult ()}
        </div>
    )
}
