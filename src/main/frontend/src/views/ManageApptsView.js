import React, {useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DisplayClients from '../components/client/DisplayClients';
import ManageAppts from '../components/client/ManageAppts';
import{apptToEdit} from '../redux/appointments/AppointmentSlice';
import{setClient} from '../redux/clients/ClientSlice';
import{ getClientById} from '../redux/clients/ClientThunk';
import { deleteAppt } from '../redux/appointments/AppointmentThunk';
import './ManageApptsView.css';

export default function ManageApptsView() {
    const dispatch = useDispatch();
    const { clients} = useSelector((state) => state.clients)
    // const { status} = useSelector((state) => state.appointments)

    useEffect(() => {
       dispatch(getClientById(clients.id)) // get the client from the db again, but with the updates saved 
    }, []) // need to make it update when appt is deleted

    const deleteAppointment=(appt)=>{
        dispatch(deleteAppt(appt))
    }

    const selectApptToUpdate=(appt)=>{
        dispatch(apptToEdit(appt))
    }

    const selectClientToUpdate=(id)=>{
        return false
        //dispatch(getClientById(id))
    }

    //TODO fix the order in which the appointments are displayed. I want in ACS order
   
    const getUpcommingAppts=()=>{
        const today = new Date().toLocaleDateString('fr-CA') // for the format yyy-mm-dd
        const timeNow = new Date().toLocaleTimeString('en-US', { hour12: false });
        let toDisplay=[]

        clients.appointment.map((appt)=>{
            if((appt.apptDate === today && appt.starTime>timeNow)){
                toDisplay.push(<ManageAppts appointment={appt}  
                                selectApptToUpdate={selectApptToUpdate}
                                selectClientToUpdate={selectClientToUpdate}
                                deleteAppt={deleteAppointment}
                                displayProviderInfo = {true}/>)
            }
            if((appt.apptDate >today)){
                toDisplay.push(<ManageAppts appointment={appt}
                               selectApptToUpdate={selectApptToUpdate}
                               selectClientToUpdate={selectClientToUpdate}
                               deleteAppt={deleteAppointment}
                               displayProviderInfo = {true}/>)
            }
  
        })

        return toDisplay

    }


    return (
        <div className="ManageApptsView">
            <DisplayClients client={clients}/>
            {getUpcommingAppts()}
        </div>
    )
}
