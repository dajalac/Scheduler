package com.dajalac.AppointmentSchedule.controller;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.model.Provider;
import com.dajalac.AppointmentSchedule.service.ProviderService;

@RestController
@RequestMapping("/provider")
@CrossOrigin(origins = "http://localhost:3000")
public class ProviderController {
	
	final ProviderService providerService;

	@Autowired
	public ProviderController(ProviderService providerService) {
		this.providerService = providerService;
	} 
	
	@GetMapping
	public ResponseEntity<List<Provider>>getAllProviders(){
		return ResponseEntity.ok().body(providerService.getAllProvider());
	}
	
	@PostMapping("/searchByName")
	public ResponseEntity<List<Provider>> getProviderByName(@RequestBody Map<String, Object> payload ){
			
		return ResponseEntity.ok().body(providerService.getProviderByName(
				String.valueOf(payload.get("name"))
				));
	}
	
	

}
