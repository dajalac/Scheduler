import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllProviders } from '../redux/provider/ProviderThunk';
import { getAvailableAppts, saveAppt, updateAppt } from '../redux/appointments/AppointmentThunk';
import { getProviderInfo,resetProvider} from '../redux/provider/ProviderSlice';
import { saveDate, saveTime, cleaningAppts } from '../redux/appointments/AppointmentSlice';
import StaticCalendar from '../components/miscComponents/StaticCalendar';
import NewApptForm from '../components/miscComponents/NewApptForm';
import AvailableTime from '../components/miscComponents/AvailableTime';
import DisplayClients from '../components/client/DisplayClients';
import ProviderInfoForAppt from '../components/provider/ProviderInfoForAppt';
import Alert from '@mui/material/Alert';
import './NewApptView.css'

import Button from '@mui/material/Button';

export default function NewAppt() {
    const dispatch = useDispatch();
    const { clients } = useSelector((state) => state.clients)
    const { providers, providerSelected } = useSelector((state) => state.providers)
    const { availableTime, dateAndTimeSelected, status, apptToEdit } = useSelector((state) => state.appointments)
    const [flag, setFlag] = useState(false);

    useEffect(() => {

        /**if an appointment is to be updated, so we will get this appt information here */
        if(apptToEdit.id>=0){
            dispatch(getProviderInfo(apptToEdit.providerId))
            dispatch(saveDate(new Date(apptToEdit.apptDate)))
            dispatch(saveTime(apptToEdit.starTime))
        }
            
        dispatch(getAllProviders());
        
       // dispatch(getAllProviders());
        //TODO check the effects of bellow comment
        //dispatch(cleaningAppts());
    }, [dispatch])

    const checkAvailableAppts = (data) => {
        dispatch(getAvailableAppts(data))
    }

    const getSelectedProviderInfo = (info) => {
        dispatch(getProviderInfo(info))
    }

    const getApptDate = (date) => {
        dispatch(saveDate(date))
    }

    const getApptTime = (time) => {
        dispatch(saveTime(time))
    }

    const onSaveAppt = () => {
        
        /**if an appointment is to be updated, we will update it here ELSE we are going to save a new one*/
        if(apptToEdit.id>=0){
            const appt = {
                id:apptToEdit.id,
                patientId: clients, // chenged here
                providerId: providerSelected[0],
                starTime: dateAndTimeSelected.time,
                apptDate: new Date(dateAndTimeSelected.date)
            }

           dispatch(updateAppt(appt))
           dispatch(resetProvider())
        }else{

            const appt = {
                patientId: clients, // chenged here
                providerId: providerSelected[0],
                starTime: dateAndTimeSelected.time,
                apptDate: new Date(dateAndTimeSelected.date)
            }
    
            dispatch(saveAppt(appt))

        }
          

        if (status === 'success') {
            dispatch(cleaningAppts());
            setFlag(true)
        }
    }

    const apptToUpdateInfo = () => {
        return (
        <div className="NewAppt-updateAppt">
            <Alert variant="filled" severity="info">
            You are updating the appointment with the {apptToEdit.providerId.speciality+' '}
                {' ' + apptToEdit.providerId.firstName + ' ' + apptToEdit.providerId.lastName + ' '}
                at {new Date(apptToEdit.apptDate + 'T' + apptToEdit.starTime).toLocaleString('en-US')}
             </Alert>
        </div>
        )

    }


    return (
        <div className="NewAppt">
            <DisplayClients client={clients} />
            {(apptToEdit.id >= 0) && apptToUpdateInfo()}
            <NewApptForm providers={providers} onCheckAvailableTime={checkAvailableAppts} onGetProviderInfo={getSelectedProviderInfo} />
            {(availableTime.length > 0) &&
                <div className="NewAppt-result">
                    <div className="NewAppt-availability">
                        <ProviderInfoForAppt provider={providerSelected[0]} />
                        <StaticCalendar availableDates={availableTime} getApptDate={getApptDate} />
                        <AvailableTime availableTimeSlot={availableTime} getApptTime={getApptTime} dateSelected={dateAndTimeSelected.date} />
                    </div>
                    <div className="NewAppt-saveBtn">
                        <Button variant="contained" size="small" onClick={onSaveAppt}>Schedule</Button>
                    </div>
                </div>
            }
            {flag &&
                <div className="NewAppt-saveAlert" >
                    <Alert severity="success" variant="filled">Appointment saved with success!</Alert>
                </div>
            }
        </div>
    )
}
