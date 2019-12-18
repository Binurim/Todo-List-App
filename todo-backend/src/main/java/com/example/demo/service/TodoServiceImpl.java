package com.example.demo.service;
import java.util.Collection;

import org.bson.Document;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.model.Todo;
import com.example.demo.repository.TodoRepository;
import com.mongodb.client.MongoCollection;

@Service
public class TodoServiceImpl implements TodoService{
	
	@Autowired
	TodoRepository todoRepo;
		  
	   @Override
	   public void createTodo(Todo todo){
		   todoRepo.save(todo);
	   }

	   @Override
	   public void updateTodo(String id, Todo todo){
		   todoRepo.save(todoRepo.findBy_id(id));
	   }

	   @Override
	   public void deleteTodo(String id) {
		   todoRepo.delete(todoRepo.findBy_id(id));
	   }
//	   
//	   @Override
//	   public Collection<Todo> latestTodo() {
//		   //return todoRepo.findAll();
//		   todoRepo.findBy_();
//	   }
//	   
//	    public Collection<Todo> todo = Todo.latestTodo("todo");
//
//	    
	    
	   @Override
	   public Collection<Todo> getTodos() {
	        return todoRepo.findAll();
	   }

		     	  
	   	  
}

	

