import axios from 'axios';
import {createAsyncThunk  } from '@reduxjs/toolkit';


export const getAllProviders = createAsyncThunk(
    'provider/getAllProviders',
    async( )=>{
        const response = await axios.get('http://localhost:8080/provider');
        return response
    }
)

export const getProviderByName = createAsyncThunk(
    'provider/getProviderByName',
    async(data)=>{
        const response = await axios.post('http://localhost:8080/provider/searchByName', {name:data});
        return response
    }
)





