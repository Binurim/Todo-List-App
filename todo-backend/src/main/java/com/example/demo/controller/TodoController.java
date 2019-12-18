package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Todo;
import com.example.demo.service.TodoService;

@CrossOrigin(origins="http://localhost:3000")

@RestController
@RequestMapping("todos")
public class TodoController {
	@Autowired
	   TodoService todoService;

	   @GetMapping("/")
	   public ResponseEntity<Object> 
	   getTodo() {
		   try {
			   return new ResponseEntity<>(todoService.getTodos(), HttpStatus.OK);
		   }catch(Exception e) {
			   return new ResponseEntity<>("Invalid Request", HttpStatus.BAD_REQUEST);
		   }     
	   }
	   
	   
	   
	   @PutMapping( "/{id}")
	   public ResponseEntity<Object> 
	      updateTodo(@PathVariable("id") String id, @RequestBody Todo todo){
		   try {
	      todoService.updateTodo(id, todo);
	      return new ResponseEntity<>("TODO successsfully updated", HttpStatus.OK);
		   }catch(Exception e) {
			   return new ResponseEntity<>("Invalid Request", HttpStatus.BAD_REQUEST);  
		   }
	   }
	   
	   @DeleteMapping("/{id}")
	   public ResponseEntity<Object> delete(@PathVariable("id") String id) {
		   try {
	      todoService.deleteTodo(id);
	      return new ResponseEntity<>("TODO successsfully deleted", HttpStatus.OK);
		   }catch(Exception e) {
			   return new ResponseEntity<>("Invalid Request", HttpStatus.BAD_REQUEST);  
		   }
	   }
	   
	   @PostMapping("/")
	   public ResponseEntity<Object> createTodo(@RequestBody Todo todo) {
		   try {
			   todoService.createTodo(todo);
			   return new ResponseEntity<>("TODO successfully created", HttpStatus.CREATED);
		   }catch(Exception e) {
			   return new ResponseEntity<>("Invalid Request", HttpStatus.BAD_REQUEST);
		   }
	      
	   }
	   
	   
//	   @GetMapping( "/{id}")
//	   public ResponseEntity<Object> 
//	      latestTodo(@PathVariable("id") String id, @RequestBody Todo todo){
//		   try {
//	      todoService.latestTodo(id);
//	      return new ResponseEntity<>("TODO successsfully found", HttpStatus.OK);
//		   }catch(Exception e) {
//			   return new ResponseEntity<>("Invalid Request", HttpStatus.BAD_REQUEST);  
//		   }
//	   }
	   
	
	  
}
	
	

