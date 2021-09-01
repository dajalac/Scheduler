package com.dajalac.AppointmentSchedule.controller;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dajalac.AppointmentSchedule.model.Appointment;
import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.service.AppointmentService;

@RestController
@RequestMapping("/appointment")
public class AppointmentController {
	
	final AppointmentService appointmentService;

	@Autowired
	public AppointmentController(AppointmentService appointmentService) {
		this.appointmentService = appointmentService;
	}
	
	@GetMapping
	public ResponseEntity< List <LocalDateTime> > getPatients(){
		return ResponseEntity.ok().body(appointmentService.getAvailableAppts());
	}
	

}
