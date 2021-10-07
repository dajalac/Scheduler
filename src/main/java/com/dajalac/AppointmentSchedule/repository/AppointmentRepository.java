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

	@Query(value="SELECT * FROM Appointment WHERE  appointment_date > CURRENT_TIMESTAMP \r\n"
			+ "ORDER BY appointment_date LIMIT 90"
			,nativeQuery = true)
	List <Appointment> findAllForNext3months();
	
	@Query("SELECT a FROM Appointment a WHERE a.patientId.memberNumber=?1")
	List<Appointment> findAppointmentByMemeberNumber(String memberNumber);
	
	@Query("SELECT a FROM Appointment a WHERE concat(a.providerId.firstName,' ', a.providerId.lastName) LIKE %:name%")
	List<Appointment> findAppointmentByProdiverId(String name);
	
	@Query("SELECT a FROM Appointment a WHERE concat(a.patientId.firstName,' ', a.patientId.lastName) LIKE %:name%")
	List<Appointment> findAppointmentByPatientId(String name);
	
	@Query("SELECT a FROM Appointment a WHERE concat(a.providerId.firstName,' ', a.providerId.lastName) LIKE %?1%\r\n"
			+ "OR concat(a.patientId.firstName,' ', a.patientId.lastName) LIKE %?1%\r\n"
			+"OR a.patientId.memberNumber=?1")
	List<Appointment>findAppointmentWithNoFilter(String value);
	
	
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
