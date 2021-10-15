import { createSlice} from '@reduxjs/toolkit';
import {getAllProviders} from './ProviderThunk';

const providerSlice = createSlice({
    name:'provider',
    initialState:{
        providers:[],
        providerSelected:{},
        status: null,
    },
    reducers:{
        getProviderInfo: (state, action)=>{
            state.providerSelected = action.payload
        }
    },
    extraReducers: builder=>{
        builder
        .addCase(getAllProviders.pending, (state)=>{
            state.status='loading';
        })
        .addCase(getAllProviders.fulfilled, (state, action)=>{
            state.status='success';
            state.providers=action.payload.data;
        })
        .addCase(getAllProviders.rejected, (state)=>{
            state.status='rejected';
        })
    }
})

export const {getProviderInfo} = providerSlice.actions
export default providerSlice.reducer;