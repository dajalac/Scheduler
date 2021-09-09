package com.dajalac.AppointmentSchedule.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.client.match.MockRestRequestMatchers.anything;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.mockito.junit.jupiter.MockitoSettings;

import com.dajalac.AppointmentSchedule.model.Patient;
import com.dajalac.AppointmentSchedule.model.Provider;
import com.dajalac.AppointmentSchedule.repository.ProviderRepository;
import java.util.List;

@ExtendWith(MockitoExtension.class)
class ProviderServiceTest {

	@Mock
	ProviderRepository providerRepository;
	private ProviderService underTestProviderService;
	
	@BeforeEach
	void setUp() {
		underTestProviderService = new ProviderService(providerRepository);
	}
	
	@Test
	void whenRequestAllproviders_thenFindAll() {
		//when
		underTestProviderService.getAllProvider();
		
		//then
		verify(providerRepository).findAll();
	}
	
	@Test
	void whenSelectAnSpecialization_thenFindProvidersBySpecilizationType() {
		//given
		Provider provider = new Provider("Molly",
				"Smith",
				"(123) 456-7890",
				"msmity@gmail.com",
				"Family doctor"
				);
		//when
		underTestProviderService.getProviderByField(provider.getSpeciality());
		
		//then
		verify(providerRepository).FindProviderBySpeciality(provider.getSpeciality());
	
	}
}
