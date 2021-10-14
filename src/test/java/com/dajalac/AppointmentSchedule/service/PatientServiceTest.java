package com.dajalac.AppointmentSchedule.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.any;
import static org.mockito.Mockito.verify;
import static org.mockito.BDDMockito.given;

import java.time.LocalDate;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.repository.PatientRepository;

@ExtendWith(MockitoExtension.class)
class PatientServiceTest {

	@Mock
	PatientRepository patientRepository;
	
	private PatientService underTestPatientService;
	
	private Patient patient; 
	
	@BeforeEach
	void setUp() {
		
		underTestPatientService=new PatientService(patientRepository);
		
		patient = new Patient("252366",
				LocalDate.now(),
				"ana",
				"luz",
				"(123) 456-7890",
				"ana@gmail.com",
				"1810 Fordem ave",
				"Madison",
				"Wisconsin",
				570340);
	}
	@Test
	void whenInputaNewPatient_thenPatientIsSaved() {
		//given
		//when
		underTestPatientService.addNewPatient(patient);
		
		//then
		ArgumentCaptor<Patient>patientArgumentCaptor = ArgumentCaptor.forClass(Patient.class);
		
		verify(patientRepository).save(patientArgumentCaptor.capture());
		
		Patient patientValue = patientArgumentCaptor.getValue();
		
		assertThat(patientValue).isEqualTo(patient);
		
	}
	@Test
	void whenInputAnExistentPatient_thenThrowIllegalStateException() {
		//given
		Optional<Patient> patientOptional = Optional.of(patient);
		
		given(patientRepository
				.findPatientByMemberNumber(patient.getMemberNumber())).willReturn(patientOptional);
		
		//when
		//then
		assertThatThrownBy(()->underTestPatientService.addNewPatient(patient))
				.isInstanceOf(IllegalStateException.class)
				.hasMessage("member number already exists");
		
		verify(patientRepository, never()).save(any());
		
	};
	
	@Test
	void whenUpdateNonExistentPatient_thenThrowIllegalStateException() {
		//given
	
		given(patientRepository
				.findById(patient.getId())).willReturn(Optional.empty());
		
		//when
		//then
		assertThatThrownBy(()->underTestPatientService.updatePatient(patient))
		.isInstanceOf(IllegalStateException.class)
		.hasMessage("Patient id"+patient.getId()+"does not exists");
		
	}
	
	

}
