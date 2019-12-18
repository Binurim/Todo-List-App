package com.example.demo.repository;

import org.bson.Document;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.demo.model.Todo;
import com.mongodb.client.MongoCollection;

public interface TodoRepository extends MongoRepository<Todo,String> {
    Todo findBy_id(String _id);
    
    
 // connect to your collection. 
    //MongoCollection<Document> todo = Todo.latestTodo("todo");

  //request last inserted doc
  //  Document latestTodo = todo.find().sort(new Document("_id", -1)).first();
    
}
