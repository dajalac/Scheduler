import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { resetClient } from '../redux/clients/ClientSlice';
import { resetProvider, getProviderInfo } from '../redux/provider/ProviderSlice';
import { getProviderByName } from '../redux/provider/ProviderThunk';
import { getApptsByProvider } from '../redux/appointments/AppointmentThunk';
import ManageAppts from '../components/client/ManageAppts';
import ProviderInfoCard from '../components/provider/ProviderInfoCard';
import ProviderSearchByName from '../components/provider/ProviderSearchByName';

import './ProviderScheduleView.css'

export default function ProviderSchedule() {
    const dispatch = useDispatch();
    const { status, providers, providerSelected } = useSelector((state) => state.providers)
    const { appointments } = useSelector((state) => state.appointments)


    useEffect(() => {
        dispatch(resetClient())
        dispatch(resetProvider())
    }, [dispatch])

    const getProviderName = (name) => {
        dispatch(resetProvider())
        dispatch(getProviderByName(name))
    }
    const getSelectedProviderInfo = (info) => {
        dispatch(getProviderInfo(info))
        console.log(info.firstName + ' ' + info.lastName)
        dispatch(getApptsByProvider(info.firstName + ' ' + info.lastName))
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

    const displaySelectedProviderAgenda = () => {
        let toDisplay = []

 
        toDisplay.push(<ProviderInfoCard provider={providerSelected} onSelectProvider={getSelectedProviderInfo} disableBtn={true} />)
        toDisplay.push(<div className="ProviderSchedule-title">Next Appointments:</div>)

        /**to get just the upcomming appts */
        const today = new Date().toLocaleDateString('fr-CA') // for the format yyy-mm-dd
        const timeNow = new Date().toLocaleTimeString('en-US', { hour12: false });

        appointments.map((appt) => {
            if ((appt.apptDate === today && appt.starTime > timeNow)) {
                toDisplay.push(<ManageAppts appointment={appt} />)
            }
            if ((appt.apptDate > today)) {
                toDisplay.push(<ManageAppts appointment={appt} />)
            }
        })

        return toDisplay

    }


    return (
        <div className="ProviderSchedule">
            <ProviderSearchByName onGetProvider={getProviderName} />
            {/* {displayProviderInfo()}
            <div className="ProviderSchedule-title">Next Appointments:</div>
            {/**here you will pass the client name instead of the provider 
            <ManageAppts/>*/}
            {(providerSelected.length === 0) ? displayProviderInfo() : displaySelectedProviderAgenda()}
        </div>
    )
}
