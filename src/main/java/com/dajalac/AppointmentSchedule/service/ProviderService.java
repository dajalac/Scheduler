package com.dajalac.AppointmentSchedule.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dajalac.AppointmentSchedule.model.Provider;
import com.dajalac.AppointmentSchedule.repository.ProviderRepository;

@Service
public class ProviderService {

	final ProviderRepository providerRepository;

	@Autowired
	public ProviderService(ProviderRepository providerRepository) {
		this.providerRepository = providerRepository;
	}
	
	public List<Provider>getAllProvider(){
		return providerRepository.findAll();
	}
	
//	public List<Provider> getProviderByField(String speciality){
//		return providerRepository.FindProviderBySpeciality(speciality);
//	}
	
	public List<Provider> getProviderByName(String name){
		return providerRepository.findProviderByName(name);
	}
	
	
}
