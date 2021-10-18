import { createSlice} from '@reduxjs/toolkit';
import {getAllProviders} from './ProviderThunk';

const  initialState={
    providers:[],
    providerSelected:{},
    status: null,
}

const providerSlice = createSlice({
    name:'provider',
    initialState,
    reducers:{
        getProviderInfo: (state, action)=>{
            state.providerSelected = action.payload
        },
        resetProvider :(state)=>{
            return initialState
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

export const {getProviderInfo,resetProvider} = providerSlice.actions
export default providerSlice.reducer;