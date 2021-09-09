package com.dajalac.AppointmentSchedule.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.hamcrest.CoreMatchers.*;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.dajalac.AppointmentSchedule.model.Patient;

@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)//to use test db, not embedded one
@Transactional(propagation = Propagation.NOT_SUPPORTED)
@TestPropertySource(locations="classpath:application-test.properties")
class PatientRepositoryTest {

	@Autowired
	PatientRepository underTestPatientRepository;
	
	@AfterEach
	void tearDown() {
		underTestPatientRepository.deleteAll();
	}
	
	@Test
	void itShouldReturnApatient_whenInputFullNameAndBirthday() {
		//given
		Patient patient = new Patient(252366,
				LocalDate.now(),
				"ana",
				"luz",
				"(123) 456-7890",
				"ana@gmail.com",
				"1810 Fordem ave",
				"Madison",
				"Wisconsin",
				570340);
		
		
		underTestPatientRepository.save(patient);
		
		//when
		List<Patient> result = underTestPatientRepository.
				findPatientByNameAndBirthday(patient.getFirstName(),
						patient.getLastName(),patient.getBirthday());
	
		//then
		assertAll(
				()-> assertThat(result.get(0).getFirstName()).isEqualTo("ana"),
				()->assertThat(result.get(0).getLastName()).isEqualTo("luz"),
				()->assertThat(result.get(0).getBirthday()).isEqualTo(LocalDate.now()));
		
		;
			
	}
	
	@Test
	void itShouldNotReturnApatient_whenInputFullNameAndBirthday() {
		//given
		Patient patient = new Patient(252366,
				LocalDate.now(),
				"ana",
				"luz",
				"(123) 456-7890",
				"ana@gmail.com",
				"1810 Fordem ave",
				"Madison",
				"Wisconsin",
				570340);
		
		
		underTestPatientRepository.save(patient);
		
		//when
		List<Patient> result = underTestPatientRepository.
				findPatientByNameAndBirthday("Jhon", "Doe", LocalDate.now());
						
	
		//then
		assertThat(result).isEmpty();
		
		;
			
	}


}
