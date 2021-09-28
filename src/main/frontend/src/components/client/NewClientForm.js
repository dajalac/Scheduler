import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Button from '@mui/material/Button';
import DatePicker from '@mui/lab/DatePicker';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './NewClientForm.css';




export default function NewClientForm() {
    const [birthday, setBirthday] = useState(null);
    const [phone, setPhone] = useState();
    const [usaStates, setUsaState] = useState('');

    const handleBday = ((event) => {
        const date = new Date(event);
        const dateFormated = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate(); // to format the date to go the db
        setBirthday(dateFormated)
    })

    

    const handleStates = (event) => {
        setUsaState(event.target.value);
    };

    return (
        <div className="NewClientForm">
            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="First name"
                variant="outlined"
                required />
            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                required />

            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="Member number"
                variant="outlined"
                required />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="birthday"
                    value={birthday}
                    onChange={handleBday}
                    renderInput={(params) => <TextField {...params} sx={{ width: 250 }} required />}
                />
            </LocalizationProvider>

            <div className="NewClientForm-phone" data-placeholder="in case this div is empty" >
                <PhoneInput
                    placeholder="Enter phone number"
                    defaultCountry='US'
                    value={phone}
                    onChange={setPhone} />
            </div>
            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="e-mail"
                variant="outlined"
            />
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Satate</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={usaStates}
                    label="State"
                    onChange={handleStates}
                >
                    <MenuItem value={'AL'}>Alabama</MenuItem>
                    <MenuItem value={'AK'}>Alaska</MenuItem>
                    <MenuItem value={'AZ'}>Arizona</MenuItem>
                    <MenuItem value={'AR'}>Arkansas</MenuItem>
                    <MenuItem value={'CA'}>California</MenuItem>
                    <MenuItem value={'CO'}>Colorado</MenuItem>
                    <MenuItem value={'CT'}>Connecticut</MenuItem>
                    <MenuItem value={'DE'}>Delaware</MenuItem>
                    <MenuItem value={'DC'}>District Of Columbia</MenuItem>
                    <MenuItem value={'FL'}>Florida</MenuItem>
                    <MenuItem value={'GA'}>Georgia</MenuItem>
                    <MenuItem value={'HI'}>Hawaii</MenuItem>
                    <MenuItem value={'ID'}>Idaho</MenuItem>
                    <MenuItem value={'IL'}>Illinois</MenuItem>
                    <MenuItem value={'IN'}>Indiana</MenuItem>
                    <MenuItem value={'IA'}>Iowa</MenuItem>
                    <MenuItem value={'KS'}>Kansas</MenuItem>
                    <MenuItem value={'KY'}>Kentucky</MenuItem>
                    <MenuItem value={'LA'}>Louisiana</MenuItem>
                    <MenuItem value={'ME'}>Maine</MenuItem>
                    <MenuItem value={'MD'}>Maryland</MenuItem>
                    <MenuItem value={'MA'}>Massachusetts</MenuItem>
                    <MenuItem value={'MI'}>Michigan</MenuItem>
                    <MenuItem value={'MN'}>Minnesota</MenuItem>
                    <MenuItem value={'MS'}>Mississippi</MenuItem>
                    <MenuItem value={'MO'}>Missouri</MenuItem>
                    <MenuItem value={'MT'}>Montana</MenuItem>
                    <MenuItem value={'NE'}>Nebraska</MenuItem>
                    <MenuItem value={'NV'}>Nevada</MenuItem>
                    <MenuItem value={'NH'}>New Hampshire</MenuItem>
                    <MenuItem value={'NJ'}>New Jersey</MenuItem>
                    <MenuItem value={'NM'}>New Mexico</MenuItem>
                    <MenuItem value={'NY'}>New York</MenuItem>
                    <MenuItem value={'NC'}>North Carolina</MenuItem>
                    <MenuItem value={'ND'}>North Dakota</MenuItem>
                    <MenuItem value={'OH'}>Ohio</MenuItem>
                    <MenuItem value={'OK'}>Oklahoma</MenuItem>
                    <MenuItem value={'OR'}>Oregon</MenuItem>
                    <MenuItem value={'PA'}>Pennsylvania</MenuItem>
                    <MenuItem value={'RI'}>Rhode Island</MenuItem>
                    <MenuItem value={'SC'}>South Carolina</MenuItem>
                    <MenuItem value={'SD'}>South Dakota</MenuItem>
                    <MenuItem value={'TN'}>Tennessee</MenuItem>
                    <MenuItem value={'TX'}>Texas</MenuItem>
                    <MenuItem value={'UT'}>Utah</MenuItem>
                    <MenuItem value={'VT'}>Vermont</MenuItem>
                    <MenuItem value={'VA'}>Virginia</MenuItem>
                    <MenuItem value={'WA'}>Washington</MenuItem>
                    <MenuItem value={'WV'}>West Virginia</MenuItem>
                    <MenuItem value={'WI'}>Wisconsin</MenuItem>
                    <MenuItem value={'WY'}>Wyoming</MenuItem>
                </Select>
            </FormControl>
            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="City"
                variant="outlined"
                />
            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="Address"
                variant="outlined"
                 />
            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="zip code"
                variant="outlined"
                />

        </div>
    )
}
