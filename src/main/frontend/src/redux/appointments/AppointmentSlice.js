import { createSlice} from '@reduxjs/toolkit';
import {getAppts,
     getApptsByCustomer, 
     getApptsByProvider,
     getApptsNoFilter,
     getAvailableAppts,
     saveAppt, updateAppt,deleteAppt} from './AppointmentThunk';


const initialState= {
    appointments:[],
    availableTime:[],
    apptToEdit:[],
    dateAndTimeSelected:{
        date:'',
        time:' '
    },
    status: null,
}


const appointmentSlice = createSlice({
    name:'appointment',
    initialState,
    reducers:{
        saveDate: (state,action)=>{
             const data = action.payload
             let dateFormated =''
             if (data){
                const year = data.getFullYear();
                const month = data.getMonth() + 1;
                let day =data.getDate();
        
                if (day.toString().length<2){
                    day ='0'+day
                } 
              dateFormated = year + '-' + month + '-' + day;
             }
            state.dateAndTimeSelected.date= dateFormated
        },
        saveTime:(state,action)=>{
            state.dateAndTimeSelected.time=action.payload
        },
        cleaningAppts:(state)=>{
            return initialState 
        },
        apptToEdit:(state,action)=>{
            state.apptToEdit=action.payload
        }
        
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
        .addCase(getAvailableAppts.pending, (state)=>{
            state.status='loading'
        })
        .addCase(getAvailableAppts.fulfilled, (state, action)=>{
            state.status='success';
            state.availableTime=action.payload.data;
        })
        .addCase(getAvailableAppts.rejected,(state)=>{
            state.status ='rejected';
        })
        .addCase(saveAppt.pending, (state)=>{
            state.status='loading'
        })
        .addCase(saveAppt.fulfilled, (state, action)=>{
            state.status='success';
        })
        .addCase(saveAppt.rejected,(state)=>{
            state.status ='rejected';
        })
        .addCase(updateAppt.fulfilled, (state, action)=>{
            state.status='success';
        })
        .addCase(updateAppt.rejected,(state,action)=>{
            state.status ='rejected';
        })
        .addCase(deleteAppt.fulfilled, (state)=>{
            state.status='deleted';
        })
        .addCase(deleteAppt.rejected,(state)=>{
            state.status ='rejected';
        })
    }

})

export const {saveDate, saveTime,cleaningAppts,apptToEdit} = appointmentSlice.actions
export default appointmentSlice.reducer; 