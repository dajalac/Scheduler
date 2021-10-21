package com.dajalac.AppointmentSchedule.model;

import java.time.LocalDate;
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

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;


@Entity
@Table (name="patient")
public class Patient {
	
	@Id
	@SequenceGenerator(
			name= "patient_sequence",
			sequenceName="patient_sequence",
			allocationSize=1)
	@GeneratedValue(
			strategy= GenerationType.SEQUENCE,
			generator="patient_sequence")
	@Column(name="patient_id", updatable=false)
	private Long id;
	
	@Column(name="member_number", nullable=false)
	private String memberNumber;
	
	@Column(name="birthday", nullable=false)
	private LocalDate birthday; 
	
	@NotBlank
	@Pattern(regexp ="^[a-zA-Z\s]*$")
	@Column(name="first_name", nullable=false)
	private String firstName;
	
	@NotBlank
	@Pattern(regexp ="^[a-zA-Z\s]*$")
	@Column(name="last_name", nullable=false)
	private String lastName;
	
	@Pattern(regexp = "^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$")
	@Column(name="phone")
	private String phone;
	
	@Column(name="email")
	@Email
	private String email;
	
	@Pattern(regexp ="^[a-zA-Z\s\\d]*$")
	@Column(name="address")
	
	private String address;
	
	@Pattern(regexp ="^[a-zA-Z\s]*$")
	@Column(name="city")
	private String city;
	
	@Pattern(regexp ="^[a-zA-Z\s]*$")
	@Column(name="state")
	private String state;
	
	@Pattern(regexp ="^\\d{5}(?:[-\\s]\\d{4})?$")
	@Column(name="zipcode")
	private String zipCode;
	
	/*tag to avoid infinite loop regarding bi-directional mapping
	 * When we call getPatients, the patientId object (with the patient info)
	 * will be ignored in the joined column appointments (called patientId)*/
	@JsonIgnoreProperties("patientId") 
	@OneToMany(mappedBy="patientId",
			cascade = CascadeType.ALL,
			fetch = FetchType.LAZY) /*it was suggested to use eager, but lazy is also working*/
	private List<Appointment> appointment = new ArrayList<>();

	public Patient() {}
	

	public Patient(String memberNumber,
			LocalDate birthday,
			String firstName,
			String lastName,
			String phone,
			String email,
			String address,
			String city,
			String state,
			String zipCode) {
		
		this.memberNumber = memberNumber;
		this.birthday=birthday;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.address = address;
		this.city = city;
		this.state = state;
		this.zipCode = zipCode;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}
	
	public LocalDate getBirthday() {
		return birthday;
	}

	public void setBirthday(LocalDate birthday) {
		this.birthday = birthday;
	}

	public String getMemberNumber() {
		return memberNumber;
	}

	public void setMemberNumber(String memberNumber) {
		this.memberNumber = memberNumber;
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

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public List<Appointment> getAppointment() {
		return appointment;
	}

	public void setAppointment(List<Appointment> appointment) {
		this.appointment = appointment;
	}

	
	@Override
	public String toString() {
		return "Patient [id=" + id + ", memberNumber=" + memberNumber + ", birthday=" + birthday + ", firstName="
				+ firstName + ", lastName=" + lastName + ", phone=" + phone + ", email=" + email + ", address="
				+ address + ", city=" + city + ", state=" + state + ", zipCode=" + zipCode + ", appointment="
				+ appointment + "]";
		
	
	
	}

	
	
	
	
	
	

}
