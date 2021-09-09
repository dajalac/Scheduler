package com.dajalac.AppointmentSchedule.service;

import static org.assertj.core.api.Assertions.assertThatThrownBy;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Optional;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;

import com.dajalac.AppointmentSchedule.model.Appointment;
import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.model.Provider;
import com.dajalac.AppointmentSchedule.repository.AppointmentRepository;

@ExtendWith(MockitoExtension.class)
class AppointmentServiceTest {

	@Mock 
	AppointmentRepository appointmentRepository;
	
	private AppointmentService underTestAppointmentService;
	
	@BeforeEach
	void setUp() {
		underTestAppointmentService = new AppointmentService(appointmentRepository);
	}
	
	
	@Test
	void whenUpdateNonexistentAppt_thenThrowIllegalStateException() {
		//given
		
		Appointment appointment = new Appointment(new Patient(),
				new Provider(),
				LocalTime.parse("10:00"),
				LocalDate.of(2021, 8, 31)
				);
		
		given(appointmentRepository
				.findById(appointment.getId())).willReturn(Optional.empty());
		
		//when
		//then
		assertThatThrownBy(()->underTestAppointmentService.updateAppt(appointment))
				.isInstanceOf(IllegalStateException.class)
				.hasMessage("Appointment id"+appointment.getId()+"does not exists");
		
	}

}
