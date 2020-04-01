package com.app.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.errors.ErrorRest;
import com.app.models.Product;
import com.app.repositories.ProductRepository;

@RestController
@RequestMapping("/products")
public class ProductController {
	
	
	@Autowired
	ProductRepository productRepository;
	
	@GetMapping("/")
	public ResponseEntity<?> getAll() {
		List<Product> result = productRepository.findAll();
		if(!result.isEmpty()) return new ResponseEntity<List<Product>>(result, HttpStatus.OK);
		return new ResponseEntity<ErrorRest>(new ErrorRest("No hay productos"),HttpStatus.NOT_FOUND);
	}
	
	@GetMapping("/{id}") 
	public ResponseEntity<?> getOne(@PathVariable Long id) {
		Optional<Product> result = productRepository.findById(id);
		if(result.isEmpty()) return new ResponseEntity<ErrorRest>(new ErrorRest("No hay producto con el ID "+id),HttpStatus.NOT_FOUND);
			return new ResponseEntity<Optional<Product>>(result,HttpStatus.OK);
		
	}
	
	@PostMapping("/")
	public ResponseEntity<?> create(RequestEntity<Product> reqProduct) {
		Product product = reqProduct.getBody();
		 
		return new ResponseEntity<Product>(productRepository.save(product), HttpStatus.CREATED);
		
	}

}
