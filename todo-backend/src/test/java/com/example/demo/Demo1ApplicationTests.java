package com.example.demo;

import org.junit.Test;
import org.junit.runner.RunWith;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.context.SpringBootTest.WebEnvironment;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.web.server.LocalServerPort;
import org.springframework.test.context.junit4.SpringRunner;

import static org.assertj.core.api.Assertions.assertThat;
import java.net.URISyntaxException;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment= WebEnvironment.RANDOM_PORT)   //to start the server with a random port (useful to avoid conflicts in test environments)

public class Demo1ApplicationTests {

    @LocalServerPort
    int port;
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Test
  	public void contextLoads() throws Exception{
  		
  	}
    
    @Test
    public void greetingShouldReturnDefaultMessage() throws URISyntaxException {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/",
                String.class)).contains("Welcome");
    }
    
    @Test
    public void getTodoListSuccess() throws URISyntaxException {
        assertThat(this.restTemplate.getForObject("http://localhost:" + port + "/Todos",
                String.class)).contains("Todos");
    }
    
   
}

