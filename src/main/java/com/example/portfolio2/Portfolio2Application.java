package com.example.portfolio2;

import org.springframework.boot.SpringApplication;
import org.springframework.context.annotation.PropertySource;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@PropertySource("file:.env")
public class Portfolio2Application {

	public static void main(String[] args) {
		SpringApplication.run(Portfolio2Application.class, args);
	}

}
