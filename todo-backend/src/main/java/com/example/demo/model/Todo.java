package com.example.demo.model;

//import java.time.LocalDateTime;

import org.springframework.data.annotation.Id;

public class Todo {
    @Id
    private String _id;
    private String title;
    private String description;
    private String date;
    private String startTime;
    private String endTime;
    private Boolean completed;
   // private LocalDateTime created;
   
    
	
	public Todo(String _id, String title, String description, String date, String startTime, String endTime, Boolean completed) {
		super();
		this._id = _id;
		this.title = title;
		this.description = description;
		this.date = date;
		this.startTime = startTime;
		this.endTime = endTime;
		this.completed=completed;
	
	}

	public String getId() {
		return _id;
	}
	public void setId(String _id) {
		this._id = _id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getStartTime() {
		return startTime;
	}
	public void setStartTime(String startTime) {
		this.startTime = startTime;
	}
	public String getEndTime() {
		return endTime;
	}
	public void setEndTime(String endTime) {
		this.endTime = endTime;
	}
	
	public Boolean getCompleted() {
		return completed;
	}
	public void setCompleted(Boolean completed) {
		this.completed = completed;
	}
	
	
	
	   
}
