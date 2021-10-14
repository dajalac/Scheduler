import React,{useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProviders } from '../redux/provider/ProviderThunk';
import StaticCalendar from '../components/miscComponents/StaticCalendar';
import NewApptForm from '../components/miscComponents/NewApptForm';
import AvailableTime from '../components/miscComponents/AvailableTime';
import DisplayClients from '../components/client/DisplayClients';
import ProviderInfoForAppt from '../components/provider/ProviderInfoForAppt';
import './NewApptView.css'

import Button from '@mui/material/Button';

export default function NewAppt() {
    const dispatch = useDispatch();
    const {clients} = useSelector((state)=>state.clients)
    const {providers}= useSelector((state)=>state.providers)

    useEffect(() => {
        dispatch(getAllProviders())
    }, [dispatch])
    
    return (
        <div className="NewAppt">
             <DisplayClients client ={clients[0]} />
            <NewApptForm providers ={providers}/>
            <div className="NewAppt-result">
                <div className="NewAppt-availability">
                    <ProviderInfoForAppt />
                    <StaticCalendar />
                    <AvailableTime />
                </div>
                <div className="NewAppt-saveBtn">
                    <Button variant="contained" size="small" >Schedule</Button>
                </div>
            </div>
        </div>
    )
}
