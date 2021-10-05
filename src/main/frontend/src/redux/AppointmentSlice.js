import axios from 'axios';
import { createSlice, createAsyncThunk  } from '@reduxjs/toolkit';

export const getAppts = createAsyncThunk(
    'appointments/getAppts',
    async(dispatch)=>{
        const response= await axios.get('');
        return response; 
    }
)

export const appointmentSlice = createSlice({
    name:'appointment',
    initialState:{
        appointments:[],
        status: null,
    },
    reducers:{

    },
    extraReducers: builder=>{
        builder.addCase()
    }

})