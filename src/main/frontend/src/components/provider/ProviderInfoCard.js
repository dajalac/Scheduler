import React from 'react';
import Avatar from '@mui/material/Avatar';
import './ProviderInfoCard.css'

export default function ProviderInfoCard() {
    return (
        <div className="ProviderInfoCard">
            {/**HERE will be provider photo */}
            <Avatar> FK</Avatar>
            <div className="ProviderInfoCard-info">
            <div>Dr. Friedrich Keppeler</div>
            <div>Family Doctor</div>
            <div>e-email: Keppeler@gmail.com</div>
            <div>Phone: (123) 1234-1345</div>
            </div>
        </div>
    )
}
