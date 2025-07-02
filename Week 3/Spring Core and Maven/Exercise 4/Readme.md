# Library Management - Exercise 4

## Overview

This project is a simple **Library Management** application built as part of Exercise 4 for learning Spring Core and Maven.  
It demonstrates basic Spring dependency injection and Maven project setup using **Spring Boot**.

---

## Project Structure

- **`BookService.java`**  
  A service class that manages book operations using a `BookRepository`.  
  Dependency injection is handled via a setter method.

  ```java
  public class BookService {
      private BookRepository bookRepository;

      // Setter for dependency injection
      public void setBookRepository(BookRepository bookRepository) {
          this.bookRepository = bookRepository;
      }

      public void addBook(String bookName) {
          bookRepository.saveBook(bookName);
      }
  }
  ```

---

## Exercise 4: Creating and Configuring a Maven Project

### Scenario

You need to set up a new Maven project for the library management application and add Spring dependencies.

### Steps

1. **Create a New Maven Project:**
   - Create a new Maven project named **Library_Management**.

2. **Add Spring Dependencies in `pom.xml`:**
   - Include dependencies for:
     - Spring Context (included via Spring Boot starter)
     - Spring AOP
     - Spring WebMVC (included via Spring Boot starter)

3. **Configure Maven Plugins:**
   - The Maven Compiler Plugin is managed by Spring Boot, but you can set the Java version in the `<properties>` section.

---

## `pom.xml` Dependency Section

Your `pom.xml` should include:

```xml
<dependencies>
    <!-- Spring WebMVC and Spring Context (via starter) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Spring AOP -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-aop</artifactId>
    </dependency>

    <!-- Spring Boot Test (for testing) -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>
```

---

## Java Version

Your `pom.xml` currently uses Java 17:
```xml
<properties>
    <java.version>17</java.version>
</properties>
```
If you are required to use Java 1.8, change it to:
```xml
<properties>
    <java.version>1.8</java.version>
</properties>
```
and ensure your JDK matches.

---

