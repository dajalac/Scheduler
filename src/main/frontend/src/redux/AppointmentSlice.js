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
        builder
        .addCase(getAppts.pending, (state)=>{
            state.status='loading';
        })
        .addCase(getAppts.fulfilled, (state, action)=>{
            state.status='success';
            state.appointments=action.payload;
        })
        .addCase(getAppts.rejected,(state)=>{
            state.status ='rejected';
        })
    }

})

export default appointmentSlice.reducer; 