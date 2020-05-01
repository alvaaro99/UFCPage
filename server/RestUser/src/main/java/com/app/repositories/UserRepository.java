package com.app.repositories;

import org.springframework.stereotype.Repository;

import com.app.Models.User;

import  org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	User findByAlias(String alias);
	
	User findByEmail(String email);
}
