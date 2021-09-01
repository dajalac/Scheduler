package com.dajalac.AppointmentSchedule.repository;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.dajalac.AppointmentSchedule.model.Appointment;

@Repository
public interface AppointmentRepository extends JpaRepository <Appointment, Long>{

	/*
	Optional<Appointment> findAppointmentByDate(LocalDate date);
	
	@Query("Select a from Appointment a WHERE providerId =?1")
	List<Appointment> findAppointmentByProdiverId(int id);*/
	
	
	@Query(value= "select * from generate_series(TO_TIMESTAMP('2021-08-30 8:00:00','YYYY/MM/DD HH24:MI:SS'), TO_TIMESTAMP('2021-09-01 18:00:00','YYYY/MM/DD HH24:MI:SS'),'30 minutes') as date\r\n"
			+ "WHERE date NOT IN(\r\n"
			+ "	select appointment_date + start_time from appointment\r\n"
			+ ") AND cast(date as time) BETWEEN '8:00:00' and '18:00:00'",nativeQuery = true)
	List<LocalDateTime> findAppointmentAvailable();
	
	
}
