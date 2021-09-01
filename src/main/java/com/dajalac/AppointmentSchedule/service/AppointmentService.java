package com.dajalac.AppointmentSchedule.service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
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
		return appointmentRepository.findAll();
	}
	
	public List<String>getAvailableAppts(String fromDate, String toDate, int providerId){
		
		return appointmentRepository.findAppointmentAvailable(fromDate,toDate,providerId);
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
	
	public List<Appointment>getApptByDate (LocalDate date){
		return appointmentRepository.findAppointmentByDate(date);
	}
	
	public List<Appointment>getApptByProvider (Long providerId){
		return appointmentRepository.findAppointmentByProdiverId(providerId);
	}
	
	public List<Appointment>getApptByPatient (Long patientId){
		return appointmentRepository.findAppointmentByPatientId(patientId);
	}
}
