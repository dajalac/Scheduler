import React, { useState, useEffect } from 'react';
import * as validators  from '../../utils/Validation';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import './NewClientForm.css';
import { TurnedIn } from '@mui/icons-material';


export default function NewClientForm({addNewClient }) {
    const [firstName, setFirstName] = useState({value:'', error:false, errorMsg:''});
    const [lastName, setLastName] = useState({value:'', error:false, errorMsg:''});
    const [email, setEmail] = useState({value:'', error:false, errorMsg:''});
    const [city, setCity] = useState({value:'', error:false, errorMsg:''});
    const [address, setAddress] =useState({value:'', error:false, errorMsg:''});
    const [zipcode, setZipCode] = useState({value:'', error:false, errorMsg:''});
    const [memberNumber, setMemberNumber] = useState({value:'', error:false, errorMsg:''});
    const [birthday, setBirthday] = useState({value:null, error:false, errorMsg:''});
    const [phone, setPhone] = useState();
    const [usaStates, setUsaState] = useState('');
    const [isBtnDisable, setIsBtnDisable]= useState(true)

    let errorList=[]

    // useEffect(() => {
    //     addNewClient({memberNumber:memberNumber.value,
    //         birthday:birthday,
    //         firstName:firstName.value,
    //         lastName:lastName.value,
    //         phone:phone,
    //         email:email.value,
    //         address:address.value,
    //         city:city.value,
    //         state:usaStates,
    //         zipCode:zipcode.value})
    // }, [])

    const handleBday = ((event) => {
        //const date = new Date(event).toISOString().slice(0, 10)
        
        const errorBday = validators.validateBirthday(event)
        setBirthday({value: event, error: errorBday.error, errorMsg: errorBday.msg })
       

    })

    const handleStates = (event) => {
        setUsaState(event.target.value);
    };

    const handleFirstName = (event)=>{
        const nameError = validators.validateName(event.target.value);
        setFirstName({ value: event.target.value, error: nameError.error, errorMsg: nameError.msg })
    }
    const handleLastName = (event)=>{
        const nameError = validators.validateName(event.target.value);
        setLastName({ value: event.target.value, error: nameError.error, errorMsg: nameError.msg })
    }
    const handleMemberNumber = (event) => {
        const memberNumberError = validators.validateMemberNumber(event.target.value)
        setMemberNumber({ value: event.target.value, error: memberNumberError.error, errorMsg: memberNumberError.msg })
    }
    const handleEmail = (event) => {
        const checkForError = validators.validateEmail(event.target.value)
        setEmail({ value: event.target.value, error: checkForError.error, errorMsg: checkForError.msg })
    }
    const handleCity = (event) => {
        const checkForError = validators.validateCity(event.target.value)
        setCity({ value: event.target.value, error: checkForError.error, errorMsg: checkForError.msg })
    }
    const handleAddress = (event) => {
        const checkForError = validators.validateAddress(event.target.value)
        setAddress({ value: event.target.value, error: checkForError.error, errorMsg: checkForError.msg })
    }
    const handleZipCode = (event) => {
        const checkForError = validators.validateZipCode(event.target.value)
        setZipCode({ value: event.target.value, error: checkForError.error, errorMsg: checkForError.msg })
    }

    const onSave =()=>{
      //  if()
    }


   



    return (
        <div className="NewClientForm">
            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="First name"
                variant="outlined"
                value={firstName.value}
                error ={firstName.error}
                helperText={firstName.errorMsg}
                onChange={handleFirstName}
                required />
            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="Last name"
                variant="outlined"
                value={lastName.value}
                error ={lastName.error}
                helperText={lastName.errorMsg}
                onChange={handleLastName}
                required />

            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="Member number"
                variant="outlined"
                value={memberNumber.value}
                error ={memberNumber.error}
                helperText={memberNumber.errorMsg}
                onChange={handleMemberNumber}
                required />

            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                    label="Birthday"
                    value={birthday.value}
                    onChange={handleBday}
                    renderInput={(params) => <TextField {...params} 
                                            sx={{ width: 250 }}
                                            required
                                            error={birthday.error}
                                            helperText={birthday.errorMsg} />}
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
                value={email.value}
                error ={email.error}
                helperText={email.errorMsg}
                onChange={handleEmail}
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
                value={city.value}
                error ={city.error}
                helperText={city.errorMsg}
                onChange={handleCity}
                />
            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="Address"
                variant="outlined"
                value={address.value}
                error ={address.errorMsg}
                helperText={address.errorMsg}
                onChange={handleAddress}
                 />
            <TextField className="NewClientForm-TextField"
                id="outlined-basic"
                label="zip code"
                variant="outlined"
                value={zipcode.value}
                error ={zipcode.errorMsg}
                helperText={zipcode.errorMsg}
                onChange={handleZipCode}
                />
            <div className="NewClientForm-btn">
            <Button variant="contained" color="success" size="large" sx={{width:'15%'}} disabled={isBtnDisable}> Save </Button>
            </div>
        </div>
    )
}
