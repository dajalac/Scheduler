package com.dajalac.AppointmentSchedule;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.repository.PatientRepository;

import java.time.LocalDate;

@SpringBootApplication
public class AppointmentScheduleApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppointmentScheduleApplication.class, args);
	}
	
	@Bean
	 CommandLineRunner commandLineRunner(PatientRepository patientRepository) {
		return args ->{
			patientRepository.save(new Patient(252366,
					LocalDate.now(),
					"ana",
					"luz",
					"(123) 456-7890",
					"ana@gmail.com",
					"1810 Fordem ave",
					"Madison",
					"Wisconsin",
					570340));
		};
	}

}
