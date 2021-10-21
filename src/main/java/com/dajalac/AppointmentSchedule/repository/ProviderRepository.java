package com.dajalac.AppointmentSchedule.repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.dajalac.AppointmentSchedule.model.Provider;

@Repository
public interface ProviderRepository extends JpaRepository <Provider, Long> {
	
	@Query("SELECT p FROM Provider p WHERE p.speciality =?1")
	List<Provider> FindProviderBySpeciality(String speciality);
	
	@Query("SELECT p FROM Provider p WHERE concat(p.firstName,' ', p.lastName) LIKE %:name% ")
	List<Provider> findProviderByName(@Param("name") String name);

}
