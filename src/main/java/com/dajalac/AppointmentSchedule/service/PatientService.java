package com.dajalac.AppointmentSchedule.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.repository.PatientRepository;

@Service
public class PatientService {
	
	private final PatientRepository patientRepository;
	
	@Autowired
	public PatientService (PatientRepository patientRepository) {
		this.patientRepository = patientRepository;
	}
	
	
	public List <Patient> getPatients(){
		return patientRepository.findAll();
	}
	
	
	public void addNewPatient(Patient patient) {
		
	}
	
	

}
