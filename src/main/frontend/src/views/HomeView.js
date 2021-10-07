import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAppts, getApptsByMemberNumber,getApptsByCustomer,getApptsByProvider} from '../redux/appointments/AppointmentThunk';
import SearchTable from '../components/table/SearchTable';
import TableAppts from '../components/table/TableAppts';
import RefreshIcon from '@mui/icons-material/Refresh';
import './HomeView.css';

export default function Home() {

    const dispatch = useDispatch();
    const {appointments, status} = useSelector((state)=>state.appointments)

     useEffect(()=>{
        dispatch(getAppts())
     }, [dispatch])

    const handleRefresh =()=>{
        dispatch(getAppts())
    }
    const searchByCustomer=(customerName)=>{
        dispatch(getApptsByCustomer(customerName))
    }

    const searchByMemeberNumber=(memberNumber)=>{
        dispatch(getApptsByMemberNumber(memberNumber))
    }

    const searchByProvider =(providerName)=>{
        dispatch(getApptsByProvider(providerName))
    }
    

    return (
        <div className="home-screen">
            <div className="home-screen-searchMenu">
            <SearchTable onSelectMemberNumber ={searchByMemeberNumber}
                         onSelectProvider = {searchByProvider}
                         onSelectByCustomer = {searchByCustomer}/>
            </div>
            <div className ="home-screen-refreshBtn">
                {//TODO
                /**maybe insert a title saying that it if for the nex 3 months */}
                <RefreshIcon onClick={handleRefresh}/>
            </div>
            <div className="home-screen-table">
            <TableAppts appointments={appointments}  status ={status}/>
            </div>
           
        </div>
    )
}
