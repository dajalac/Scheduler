package com.dajalac.AppointmentSchedule.controller;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.service.PatientService;

@RestController
@RequestMapping("/patient")
public class PatientController {

	private final PatientService patientService;
	
	@Autowired
	public PatientController (PatientService patientService) {
		this.patientService= patientService; 
	}
	
	
	@GetMapping
	public ResponseEntity< List <Patient> > getPatients(){
		return ResponseEntity.ok().body(patientService.getPatients());
	}

	@PostMapping("/newPatient")
	public ResponseEntity<String>newPatient(@RequestBody Patient patient){
		patientService.addNewPatient(patient);
		return ResponseEntity.ok("Done");
	}
	
	@PutMapping("/updatePatient")
	public ResponseEntity <String> updatePatient(@RequestBody Patient patient){
		
		patientService.updatePatient(patient);
		
		return ResponseEntity.ok("Done");
	}
	
}
