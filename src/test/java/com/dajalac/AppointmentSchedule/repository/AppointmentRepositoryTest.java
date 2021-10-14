package com.dajalac.AppointmentSchedule.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase.Replace;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.TestPropertySource;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import com.dajalac.AppointmentSchedule.model.Appointment;
import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.model.Provider;


@DataJpaTest
@AutoConfigureTestDatabase(replace = Replace.NONE)
@Transactional(propagation = Propagation.NOT_SUPPORTED)
@TestPropertySource(locations="classpath:application-test.properties")
class AppointmentRepositoryTest {
	
	@Autowired
	AppointmentRepository underTestAppointmentRepository;
	@Autowired
	PatientRepository patientRepository;
	@Autowired
	ProviderRepository providerRepository;
	
	Provider provider;
	Patient patient;
	
	@BeforeEach
	void setUp() {
		
		patient = new Patient("252366",
				LocalDate.now(),
				"Dani",
				"luzy",
				"(123) 456-7890",
				"ana@gmail.com",
				"1810 Fordem ave",
				"Madison",
				"Wisconsin",
				570340);
		patientRepository.save(patient);
		
		provider = new Provider("Molly",
				"Smith",
				"(123) 456-7890",
				"msmity@gmail.com",
				"Family doctor"
				);
		providerRepository.save(provider);
		
		underTestAppointmentRepository.save(new Appointment(patient,
				provider,
				LocalTime.parse("08:00"),
				LocalDate.of(2021, 8, 31)
				));
		
		underTestAppointmentRepository.save(
		new Appointment(patient,provider,
				LocalTime.parse("09:00"),
				LocalDate.of(2021, 8, 31)
				));
		underTestAppointmentRepository.save(
		new Appointment(patient,provider,
				LocalTime.parse("10:00"),
				LocalDate.of(2021, 8, 31)
				));
		
		underTestAppointmentRepository.save(
		new Appointment(patient,provider,
				LocalTime.parse("11:00"),
				LocalDate.of(2021, 8, 31)
				));
		
		underTestAppointmentRepository.save(
		new Appointment(patient,provider,
				LocalTime.parse("12:00"),
				LocalDate.of(2021, 8, 31)
				));
		
		underTestAppointmentRepository.save(
		new Appointment(patient,provider,
				LocalTime.parse("13:00"),
				LocalDate.of(2021, 8, 31)
				));
		
	}
	
	
	@AfterEach
	void tearDow() {
		underTestAppointmentRepository.deleteAll();
	}
	@Test
	void whenSelectedAnExistentProvider_thenReturn11ApptAvailable() {
		
		
		//when
		List<String> actual = underTestAppointmentRepository
				.findAppointmentAvailable("2021-8-31",
						"2021-8-31",
						provider.getId(),
						"8:00",
						"12:00");
		
		//then
		assertThat(actual).hasSize(11);	
	}
	
	@Test
	void whenSelectedAnNonexistentProvider_thenReturnAllthetimeAsAvailable_() {
		
	
		//when
		List<String> actual = underTestAppointmentRepository
				.findAppointmentAvailable("2021-8-31",
						"2021-8-31",
						100L,
						"8:00",
						"12:00");
		
		//then
		assertThat(actual).hasSize(17);	
	}
	
	

}
