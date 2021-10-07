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

export const getApptsByMemberNumber = createAsyncThunk(
    'appointments/getApptsByMemberNumber',
    async(data)=>{
        const response = await axios.post('http://localhost:8080/appointment//searchByMemberNumber',{memberNumber: data});
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



