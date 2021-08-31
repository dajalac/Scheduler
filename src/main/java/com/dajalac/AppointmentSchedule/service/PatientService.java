package com.dajalac.AppointmentSchedule.service;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

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
	
	
	public  List <Patient> getPatients(){
		return patientRepository.findAll();
	}
	
	
	public void addNewPatient(Patient patient) {
		//check if member number exists before save new patient
		Optional<Patient> patientOptional = 
				patientRepository.findPatientByMemberNumber(patient.getMemberNumber());
		
		if(patientOptional.isPresent()) {
			throw new IllegalStateException("member number already exists");	
		}
		
		patientRepository.save(patient);
	}
	
	
	@Transactional
	public void updatePatient(Patient patient) {
		
		// check if patient exist
		Patient patientToUpdate = patientRepository.findById(patient.getId())
				.orElseThrow(()->
				new IllegalStateException("Patient id"+patient.getId()+"does not exists"));
		
		
		patientToUpdate.setMemberNumber(patient.getMemberNumber());
		patientToUpdate.setBirthday(patient.getBirthday());
		patientToUpdate.setFirstName(patient.getFirstName());
		patientToUpdate.setLastName(patient.getLastName());
		patientToUpdate.setPhone(patient.getPhone());
		patientToUpdate.setEmail(patient.getEmail());
		patientToUpdate.setAddress(patient.getAddress());
		patientToUpdate.setCity(patient.getCity());
		patientToUpdate.setZipCode(patient.getZipCode());
		//because it is a transaction, no need to save 
		
	}
	
	

}
