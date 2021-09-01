package com.dajalac.AppointmentSchedule.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;

@Entity
@Table (name ="provider")
public class Provider {
	
	@Id
	@SequenceGenerator(
			name= "provider_sequence",
			sequenceName="provider_sequence",
			allocationSize=1)
	@GeneratedValue(
			strategy= GenerationType.SEQUENCE,
			generator="provider_sequence")
	@Column(name="provider_id", updatable=false)
	private Long id;
	
	@NotBlank
	@Pattern(regexp ="^[a-zA-Z]*$")
	@Column(name="first_name", nullable=false)
	private String firstName;
	
	@NotBlank
	@Pattern(regexp ="^[a-zA-Z]*$")
	@Column(name="last_name", nullable=false)
	private String lastName;
	
	@NotBlank
	@Pattern(regexp = "^(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}$")
	@Column(name="phone")
	private String phone;
	
	@Email
	@Column(name="email")
	private String email;
	
	@NotBlank
	@Column(name="speciality", nullable=false)
	private String speciality;
	
	@OneToMany(mappedBy="patientId",
			cascade = CascadeType.ALL,
			fetch = FetchType.LAZY)
	private List<Appointment> appointment = new ArrayList<>();
	
	public Provider() {}
	
	public Provider(String firstName,
			String lastName,
			String phone,
			String email,
			String speciality) {
		
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.speciality = speciality;
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getSpeciality() {
		return speciality;
	}
	public void setSpeciality(String speciality) {
		this.speciality = speciality;
	}
	
	
	@Override
	public String toString() {
		return "Provider [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", phone=" + phone
				+ ", email=" + email + ", speciality=" + speciality + ", appointment=" + appointment + "]";
	} 
	
	

}
