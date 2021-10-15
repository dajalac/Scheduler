import axios from 'axios';
import {createAsyncThunk  } from '@reduxjs/toolkit';


export const getAllProviders = createAsyncThunk(
    'provider/getAllProviders',
    async( )=>{
        const response = await axios.get('http://localhost:8080/provider');
        return response
    }
)



