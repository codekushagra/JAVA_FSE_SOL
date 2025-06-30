# Library Management Application – Spring Dependency Injection Example

This documentation explains how to implement and test dependency injection between `BookService` and `BookRepository` using Spring's IoC container with XML configuration.

---

## Project Structure

```
Library_Management/
├── src/
│   ├── main/
│   │   ├── java/
│   │   │   └── com/
│   │   │       └── example/
│   │   │           └── Library_Management/
│   │   │               ├── LibraryManagementApplication.java
│   │   │               ├── service/
│   │   │               │   └── BookService.java
│   │   │               └── repository/
│   │   │                   └── BookRepository.java
│   │   └── resources/
│   │       └── applicationContext.xml
└── pom.xml
```

---

## 1. XML Configuration (`applicationContext.xml`)

Defines beans and wires `BookRepository` into `BookService` using setter injection.

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="
         http://www.springframework.org/schema/beans
         http://www.springframework.org/schema/beans/spring-beans.xsd">

    <bean id="bookRepository" class="com.example.Library_Management.repository.BookRepository" />

    <bean id="bookService" class="com.example.Library_Management.service.BookService">
        <property name="bookRepository" ref="bookRepository"/>
    </bean>
</beans>
```

---

## 2. BookRepository Class

```java
package com.example.Library_Management.repository;

public class BookRepository {
    public void saveBook(String bookName) {
        System.out.println("Book saved: " + bookName);
    }
}
```

---

## 3. BookService Class

```java
package com.example.Library_Management.service;

import com.example.Library_Management.repository.BookRepository;

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

## 4. Main Application Class

```java
package com.example.Library_Management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.example.Library_Management.service.BookService;

@SpringBootApplication
public class LibraryManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(LibraryManagementApplication.class, args);

        // Load beans from applicationContext.xml
        ApplicationContext context = new ClassPathXmlApplicationContext("applicationContext.xml");
        BookService bookService = (BookService) context.getBean("bookService");
        bookService.addBook("Spring in Action");
    }
}
```

---

## 5. How to Run

1. **Build the project** (if using Maven):
   ```sh
   mvn clean package
   ```

2. **Run the application:**
   - From terminal:
     ```sh
     mvn spring-boot:run
     ```
   - Or run `LibraryManagementApplication.java` directly from your IDE.

3. **Expected Output:**
   ```
   Book saved: Spring in Action
   ```

---

## Summary

- `BookRepository` is injected into `BookService` via setter injection, configured in `applicationContext.xml`.
- The main class loads the Spring context and tests the dependency injection.
- If you see the expected output, dependency injection is working correctly.