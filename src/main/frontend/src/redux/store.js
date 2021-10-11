import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer  from './appointments/AppointmentSlice';
import clientReducer from './clients/ClientSlice'

export const store = configureStore({
  reducer: {
        appointments: appointmentReducer,
        clients: clientReducer
  },
})