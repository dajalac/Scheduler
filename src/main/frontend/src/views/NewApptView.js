import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProviders } from '../redux/provider/ProviderThunk';
import { getAvailableAppts } from '../redux/appointments/AppointmentThunk';
import { getProviderInfo } from '../redux/provider/ProviderSlice';
import{saveDate, saveTime} from '../redux/appointments/AppointmentSlice';
import StaticCalendar from '../components/miscComponents/StaticCalendar';
import NewApptForm from '../components/miscComponents/NewApptForm';
import AvailableTime from '../components/miscComponents/AvailableTime';
import DisplayClients from '../components/client/DisplayClients';
import ProviderInfoForAppt from '../components/provider/ProviderInfoForAppt';
import './NewApptView.css'

import Button from '@mui/material/Button';

export default function NewAppt() {

    const dispatch = useDispatch();
    const { clients } = useSelector((state) => state.clients)
    const { providers, providerSelected } = useSelector((state) => state.providers)
    const { availableTime, dateAndTimeSelected } = useSelector((state) => state.appointments)

    const checkAvailableAppts = (data) => {
        dispatch(getAvailableAppts(data))
    }

    const getSelectedProviderInfo = (info) => {
        dispatch(getProviderInfo(info))
    }

    const getApptDate = (date)=>{
        dispatch(saveDate(date))
    }

    const getApptTime = (time)=>{
        dispatch(saveTime(time))
    }

    useEffect(() => {
        dispatch(getAllProviders())
    }, [dispatch])


    return (
        <div className="NewAppt">
            <DisplayClients client={clients[0]} />
            <NewApptForm providers={providers} onCheckAvailableTime={checkAvailableAppts} onGetProviderInfo={getSelectedProviderInfo} />
            {availableTime.length > 0 &&
            <div className="NewAppt-result">
                <div className="NewAppt-availability">
                    <ProviderInfoForAppt provider={providerSelected[0]} />
                    <StaticCalendar availableDates={availableTime} getApptDate={getApptDate} />
                    <AvailableTime availableTimeSlot={availableTime} getApptTime={getApptTime} dateSelected={dateAndTimeSelected.date}/>
                </div>
                <div className="NewAppt-saveBtn">
                    <Button variant="contained" size="small" >Schedule</Button>
                </div>
            </div>
            }
        </div>
    )
}
