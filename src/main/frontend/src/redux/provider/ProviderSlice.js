import { createSlice} from '@reduxjs/toolkit';
import {getAllProviders,getProviderByName} from './ProviderThunk';

const  initialState={
    providers:[],
    providerSelected:[],
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
        .addCase(getProviderByName.fulfilled, (state, action)=>{
            state.status='fulfilled';
            state.providers=action.payload.data;
        })
        .addCase(getProviderByName.rejected, (state)=>{
            state.status='not found';
        })
    }
})

export const {getProviderInfo,resetProvider} = providerSlice.actions
export default providerSlice.reducer;