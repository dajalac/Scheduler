package com.dajalac.AppointmentSchedule.repository;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

import java.util.List;

import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.TestPropertySource;

import com.dajalac.AppointmentSchedule.model.Provider;

@DataJpaTest
@TestPropertySource(locations="classpath:application.properties")
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class ProviderRepositoryTest {

	@Autowired
	ProviderRepository underTestProviderRepository;
	
	Provider provider;
	
	@AfterEach
	void tearDown() {
		underTestProviderRepository.deleteAll();
	}
	
	@BeforeEach
	void setUp() {
		provider = new Provider("Molly",
				"Smith",
				"(123) 456-7890",
				"msmity@gmail.com",
				"Family doctor"
				);
	}
	
	@Test
	void itShouldReturnAprovider_whenSpecialityIsSelected() {
		//given
	
		underTestProviderRepository.save(provider);
		
		//when

		List<Provider> actual =
				underTestProviderRepository.FindProviderBySpeciality("Family doctor");
		
		//then
		assertThat(actual).isNotEmpty();	
	}
	
	@Test
	void itShouldNotReturnAprovider_whenNonexistentSpecialityIsSelected() {
		//given
	
		underTestProviderRepository.save(provider);
		
		//when

		List<Provider> actual =
				underTestProviderRepository.FindProviderBySpeciality("cardiologist");
		
		//then
		assertThat(actual).isEmpty();	
	}
	
	

}