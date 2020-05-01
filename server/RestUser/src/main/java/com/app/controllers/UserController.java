package com.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.Models.User;
import com.app.errors.ErrorRest;
import com.app.repositories.UserRepository;


@RestController
@RequestMapping("/users")
public class UserController {

	@Autowired
	UserRepository userRepository;
	
	@GetMapping("")
	public ResponseEntity<?> getAll() {
		List<User> result = userRepository.findAll();
		if(!result.isEmpty()) return new ResponseEntity<List<User>>(result, HttpStatus.OK);
		return new ResponseEntity<ErrorRest>(new ErrorRest("No hay usuarios"),HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/id/{id}") 
	public ResponseEntity<?> getOneById(@PathVariable Long id) {
		Optional<User> result = userRepository.findById(id);
		if(result.isEmpty()) return new ResponseEntity<ErrorRest>(new ErrorRest("No hay usuario con el ID "+id),HttpStatus.NOT_FOUND);
			return new ResponseEntity<Optional<User>>(result,HttpStatus.OK);
		
	}
	
	@GetMapping("/name/{alias}") 
	public ResponseEntity<?> getOneByAlias(@PathVariable String alias) {
		User result = userRepository.findByAlias(alias);
		if(result == null) return new ResponseEntity<ErrorRest>(new ErrorRest("No hay usuario con el nombre "+alias),HttpStatus.NOT_FOUND);
			return new ResponseEntity<User>(result,HttpStatus.OK);
		
	}
	
	@PostMapping("")
	public ResponseEntity<?> create(RequestEntity<User> reqUser) {
		User user = reqUser.getBody();
		if(user.getAlias().isBlank() || user.getPassword().isBlank() || user.getBirthdate() == null || user.getEmail().isBlank() || user.getName().isBlank() || user.getSurname().isBlank())  return new ResponseEntity<ErrorRest>(new ErrorRest("Usuario mal formado"),HttpStatus.BAD_REQUEST);
		
		if(userRepository.findById(user.getId()).isPresent() && user.getId() != 0) return new ResponseEntity<ErrorRest>(new ErrorRest("El usuario con ID " + user.getId() + " ya existe"),
				HttpStatus.CONFLICT); 
		
		if(userRepository.findByEmail(user.getEmail()) != null) return new ResponseEntity<ErrorRest>(new ErrorRest("El usuario con email " + user.getEmail() + " ya existe"),
				HttpStatus.CONFLICT);
		
		if(userRepository.findByAlias(user.getAlias()) != null) return new ResponseEntity<ErrorRest>(new ErrorRest("El usuario con alias " + user.getAlias() + " ya existe"),
				HttpStatus.CONFLICT);
		
		return new ResponseEntity<User>(userRepository.save(user), HttpStatus.CREATED);
		
	}
	
	@PutMapping("")
	public ResponseEntity<?> update(RequestEntity<User> reqUser) {
		User user = reqUser.getBody();
		if(user.getAlias().isBlank() || user.getPassword().isBlank() || user.getBirthdate() == null || user.getEmail().isBlank() || user.getName().isBlank() || user.getSurname().isBlank())  return new ResponseEntity<ErrorRest>(new ErrorRest("Usuario mal formado"),HttpStatus.BAD_REQUEST);
		
		if(userRepository.findById(user.getId()).isPresent() && user.getId() != 0) return new ResponseEntity<User>(userRepository.save(user), HttpStatus.OK);
			
		return new ResponseEntity<ErrorRest>(new ErrorRest("El usuario con ID " + user.getId() + " no existe"),
				HttpStatus.NOT_FOUND); 
		
	}
	
	
	@DeleteMapping("/{id}")
	public ResponseEntity<?> delete(@PathVariable Long id) {
		if(userRepository.findById(id).isPresent()) {
			userRepository.deleteById(id);
			return new ResponseEntity<ErrorRest>(new ErrorRest("Usuario borrado correctamente"), HttpStatus.OK);
		}
		return new ResponseEntity<ErrorRest>(new ErrorRest("El usuario con el ID:"+id+" no existe"),
				HttpStatus.NOT_FOUND); 
	}
	
}
