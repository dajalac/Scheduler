package com.dajalac.AppointmentSchedule.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dajalac.AppointmentSchedule.model.Appointment;
import com.dajalac.AppointmentSchedule.repository.AppointmentRepository;

@Service
public class AppointmentService {

	final AppointmentRepository appointmentRepository;

	@Autowired
	public AppointmentService(AppointmentRepository appointmentRepository) {
		this.appointmentRepository = appointmentRepository;
	}
	
	public List<LocalDateTime>getAvailableAppts(){
		return appointmentRepository.findAppointmentAvailable();
	}
	  
}
