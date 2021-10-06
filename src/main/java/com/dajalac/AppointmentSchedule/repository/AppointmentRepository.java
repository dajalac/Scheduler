package com.dajalac.AppointmentSchedule.repository;

import java.time.LocalDate;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dajalac.AppointmentSchedule.model.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository <Appointment, Long>{

	@Query(value="SELECT * from Appointment WHERE  appointment_date > CURRENT_TIMESTAMP \r\n"
			+ "ORDER BY appointment_date LIMIT 90"
			,nativeQuery = true)
	List <Appointment> findAllForNext3months();
	
	@Query("SELECT a FROM Appointment a WHERE a.apptDate=?1")
	List<Appointment> findAppointmentByDate(LocalDate date);
	
	@Query("Select a from Appointment a WHERE a.providerId =?1")
	List<Appointment> findAppointmentByProdiverId(Long id);
	
	@Query("Select a from Appointment a WHERE a.patientId =?1")
	List<Appointment> findAppointmentByPatientId(Long id);
	
	
	@Query(value= "SELECT * FROM generate_series\r\n"
			+ "(TO_TIMESTAMP(CONCAT(:fromDate,' 08:00'),'YYYY/MM/DD HH24:MI'),\r\n"
			+ " TO_TIMESTAMP(CONCAT(:toDate ,' 16:00'),'YYYY/MM/DD HH24:MI'),'30 minutes') as date\r\n"
			+ "WHERE date NOT IN(\r\n"
			+ "	SELECT appointment_date + start_time FROM appointment WHERE provider_id=:providerId \r\n"
			+ ") AND cast(date as time) BETWEEN '08:00:00' and '16:00:00'",nativeQuery = true)
	List<String> findAppointmentAvailable(@Param ("fromDate") String fromDate,
										  @Param ("toDate") String toDate,
										  @Param ("providerId") Long providerId);
	
	
}
