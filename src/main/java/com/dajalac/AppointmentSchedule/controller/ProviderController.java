package com.dajalac.AppointmentSchedule.controller;

import java.util.List;

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
	
	@GetMapping("/searchByArea")
	public ResponseEntity<String>providerByArea(@RequestBody String area){
		providerService.getProviderByField(area);
		return ResponseEntity.ok("Done");
	}
	
	
	
	

}
