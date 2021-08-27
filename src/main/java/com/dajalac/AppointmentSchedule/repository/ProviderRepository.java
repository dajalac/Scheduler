package com.dajalac.AppointmentSchedule.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.dajalac.AppointmentSchedule.model.Provider;

@Repository
public interface ProviderRepository extends JpaRepository <Provider, Long> {

}
