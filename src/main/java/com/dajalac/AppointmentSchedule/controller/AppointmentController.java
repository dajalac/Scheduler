package com.dajalac.AppointmentSchedule.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
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
	public ResponseEntity< List <String> > getPatients(@RequestBody Map<String, Object> payload ){
			
		return ResponseEntity.ok().body(appointmentService.getAvailableAppts(
				String.valueOf(payload.get("fromDate")),
				String.valueOf(payload.get("toDate")),
				Integer.parseInt(String.valueOf(payload.get("providerId")))
				));
	}
	

}
