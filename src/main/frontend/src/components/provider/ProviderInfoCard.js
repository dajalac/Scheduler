import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import './ProviderInfoCard.css'

export default function ProviderInfoCard({ provider,onSelectProvider,disableBtn}) {
    const firstNameLetter = provider.firstName.charAt(0);
    const lastNameLetter = provider.lastName.charAt(0);

    const onSeeAgenda=()=>{
        onSelectProvider(provider)
    }

    return (
        <div className="ProviderInfoCard">
            <Avatar sx={{ width: 56, height: 56 }}>{firstNameLetter + lastNameLetter}</Avatar>
            <div className="ProviderInfoCard-info">
                <div>Name: {provider.firstName + ' ' + provider.lastName}</div>
                <div>Speciality: {provider.speciality}</div>
                <div>e-mail: {provider.email}</div>
                <div>phone: {provider.phone}</div>
            </div>
            <Button variant="contained"
                     size='small'
                      sx={{ height: '36px' }}
                      disabled={disableBtn}
                       onClick={onSeeAgenda}>See Agenda</Button>
        </div>
    )
}
