package com.app.repositories;

import org.springframework.stereotype.Repository;

import com.app.Models.User;

import java.util.List;

import  org.springframework.data.jpa.repository.JpaRepository;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

	List<User> findByUsername(String username);
}
