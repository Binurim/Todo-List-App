package com.example.demo.service;

import java.util.Collection;

import com.example.demo.model.Todo;

public interface TodoService {
	   public abstract void createTodo(Todo todo);
	   public abstract void updateTodo(String id, Todo todo);
	   public abstract void deleteTodo(String id);
	   public abstract Collection<Todo> getTodos();

}