package com.app.Models;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import org.hibernate.annotations.ColumnTransformer;

@Entity
public class User {
	
	@Id
	@GeneratedValue(strategy=GenerationType.AUTO)
	private long id;
	@Column(unique = true)
	private String alias;
	@Column
	@ColumnTransformer(
	        read =  "AES_DECRYPT(password, 'ufc-page')",
	        write = "AES_ENCRYPT(?, 'ufc-page')"
	                )
	private String password;
	@Column
	private Date birthdate;
	@Column(unique = true)
	private String email;
	@Column
	private String gender;
	@Column
	private String name;
	@Column
	private String surname;
	
	public User() {}
	
	
	

	public User(long id, String alias, String password, Date birthdate, String email, String gender, String name,
			String surname) {
		super();
		this.id = id;
		this.alias = alias;
		this.password = password;
		this.birthdate = birthdate;
		this.email = email;
		this.gender = gender;
		this.name = name;
		this.surname = surname;
	}




	public String getAlias() {
		return alias;
	}




	public void setAlias(String alias) {
		this.alias = alias;
	}




	public String getEmail() {
		return email;
	}




	public void setEmail(String email) {
		this.email = email;
	}




	public String getGender() {
		return gender;
	}




	public void setGender(String gender) {
		this.gender = gender;
	}




	public String getName() {
		return name;
	}




	public void setName(String name) {
		this.name = name;
	}




	public String getSurname() {
		return surname;
	}




	public void setSurname(String surname) {
		this.surname = surname;
	}




	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Date getBirthdate() {
		return birthdate;
	}

	public void setBirthdate(Date birthdate) {
		this.birthdate = birthdate;
	}
		
}
