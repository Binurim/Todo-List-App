package com.example.demo.model;

public class AuthenticationBean {
	
	private String message;


    public AuthenticationBean(String message) {
    	this.message=message;
		// TODO Auto-generated constructor stub
	}
    
    //constructors, getters

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }
    
    @Override
    public String toString() {
        return String.format("HelloWorldBean [message=%s]", message);
    }

}
