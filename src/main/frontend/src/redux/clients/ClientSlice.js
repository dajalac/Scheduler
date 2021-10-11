import { createSlice} from '@reduxjs/toolkit';
import{getClientBynameAndBday, getClientByMemberNumber   } from './ClientThunk';


const clientSlice = createSlice({
    name:'client',
    initialState:{
        clients:[],
        status: null,
    },
    reducers:{

    },
    extraReducers: builder=>{
        builder
        .addCase(getClientBynameAndBday.pending, (state)=>{
            state.status='loading';
        })
        .addCase(getClientBynameAndBday.fullfiled, (state, action)=>{
            state.status='success';
            state.clients=action.payload.data;
        })
        .addCase(getClientBynameAndBday.rejected, (state)=>{
            state.status='rejected';
        })
        .addCase(getClientByMemberNumber.pending, (state)=>{
            state.status='loading';
        })
        .addCase(getClientByMemberNumber.fullfiled, (state, action)=>{
            state.status='success';
            state.clients=action.payload.data;
        })
        .addCase(getClientByMemberNumber.rejected, (state)=>{
            state.status='rejected';
        })



    }
})


export default clientSlice.reducer; 