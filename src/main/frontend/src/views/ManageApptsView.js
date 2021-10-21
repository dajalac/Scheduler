import React, {useEffect}  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import DisplayClients from '../components/client/DisplayClients';
import ManageAppts from '../components/client/ManageAppts';
import './ManageApptsView.css';

export default function ManageApptsView() {
    const dispatch = useDispatch();
    const { clients, status} = useSelector((state) => state.clients)

   
    const getUpcommingAppts=()=>{
        const today = new Date().toLocaleDateString('fr-CA') // for the format yyy-mm-dd
        const timeNow = new Date().toLocaleTimeString('en-US', { hour12: false });
        let toDisplay=[]

        clients.appointment.map((appt)=>{
            if((appt.apptDate === today && appt.starTime>timeNow)){
                toDisplay.push(<ManageAppts appointment={appt}/>)
            }
            if((appt.apptDate >today)){
                toDisplay.push(<ManageAppts appointment={appt}/>)
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
