import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer  from './appointments/AppointmentSlice';
import clientReducer from './clients/ClientSlice';
import providerReducer from './provider/ProviderSlice';

export const store = configureStore({
  reducer: {
        appointments: appointmentReducer,
        clients: clientReducer,
        providers: providerReducer
  },
})