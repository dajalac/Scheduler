package com.dajalac.AppointmentSchedule.controller;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
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
	
	@GetMapping("/availableAppts")
	public ResponseEntity< List <String> > getAvailableAppts(@RequestBody Map<String, Object> payload ){
			
		return ResponseEntity.ok().body(appointmentService.getAvailableAppts(
				String.valueOf(payload.get("fromDate")),
				String.valueOf(payload.get("toDate")),
				Long.parseLong(String.valueOf(payload.get("providerId")))
				));
	}
	
	@GetMapping("/searchByDate")
	public ResponseEntity< List <Appointment> > getApptByDate(LocalDate date){
		return ResponseEntity.ok().body(appointmentService.getApptByDate(date));
	}
	
	@GetMapping ("/searchByProvider")
	public ResponseEntity< List <Appointment> > getApptByProvider(Long providerId){
		return ResponseEntity.ok().body(appointmentService.getApptByProvider(providerId));
	}
	
	@GetMapping ("/searchByPatient")
	public ResponseEntity< List <Appointment> > getApptByPatient(Long patietId){
		return ResponseEntity.ok().body(appointmentService.getApptByPatient(patietId));
	}
	
	@PostMapping("/newAppointment")
	public ResponseEntity<String> newAppt(Appointment appt){
		appointmentService.newAppt(appt);
		return ResponseEntity.ok("Done");
	}
	
	@DeleteMapping("/deleteAppt")
	public ResponseEntity<?> deleteAppt (Appointment appt){
		appointmentService.deleteAppt(appt);
		return ResponseEntity.ok().build();
	}
	
	@PutMapping("/updateAppt")
	public ResponseEntity<String> updateAppt(Appointment appt){
		appointmentService.updateAppt(appt);
		return ResponseEntity.ok("Done");
	}
	
	
	

}
