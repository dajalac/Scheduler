import { createSlice} from '@reduxjs/toolkit';
import {getAllProviders} from './ProviderThunk';

const providerSlice = createSlice({
    name:'provider',
    initialState:{
        providers:[],
        status: null,
    },
    reducers:{

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

export default providerSlice.reducer;