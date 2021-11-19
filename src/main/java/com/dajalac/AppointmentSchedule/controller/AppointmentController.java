package com.dajalac.AppointmentSchedule.controller;


import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dajalac.AppointmentSchedule.model.Appointment;
import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.service.AppointmentService;

@RestController
@RequestMapping("/appointment")
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentController {
	
	final AppointmentService appointmentService;

	@Autowired
	public AppointmentController(AppointmentService appointmentService) {
		this.appointmentService = appointmentService;
	}
	
	@GetMapping
	public ResponseEntity< List <Appointment> > getAllAppts(){
		return ResponseEntity.ok().body(appointmentService.getAllAppts());
	}
	
	@PostMapping("/availableAppts")
	public ResponseEntity< List <String[]> > getAvailableAppts(@RequestBody Map<String, Object> payload ){
			
		return ResponseEntity.ok().body(appointmentService.getAvailableAppts(
				Long.parseLong(String.valueOf(payload.get("providerId"))),
				String.valueOf(payload.get("fromTime")),
				String.valueOf(payload.get("toTime"))
				));
	}
	
	
	@PostMapping ("/searchByProvider" )
	public ResponseEntity< List <Appointment> > getApptByProvider(@RequestBody Map<String, Object> payload){
		return ResponseEntity.ok().body(
				appointmentService.getApptByProvider(String.valueOf(payload.get("name"))));
	}
	
	@PostMapping ("/searchByPatient")
	public ResponseEntity< List <Appointment> > getApptByPatient(@RequestBody Map<String, Object> payload){
		return ResponseEntity.ok().body(appointmentService.getApptByPatient(String.valueOf(payload.get("name"))));
	}
	
	@PostMapping("/searchByNoFilter")
	public ResponseEntity< List <Appointment> > getApptNoFilter(@RequestBody Map<String, Object> payload){
		return ResponseEntity.ok().body(appointmentService.getApptNoFilter(String.valueOf(payload.get("name"))));
	}
	
	
	
	@PostMapping("/newAppointment")
	public ResponseEntity<String> newAppt(@RequestBody Appointment appt){
		appointmentService.newAppt(appt);
		return ResponseEntity.ok("Done");
	}
	
	@DeleteMapping("/deleteAppt")
	public ResponseEntity<?> deleteAppt (@RequestBody Appointment appt){
		appointmentService.deleteAppt(appt);
		return ResponseEntity.ok().build();
	}
	
	@PutMapping("/updateAppt")
	public ResponseEntity<String> updateAppt( @RequestBody Appointment appt){
		appointmentService.updateAppt(appt);
		return ResponseEntity.ok("Done");
	}
	
	
	

}
