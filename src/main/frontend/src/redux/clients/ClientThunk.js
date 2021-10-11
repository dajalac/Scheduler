import axios from 'axios';
import {createAsyncThunk  } from '@reduxjs/toolkit';


export const getClientBynameAndBday = createAsyncThunk(
    'client/getClientBynameAndBday',
    async(data)=>{
        const response = await axios.post('http://localhost:8080//patient//serachByNameBirthday',{
            name: data.name, birthda: data.birthday });
        return response
    }
)

export const getClientByMemberNumber = createAsyncThunk(
    'client/getClientByMemberNumber',
    async(data)=>{
        const response = await axios.post('http://localhost:8080//patient/serachByMemberNumber',{memberNumber:data});
        return response
    }
)

