import { configureStore } from '@reduxjs/toolkit';
import appointmentReducer  from './appointments/AppointmentSlice';

export const store = configureStore({
  reducer: {
        appointments: appointmentReducer 
  },
})