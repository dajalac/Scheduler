package com.dajalac.AppointmentSchedule.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import com.dajalac.AppointmentSchedule.model.Appointment;
import com.dajalac.AppointmentSchedule.repository.AppointmentRepository;

@Service
public class AppointmentService {

	final AppointmentRepository appointmentRepository;

	@Autowired
	public AppointmentService(AppointmentRepository appointmentRepository) {
		this.appointmentRepository = appointmentRepository;
	}
	
	public List<Appointment> getAllAppts(){
		return appointmentRepository.findAllForNext3months();
	}
	
	
	
	public List<String>getAvailableAppts(Long providerId, String fromTime, String toTime){
		
		String fromDate= LocalDate.now().toString()+" ";
		String toDate = LocalDate.now().plusMonths(6).toString()+" ";
		
		return appointmentRepository.findAppointmentAvailable(fromDate,toDate,providerId,fromTime, toTime);
	}
	
	public void newAppt (Appointment appointment) {
		
		//try to check if will have conflicts 
		appointmentRepository.save(appointment);
	}
	
	//could it also be by id?
	public void deleteAppt (Appointment appointment) {
		appointmentRepository.delete(appointment);
	}

	@Transactional
	public void updateAppt(Appointment appointment) {
		Appointment apptToUpdate = appointmentRepository.findById(appointment.getId())
				.orElseThrow(()->
				new IllegalStateException("Appointment id"+appointment.getId()+"does not exists"));
		
		apptToUpdate.setApptDate(appointment.getApptDate());
		apptToUpdate.setStarTime(appointment.getStarTime());
		apptToUpdate.setPatientId(appointment.getPatientId());
		apptToUpdate.setProviderId(appointment.getProviderId());
	}
	
	/*
	public List<Appointment>getApptByMemberNumber (String memberNumber){
		return appointmentRepository.findAppointmentByMemeberNumber(memberNumber);
	}*/
	
	public List<Appointment>getApptByProvider (String name){
		return appointmentRepository.findAppointmentByProdiverId(name);
	}
	
	public List<Appointment>getApptByPatient (String name){
		return appointmentRepository.findAppointmentByPatientId(name);
	}
	
	public List<Appointment>getApptNoFilter(String value){
		//To not return any value in case the input is empty 
		if(value.isEmpty()) {
			value ="...";
		}
		System.out.print(value);
		return appointmentRepository.findAppointmentWithNoFilter(value);
	}
}
