# Spring Core and Maven – Exercise 4

This project is part of the **Spring Core and Maven** learning series.  
It builds upon the Maven and Spring configuration demonstrated in [Exercise 1](../Exercise%201/Readme.md).

---

## Prerequisites

- Java 8 or higher
- Maven (see [Exercise 1 Maven Configuration](../Exercise%201/Readme.md#maven-configuration))
- Spring Boot (managed via Maven dependencies)

---

## Maven Configuration

For Maven setup and dependency management, **refer to the detailed configuration in [Exercise 1/Library_Management/pom.xml](../Exercise%201/Library_Management/pom.xml)**.  
This includes:
- Spring Boot parent and dependencies
- Build plugins
- Java version configuration

If you are setting up a new module or project for Exercise 4, you can copy or adapt the `pom.xml` from Exercise 1.

---

## Project Structure

Typical structure (adapt as needed for Exercise 4):

```
Exercise 4/
├── src/
│   ├── main/
│   │   ├── java/
│   │   └── resources/
│   └── test/
├── pom.xml
```

---

## How to Build and Run

1. **Build the project:**
   ```sh
   mvn clean install
   ```

2. **Run the application:**
   ```sh
   mvn spring-boot:run
   ```
   Or run the main class directly from your IDE.

---

## Notes

- For any Spring or Maven configuration, refer to the [Exercise 1 README](../Exercise%201/Readme.md) and its `pom.xml`.
- Ensure your dependencies and plugins match those in Exercise 1 for consistency.
- If you have specific requirements or differences for Exercise 4, update this README accordingly.

---

## References

- [Exercise 1 README](../Exercise%201/Readme.md)
- [Spring Boot Documentation](https://docs.spring.io/spring-boot/docs/current/reference/html/)
- [Maven Documentation](https://maven.apache.org/guides/index.html)
