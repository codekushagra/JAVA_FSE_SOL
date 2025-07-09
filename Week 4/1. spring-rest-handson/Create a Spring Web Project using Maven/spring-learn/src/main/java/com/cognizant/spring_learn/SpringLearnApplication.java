package com.cognizant.spring_learn;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringLearnApplication {
	 private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);


	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
		logMain();
	}
	private static void logMain() {
        LOGGER.info("Start");
        LOGGER.info("End");
    }

}
