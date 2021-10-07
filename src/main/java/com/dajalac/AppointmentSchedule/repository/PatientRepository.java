package com.dajalac.AppointmentSchedule.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dajalac.AppointmentSchedule.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository <Patient, Long> {

	Optional<Patient>findPatientByMemberNumber(String memberNumber);
	
	
	@Query("SELECT p FROM Patient p WHERE p.firstName=:firstName AND p.lastName=:lastName AND p.birthday=:birthday")
	List<Patient> findPatientByNameAndBirthday(@Param("firstName")String firstName,
														@Param("lastName") String lastName,
														@Param("birthday") LocalDate birthday);
}
