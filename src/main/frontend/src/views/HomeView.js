import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAppts,getApptsByCustomer,getApptsByProvider, getApptsNoFilter} from '../redux/appointments/AppointmentThunk';
import{apptToEdit} from '../redux/appointments/AppointmentSlice';
import{ getClientById} from '../redux/clients/ClientThunk';
import SearchTable from '../components/table/SearchTable';
import TableAppts from '../components/table/TableAppts';
import RefreshIcon from '@mui/icons-material/Refresh';
import './HomeView.css';

export default function Home() {

    const dispatch = useDispatch();
    const {appointments, status} = useSelector((state)=>state.appointments)

     useEffect(()=>{
         //TODO reset clients
        dispatch(getAppts())
     }, [dispatch])

    const handleRefresh =()=>{
        dispatch(getAppts())
    }
    const searchByCustomer=(customerName)=>{
        dispatch(getApptsByCustomer(customerName))
    }

    const searchByProvider =(providerName)=>{
        dispatch(getApptsByProvider(providerName))
    }

    const searchWithNoFilter=(value)=>{
        dispatch(getApptsNoFilter(value))
    }

    const selectClientToUpdate=(id)=>{
        //dispatch(setClient(client))
        dispatch(getClientById(id))
    }
    
    const selectApptToUpdate=(appt)=>{
        dispatch(apptToEdit(appt))
    }
    

    return (
        <div className="home-screen">
            <div className="home-screen-searchMenu">
            <SearchTable 
                         onSelectProvider = {searchByProvider}
                         onSelectByCustomer = {searchByCustomer}
                         onSearchNoFilter={searchWithNoFilter}/>
            </div>
            <div className ="home-screen-refreshBtn">
                {//TODO
                /**maybe insert a title saying that it if for the nex 3 months */}
                <RefreshIcon onClick={handleRefresh}/>
            </div>
            <div className="home-screen-table">
            <TableAppts appointments={appointments}
                        status ={status}
                        selectClientToUpdate={selectClientToUpdate} 
                        selectApptToUpdate={selectApptToUpdate}/>
            </div>
           
        </div>
    )
}
