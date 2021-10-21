import React , { useEffect } from  'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetClient } from '../redux/clients/ClientSlice';
import {getClientByMemberNumber, getClientBynameAndBday} from '../redux/clients/ClientThunk';
import DisplayClients from '../components/client/DisplayClients';
import SearchClient from '../components/client/SearchClient';
import './SearchClientForApptView.css'



export default function SearchClientForAppt() {
    const dispatch = useDispatch();
    const {clients, status} = useSelector((state)=>state.clients)

    useEffect(() => {
        dispatch(resetClient())
    }, [dispatch])

    const searchByNameAndBday =(values)=>{
        dispatch(getClientBynameAndBday(values))
    }

    const serachByMemberNumber=(value)=>{
        dispatch(getClientByMemberNumber(value))
    }

    // const displayClient =()=>{
    //     let result = [];
    //     clients.map(client =>(
    //        result.push(<DisplayClients client ={client} />)
    //     ))
    //     return result
    // }

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
               return <DisplayClients client ={clients} />
                
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
