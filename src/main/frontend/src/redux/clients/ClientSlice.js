import { createSlice} from '@reduxjs/toolkit';
import{getClientBynameAndBday,
     getClientByMemberNumber,
     addNewClient,updateClient,getClientById } from './ClientThunk';

const initialState={
    clients:null,
    status: null,
}

const clientSlice = createSlice({
    name:'client',
    initialState,
    reducers:{
        resetClient:(state)=>{
            return initialState 
        },
        setClient:(state,action)=>{
           state.clients=action.payload
          // console.log(action.payload)
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
            state.status='update succeeded';
        })
        .addCase(updateClient.rejected, (state)=>{
            state.status=' update rejected';
        })
        .addCase(getClientById.fulfilled, (state,action)=>{
            state.status='fulfilled';
            state.clients=action.payload.data;
        })
        .addCase(getClientById.rejected, (state)=>{
            state.status='rejected';
        })



    }
})

export const {resetClient, setClient} = clientSlice.actions
export default clientSlice.reducer; 