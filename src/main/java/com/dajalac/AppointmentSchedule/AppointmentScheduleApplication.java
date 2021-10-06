package com.dajalac.AppointmentSchedule;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.dajalac.AppointmentSchedule.model.Appointment;
import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.model.Provider;
import com.dajalac.AppointmentSchedule.repository.AppointmentRepository;
import com.dajalac.AppointmentSchedule.repository.PatientRepository;
import com.dajalac.AppointmentSchedule.repository.ProviderRepository;

import java.time.LocalDate;
import java.time.LocalTime;

@SpringBootApplication
public class AppointmentScheduleApplication {

	public static void main(String[] args) {
		SpringApplication.run(AppointmentScheduleApplication.class, args);
	}
	
	@Bean
	 CommandLineRunner commandLineRunner(PatientRepository patientRepository,
			 							ProviderRepository providerRepository,
			 							AppointmentRepository appointmentRepository) {
		
		return args ->{
			Patient patient1 = new Patient(252366,
					LocalDate.now(),
					"ana",
					"luz",
					"(123) 456-7890",
					"ana@gmail.com",
					"1810 Fordem ave",
					"Madison",
					"Wisconsin",
					570340);
			Provider provider1 = new Provider("Molly",
					"Smith",
					"(123) 456-7890",
					"msmity@gmail.com",
					"Family doctor"
					);
			
			patientRepository.save(patient1);
			
			providerRepository.save(provider1);
			
			for (int i=0; i< 12; i++) {
				appointmentRepository.save(new Appointment(patient1,
						provider1,
						LocalTime.parse("10:00"),
						LocalDate.of(2021, i+1, 10)
						));
				
			}
			
			
		};
	}

}
