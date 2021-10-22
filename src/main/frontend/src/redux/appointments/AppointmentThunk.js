import axios from 'axios';
import {createAsyncThunk  } from '@reduxjs/toolkit';

export const getAppts = createAsyncThunk(
    'appointments/getAppts',
    async()=>{
        const response= await axios.get('http://localhost:8080/appointment');
        return response; 
    }
)

export const getApptsByCustomer = createAsyncThunk(
    'appointments/getApptsByCustomer',
    async(data)=>{
        const response = await axios.post('http://localhost:8080/appointment//searchByPatient',{name:data});
        return response
    }
)


export const getApptsByProvider = createAsyncThunk(
    'appointments/getApptsByProvider',
    async(data)=>{
        const response = await axios.post('http://localhost:8080/appointment//searchByProvider',{name:data});
        return response
    }
)

export const getApptsNoFilter = createAsyncThunk(
    'appointments/getApptsNoFilter',
    async(data)=>{
        const response = await axios.post('http://localhost:8080/appointment//searchByNoFilter',{name:data});
        return response
    }
)

export const getAvailableAppts = createAsyncThunk(
    'appointments/getAvailableAppts ',
    async(data)=>{
        const response = await axios.post('http://localhost:8080/appointment/availableAppts',{providerId:data.id,
         fromTime: data.fromTime,
         toTime:data.toTime});
        return response
    }
)

export const saveAppt = createAsyncThunk(
    'appointments/saveAppt ',
    async(data)=>{
       const response = await axios.post('http://localhost:8080/appointment/newAppointment',data);

        return response
    }
)

export const updateAppt = createAsyncThunk(
    'appointments/ updateAppt',
    async(data)=>{
        console.log(data)
       const response = await axios.put('http://localhost:8080/appointment/updateAppt',data);

        return response
    }
)

export const deleteAppt = createAsyncThunk(
    'appointments/ deleteAppt',
    async(appointment)=>{
        console.log(appointment)
       const response = await axios.delete('http://localhost:8080/appointment/deleteAppt', {data:appointment});

        return response
    }
)


