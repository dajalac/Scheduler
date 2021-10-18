import { createSlice} from '@reduxjs/toolkit';
import{getClientBynameAndBday,
     getClientByMemberNumber,
     addNewClient} from './ClientThunk';


const clientSlice = createSlice({
    name:'client',
    initialState:{
        clients:[],
        status: null,
        client:{
            memberNumber:'',
            birthday:'',
            firstName:'',
            lastName:'',
            phone:'',
            email:'',
            address:'',
            city:'',
            state:'',
            zipCode:''}

    },
    reducers:{
        setClient:(state,action)=>{
            state.client=action.payload
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
            state.clients=action.payload.data;
        })
        .addCase(addNewClient.rejected, (state)=>{
            state.status='rejected';
        })



    }
})

export const {setClient} = clientSlice.actions
export default clientSlice.reducer; 