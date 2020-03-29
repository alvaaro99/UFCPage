package com.app.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
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
	public ResponseEntity<?> getProducts() {
		List<Product> result = productRepository.findAll();
		if(!result.isEmpty()) return new ResponseEntity<List<Product>>(result, HttpStatus.OK);
		return new ResponseEntity<ErrorRest>(new ErrorRest("No hay productos"),HttpStatus.NOT_FOUND);
	}
	
	@PostMapping("/")
	public ResponseEntity<?> createProduct(RequestEntity<Product> reqProduct) {
		Product product = reqProduct.getBody();
		 
		return new ResponseEntity<Product>(productRepository.save(product), HttpStatus.CREATED);
		
	}

}
