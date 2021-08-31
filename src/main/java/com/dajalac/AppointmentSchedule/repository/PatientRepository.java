package com.dajalac.AppointmentSchedule.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dajalac.AppointmentSchedule.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository <Patient, Long> {

		Optional<Patient> findPatientByMemberNumber(int memberNumber);
}
