import React from 'react';
import {Link} from 'react-router-dom';
import './DisplayClients.css';

export default function DisplayClients() {


    return (
        <div className = "displayResults">
          <div className="displayResults-mainInfo">
              <p>Name:  Ana Luz</p>
              <p>Birthday:  05/29/1990</p>
              <p>Member Number: 12345679</p>
          </div>
          <div className="displayResults-extraInfo">
              <p>Phone:  (12)1234-1234</p>
              <p>e-mail: analuz@gmail.com</p>
              <p>Adress: 1523 Holleman, Madison, WI</p>
          </div>
          <Link to= '/ApptSchedule' > Schedule an appointment</Link>

        </div>
    )
}
