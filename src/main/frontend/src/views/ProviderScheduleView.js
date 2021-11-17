import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetClient } from '../redux/clients/ClientSlice';
import { resetProvider, getProviderInfo } from '../redux/provider/ProviderSlice';
import { getProviderByName } from '../redux/provider/ProviderThunk';
import{apptToEdit} from '../redux/appointments/AppointmentSlice';
import{ getClientById} from '../redux/clients/ClientThunk';
import { getApptsByProvider } from '../redux/appointments/AppointmentThunk';
import ManageAppts from '../components/client/ManageAppts';
import ProviderInfoCard from '../components/provider/ProviderInfoCard';
import ProviderSearchByName from '../components/provider/ProviderSearchByName';
import { deleteAppt } from '../redux/appointments/AppointmentThunk';

import './ProviderScheduleView.css'

export default function ProviderSchedule() {
    const dispatch = useDispatch();
    const { status, providers, providerSelected } = useSelector((state) => state.providers)
    const { appointments } = useSelector((state) => state.appointments)
    const [flag, setFlag] = useState(false)

   
    useEffect(() => {
        dispatch(resetProvider())
        dispatch(resetClient())
        setFlag(true)
    }, [])

   


    const getProviderName = (name) => {
        dispatch(resetProvider())
        dispatch(getProviderByName(name))
    }
    const getSelectedProviderInfo = (info) => {
        dispatch(getProviderInfo(info))
        dispatch(getApptsByProvider(info.firstName + ' ' + info.lastName))
    }

    const selectApptToUpdate=(appt)=>{
        dispatch(apptToEdit(appt))
    }
    const selectClientToUpdate=(id)=>{
        dispatch(getClientById(id))
        return true
    }

    const displayProviderInfo = () => {

        if (status === 'fulfilled' && providers.length > 0) {
            let toDisplay = []
            providers.map((provider) => {
                toDisplay.push(<ProviderInfoCard provider={provider} onSelectProvider={getSelectedProviderInfo} />)
            })
            return toDisplay
        }
        else if (status === null) {
            return 'Search for a provider'
        } else {
            return 'Provider not found in our system'
        }

    }

    const deleteAppointment=(appt)=>{
        dispatch(deleteAppt(appt))
    }

    const displaySelectedProviderAgenda = () => {
        let toDisplay = []
     if(Object.keys(providerSelected).length > 0 && flag){
        toDisplay.push(<ProviderInfoCard provider={providerSelected} onSelectProvider={getSelectedProviderInfo} disableBtn={true} />)
        toDisplay.push(<div className="ProviderSchedule-title">Next Appointments:</div>)

        /**to get just the upcomming appts */
        const today = new Date().toLocaleDateString('fr-CA') // for the format yyy-mm-dd
        const timeNow = new Date().toLocaleTimeString('en-US', { hour12: false });

        appointments.map((appt) => {
            if ((appt.apptDate === today && appt.starTime > timeNow)) {
                toDisplay.push(
                               <ManageAppts
                               appointment={appt}
                               selectApptToUpdate={selectApptToUpdate}
                               selectClientToUpdate={selectClientToUpdate}
                               deleteAppt={deleteAppointment}
                               displayProviderInfo = {false} />)
            }
            if ((appt.apptDate > today)) {
                toDisplay.push( 
                                <ManageAppts appointment={appt}
                                selectApptToUpdate={selectApptToUpdate}
                                selectClientToUpdate={selectClientToUpdate}
                                deleteAppt={deleteAppointment} 
                                displayProviderInfo = {false}/>)
            }
        })
    
        return toDisplay
      }
    }


    return (
        <div className="ProviderSchedule">
            <ProviderSearchByName onGetProvider={getProviderName} />
            {providerSelected.length===0 ? displayProviderInfo() : displaySelectedProviderAgenda()}
        </div>
    )
}
