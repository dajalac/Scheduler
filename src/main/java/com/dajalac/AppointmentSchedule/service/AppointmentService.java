package com.dajalac.AppointmentSchedule.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
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
	
	public List<String>getAvailableAppts(String fromDate, String toDate, int providerId){
		
		return appointmentRepository.findAppointmentAvailable(fromDate,toDate,providerId);
	}
	  
	
	// to format date
	public LocalDate stringToDate (String date) {
		LocalDate formatedDate = LocalDate.parse(date, DateTimeFormatter.ofPattern("yyyy-MM-dd"));
		return formatedDate;
	}
}
