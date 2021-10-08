import { createSlice} from '@reduxjs/toolkit';
import {getAppts,
     getApptsByCustomer, 
     getApptsByProvider,
     getApptsNoFilter} from './AppointmentThunk';



const appointmentSlice = createSlice({
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
            state.appointments=action.payload.data;
        })
        .addCase(getAppts.rejected,(state)=>{
            state.status ='rejected';
        })
        .addCase(getApptsByProvider.pending, (state)=>{
            state.status='loading'
        })
        .addCase(getApptsByProvider.fulfilled, (state, action)=>{
            state.status='success';
            state.appointments=action.payload.data;
        })
        .addCase(getApptsByProvider.rejected,(state)=>{
            state.status ='rejected';
        })
        .addCase(getApptsByCustomer.pending, (state)=>{
            state.status='loading'
        })
        .addCase(getApptsByCustomer.fulfilled, (state, action)=>{
            state.status='success';
            state.appointments=action.payload.data;
        })
        .addCase(getApptsByCustomer.rejected,(state)=>{
            state.status ='rejected';
        })
        .addCase(getApptsNoFilter.pending, (state)=>{
            state.status='loading'
        })
        .addCase(getApptsNoFilter.fulfilled, (state, action)=>{
            state.status='success';
            state.appointments=action.payload.data;
        })
        .addCase(getApptsNoFilter.rejected,(state)=>{
            state.status ='rejected';
        })

           
    }

})

export default appointmentSlice.reducer; 