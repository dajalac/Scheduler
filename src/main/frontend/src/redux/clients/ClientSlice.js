import { createSlice} from '@reduxjs/toolkit';
import{getClientBynameAndBday,
     getClientByMemberNumber,
     addNewClient,updateClient} from './ClientThunk';

const initialState={
    clients:[],
    status: null,
}

const clientSlice = createSlice({
    name:'client',
    initialState,
    reducers:{
        resetClient:(state)=>{
            return initialState 
        }
    },
    extraReducers: builder=>{
        builder
        .addCase(getClientBynameAndBday.pending, (state)=>{
            state.status='loading';
        })
        .addCase(getClientBynameAndBday.fulfilled, (state, action)=>{
            state.status='success';
            state.clients=action.payload.data;
        })
        .addCase(getClientBynameAndBday.rejected, (state)=>{
            state.status='rejected';
        })
        .addCase(getClientByMemberNumber.pending, (state)=>{
            state.status='loading';
        })
        .addCase(getClientByMemberNumber.fulfilled, (state, action)=>{
            state.status='success';
            state.clients=action.payload.data;
        })
        .addCase(getClientByMemberNumber.rejected, (state)=>{
            state.status='rejected';
        })
        .addCase(addNewClient.fulfilled, (state, action)=>{
            state.status='success';
        })
        .addCase(addNewClient.rejected, (state)=>{
            state.status='rejected';
        })
        .addCase(updateClient.fulfilled, (state)=>{
            state.status='success';
        })
        .addCase(updateClient.rejected, (state)=>{
            state.status='rejected';
        })



    }
})

export const {resetClient} = clientSlice.actions
export default clientSlice.reducer; 