import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer  from './AppointmentSlice';

export const store = configureStore({
  reducer: {
        appointments: appointmentReducer 
  },
})