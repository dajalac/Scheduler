package com.dajalac.AppointmentSchedule.model;

import java.time.LocalDate;
import java.time.LocalTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;

@Entity
@Table (name = "appointment")
public class Appointment {
	
	@Id
	@SequenceGenerator(
			name= "appointment_sequence",
			sequenceName="appointment_sequence",
			allocationSize=1)
	@GeneratedValue(
			strategy= GenerationType.SEQUENCE,
			generator="appointment_sequence")
	@Column(name="appointment_id", updatable=false)
	private Long id;
	
	
	@ManyToOne
	@JoinColumn(name="patient_id",nullable=false)
	private Patient patientId;
	
	@ManyToOne
	@JoinColumn(name="provider_id", nullable=false)
	private Provider providerId;
	
	@Column(name="start_time", nullable=false)
	private LocalTime starTime;
	
	@Column(name="end_time", nullable=false)
	private LocalTime endTime;
	
	@Column(name="appointment_date", nullable=false)
	private LocalDate apptDate;

	public Appointment() {}
	
	public Appointment(Patient patientId, Provider providerId, LocalTime starTime, LocalTime endTime,
			LocalDate apptDate) {
		this.patientId = patientId;
		this.providerId = providerId;
		this.starTime = starTime;
		this.endTime = endTime;
		this.apptDate = apptDate;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Patient getPatientId() {
		return patientId;
	}

	public void setPatientId(Patient patientId) {
		this.patientId = patientId;
	}

	public Provider getProviderId() {
		return providerId;
	}

	public void setProviderId(Provider providerId) {
		this.providerId = providerId;
	}

	public LocalTime getStarTime() {
		return starTime;
	}

	public void setStarTime(LocalTime starTime) {
		this.starTime = starTime;
	}

	public LocalTime getEndTime() {
		return endTime;
	}

	public void setEndTime(LocalTime endTime) {
		this.endTime = endTime;
	}

	public LocalDate getApptDate() {
		return apptDate;
	}

	public void setApptDate(LocalDate apptDate) {
		this.apptDate = apptDate;
	}

	@Override
	public String toString() {
		return "Appointment [id=" + id + ", patientId=" + patientId + ", providerId=" + providerId + ", starTime="
				+ starTime + ", endTime=" + endTime + ", apptDate=" + apptDate + "]";
	}
	
	
	
}
