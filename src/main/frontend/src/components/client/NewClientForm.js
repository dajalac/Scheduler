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


export default function NewClientForm({saveClient, client}) {
    const initialState= {value:'', error:false, errorMsg:''}
    const [firstName, setFirstName] = useState(initialState);
    const [lastName, setLastName] = useState(initialState);
    const [email, setEmail] = useState(initialState);
    const [city, setCity] = useState(initialState);
    const [address, setAddress] =useState(initialState);
    const [zipcode, setZipCode] = useState(initialState);
    const [memberNumber, setMemberNumber] = useState(initialState);
    const [birthday, setBirthday] = useState({value:null, error:false, errorMsg:''});
    const [phone, setPhone] = useState();
    const [usaStates, setUsaState] = useState('');
    const errorList=[firstName, lastName, memberNumber, birthday, email, city, address,
                     zipcode];


    useEffect(() => {
        if(client){
            
            setFirstName({...firstName, value: client.firstName})
            setLastName({...lastName, value:client.lastName})
            setEmail({...email, value:client.email})
            setCity({...city, value:client.city})
            setAddress({...address, value:client.address})
            setZipCode({...zipcode, value:client.zipCode})
            setMemberNumber({...memberNumber, value:client.memberNumber})
            setBirthday({...birthday, value:client.birthday})
            setPhone(client.phone)
            setUsaState(client.state)
         }          
    }, [client])
    

    const desableSaveBtn=()=>{

        let flag = false
        // until 3 because the 4 required fields are in the first 4 positions
        for(let step=0; step<4; step++){
            if (errorList[step].error){
                return flag=true
            }
            if(!errorList[step].error && !errorList[step].value){
                return flag=true
            }
        }
        for(let step=4; step<errorList.length; step++){
            if(errorList[step].error && errorList[step].value)
            return flag = true
        }
        
    }

    const resetFields =()=>{
        setFirstName({...initialState})
        setLastName({...initialState})
        setEmail({...initialState})
        setCity({...initialState})
        setAddress({...initialState})
        setZipCode({...initialState})
        setMemberNumber({...initialState})
        setBirthday({value:null, error:false, errorMsg:''})
        setPhone('')
        setUsaState('')

    }

    const handleBday = ((event) => {
       // const date = new Date(event).toISOString().slice(0, 10)
        
        const errorBday = validators.validateBirthday(event)
        setBirthday({value: event, error: errorBday.error, errorMsg: errorBday.msg })
    })

    const handleStates = (event) => {
        setUsaState(event.target.value);
    };

    const handleFirstName = (event)=>{
        const nameError = validators.validateName(event.target.value);
        setFirstName({ value: event.target.value, error: nameError.error, errorMsg: nameError.msg })
       // desableSaveBtn()
       
    }
    const handleLastName = (event)=>{
        const nameError = validators.validateName(event.target.value);
        setLastName({ value: event.target.value, error: nameError.error, errorMsg: nameError.msg })
        //desableSaveBtn()
    }
    const handleMemberNumber = (event) => {
        const memberNumberError = validators.validateMemberNumber(event.target.value)
        setMemberNumber({ value: event.target.value, error: memberNumberError.error, errorMsg: memberNumberError.msg })
        //desableSaveBtn()
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
        //format birthday date
        const bdayFormated = new Date(birthday.value).toISOString().slice(0, 10)

        saveClient({
            ...client&& {id:client.id},
            memberNumber:memberNumber.value,
            birthday:bdayFormated,
            firstName:firstName.value,
            lastName:lastName.value,
            phone:phone,
            email:email.value,
            address:address.value,
            city:city.value,
            state:usaStates,
            zipCode:zipcode.value})
       
            if(!client){
                resetFields()
            }
           
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
                disabled={client}
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
            <Button variant="contained"
                     color="success"
                    size="large" 
                    sx={{width:'15%'}} 
                    disabled={desableSaveBtn()}
                    onClick={onSave}> Save </Button>
            </div>
        </div>
    )
}
