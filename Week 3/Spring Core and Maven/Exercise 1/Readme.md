# Library Management Application

A simple Spring application demonstrating XML-based bean configuration for a library management backend.

---

## Features

- Uses Spring Core with XML configuration
- Demonstrates basic service and repository beans
- Simple example of dependency injection

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

## Getting Started

### Prerequisites

- Java 8 or higher
- Maven

### Build

```sh
mvn clean install
```

### Run

```sh
mvn spring-boot:run
```
Or run `LibraryManagementApplication.java` from your IDE.

---

## Usage

When you run the application, you should see:

```
Book saved: Spring in Action
```

---

## Key Files

### `applicationContext.xml`

Defines beans for `BookService` and `BookRepository`:

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

### `BookRepository.java`

```java
package com.example.Library_Management.repository;

public class BookRepository {
    public void saveBook(String bookName) {
        System.out.println("Book saved: " + bookName);
    }
}
```

### `BookService.java`

```java
package com.example.Library_Management.service;

import com.example.Library_Management.repository.BookRepository;

public class BookService {
    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void addBook(String bookName) {
        bookRepository.saveBook(bookName);
    }
}
```

### `LibraryManagementApplication.java`

```java
package com.example.Library_Management;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import com.example.Library_Management.service.BookService;

@SpringBootApplication
public class LibraryManagementApplication