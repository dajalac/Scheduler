package com.dajalac.AppointmentSchedule.repository;


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
	
	/*
	@Query("SELECT a FROM Appointment a WHERE a.patientId.memberNumber=?1")
	List<Appointment> findAppointmentByMemeberNumber(String memberNumber);*/
	
	@Query("SELECT a FROM Appointment a WHERE a.apptDate > CURRENT_TIMESTAMP \r\n"
			+ "AND concat(a.providerId.firstName,' ', a.providerId.lastName) LIKE %:name%")
	List<Appointment> findAppointmentByProdiverId(String name);
	
	@Query("SELECT a FROM Appointment a WHERE a.apptDate > CURRENT_TIMESTAMP \r\n"
			+ "AND concat(a.patientId.firstName,' ', a.patientId.lastName) LIKE %:name%")
	List<Appointment> findAppointmentByPatientId(String name);
	
	@Query("SELECT a FROM Appointment a WHERE a.apptDate > CURRENT_TIMESTAMP \r\n"
			+				 "AND( concat(a.providerId.firstName,' ', a.providerId.lastName) LIKE '%' ||:value ||'%'\r\n"
			+ " OR concat(a.patientId.firstName,' ', a.patientId.lastName) LIKE'%'||:value ||'%'\r\n"
			+" OR a.patientId.memberNumber=:value)")
	List<Appointment>findAppointmentWithNoFilter(String value);
	
	@Query(value ="WITH slots AS (\r\n"
			+ "	SELECT date_time\\:\\:date AS date, date_time\\:\\:time AS time, EXTRACT(DOW from date_time)dw\r\n"
			+ "	FROM generate_series\r\n"
			+ "			(CONCAT(:fromDate, :fromTime)\\:\\:timestamp,\r\n"
			+ "    		CONCAT(:toDate, :toTime)\\:\\:timestamp,'30 minutes') as date_time\r\n"
			+ ")\r\n"
			+ "SELECT * FROM slots WHERE \r\n"
			+ "	date+time NOT IN(SELECT appointment_date + start_time FROM appointment WHERE provider_id=:providerId )\r\n"
			+ "	AND (time BETWEEN cast(:fromTime as time) and cast(:toTime as time)) \r\n"
			+ "	AND dw not in (6,0)",
			nativeQuery = true)
	
//	@Query(value= "SELECT * FROM generate_series\r\n"
//			+ "(TO_TIMESTAMP(CONCAT(:fromDate, :fromTime),'YYYY/MM/DD HH24:MI'),\r\n"
//			+ " TO_TIMESTAMP(CONCAT(:toDate, :toTime),'YYYY/MM/DD HH24:MI'),'30 minutes') as date\r\n"
//			+ "WHERE date NOT IN(\r\n"
//			+ "	SELECT appointment_date + start_time FROM appointment WHERE provider_id=:providerId \r\n"
//			+ ")AND cast(date as time) BETWEEN cast(:fromTime as time) and cast(:toTime as time)\r\n"
//			+ "AND dw not in (6,0)",nativeQuery = true)
	List<String> findAppointmentAvailable(@Param ("fromDate") String fromDate,
										  @Param ("toDate") String toDate,
										  @Param ("providerId") Long providerId,
										  @Param("fromTime") String fromTime,
										  @Param("toTime") String toTime)
	;
	
	
}
