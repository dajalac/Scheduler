import { configureStore } from '@reduxjs/toolkit';
import { appointmentSlice } from './AppointmentSlice';

export const store = configureStore({
  reducer: {
        appointments: appointmentSlice
  },
})