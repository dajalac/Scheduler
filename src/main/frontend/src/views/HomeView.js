import React, {useEffect} from 'react';
import SearchTable from '../components/table/SearchTable';
import TableAppts from '../components/table/TableAppts';
import { useSelector, useDispatch } from 'react-redux';
import { getAppts } from '../redux/AppointmentSlice';
import './HomeView.css';

export default function Home() {

    const dispatch = useDispatch();
    const {appointments, status} = useSelector((state)=>state.appointments)

    //TODO
    /**remove from the useEffect */
    useEffect(()=>{
        dispatch(getAppts())
    }, [dispatch])

    
    

    return (
        <div className="home-screen">
            <div className="home-screen-searchMenu">
            <SearchTable/>
            </div>
            <div className="home-screen-table">
            <TableAppts appointments={appointments.data}  status ={status}/>
            </div>
           
        </div>
    )
}
