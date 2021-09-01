package com.dajalac.AppointmentSchedule.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dajalac.AppointmentSchedule.model.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository <Appointment, Long>{

	
	List<Appointment> findAppointmentByDate(LocalDate date);
	
	@Query("Select a from Appointment a WHERE providerId =?1")
	List<Appointment> findAppointmentByProdiverId(Long id);
	
	@Query("Select a from Appointment a WHERE patientId =?1")
	List<Appointment> findAppointmentByPatientId(Long id);
	
	
	@Query(value= "SELECT * FROM generate_series\r\n"
			+ "(TO_TIMESTAMP(CONCAT(:fromDate,' 8:00'),'YYYY/MM/DD HH24:MI'),\r\n"
			+ " TO_TIMESTAMP(CONCAT(:toDate ,' 18:00'),'YYYY/MM/DD HH24:MI'),'30 minutes') as date\r\n"
			+ "WHERE date NOT IN(\r\n"
			+ "	SELECT appointment_date + start_time FROM appointment WHERE provider_id=:providerId \r\n"
			+ ") AND cast(date as time) BETWEEN '8:00:00' and '17:00:00'",nativeQuery = true)
	List<String> findAppointmentAvailable(@Param ("fromDate") String fromDate,
										  @Param ("toDate") String toDate,
										  @Param ("providerId") int providerId);
	
	
}
