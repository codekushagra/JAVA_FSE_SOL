# Factory Design Pattern Example (Java)

This repository demonstrates the **Factory Design Pattern** in Java by modeling a simple employee management system for different developer roles.

---

## What is the Factory Design Pattern?

The Factory Pattern is a creational design pattern that provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.  
It is useful when the exact type of the object to be created is determined at runtime.

---

## Project Structure

```
.
├── AndroidDeveloper.java
├── DeveloperClient.java
├── Employee.java
├── EmployeeFactory.java
├── WebDeveloper.java
└── Factory Design Pattern.docx
```

---

## How It Works

- **Employee**: An interface with a `salary()` method.
- **AndroidDeveloper** and **WebDeveloper**: Implement the `Employee` interface, each returning a different salary.
- **EmployeeFactory**: Contains a static method `getEmployee(String empType)` that returns the appropriate `Employee` implementation based on the input.
- **DeveloperClient**: Demonstrates usage of the factory by requesting an employee and printing their salary.

---

## Usage

1. **Compile the code:**
   ```sh
   javac *.java
   ```

2. **Run the example:**
   ```sh
   java DeveloperClient
   ```

3. **Expected Output:**
   ```
   Getting Android Developer Salary
   50000
   ```

   If you change `"ANDROID DEVELOPER"` to `"WEB DEVELOPER"` in `DeveloperClient.java`, the output will be:
   ```
   Getting Web Developer Salary
   40000
   ```

---

## Code Example

### Employee.java

```java
interface Employee {
    int salary();
}
```

### AndroidDeveloper.java

```java
public class AndroidDeveloper implements Employee {
    public int salary() {
        System.out.println("Getting Android Developer Salary");
        return 50000;
    }
}
```

### WebDeveloper.java

```java
public class WebDeveloper implements Employee {
    public int salary() {
        System.out.println("Getting Web Developer Salary");
        return 40000;
    }
}
```

### EmployeeFactory.java

```java
public class EmployeeFactory {
    public static Employee getEmployee(String empType) {
        if(empType.trim().equalsIgnoreCase("Android Developer")) {
            return new AndroidDeveloper();
        } else if(empType.trim().equalsIgnoreCase("Web Developer")) {
            return new WebDeveloper();
        } else {
            return null;
        }
    }
}
```

### DeveloperClient.java

```java
public class DeveloperClient {
    public static void main(String[] args) {
        Employee empp = EmployeeFactory.getEmployee("ANDROID DEVELOPER");
        System.out.println(empp.salary());