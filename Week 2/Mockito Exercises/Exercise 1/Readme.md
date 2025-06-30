# Mockito Exercise 1 – Mocking and Stubbing

This project demonstrates the basics of mocking and stubbing using Mockito and JUnit in Java.

---

## Files

- `Ex1.java` – Contains example classes and a unit test using Mockito.
- `lib/junit-platform-console-standalone-1.13.0-M3.jar` – JUnit platform for running tests.
- `Ex_1_Mocking-Stubbing.docx` – Documentation.

---

## Overview

- **ExternalApi:** Simulates an external dependency with a `getData()` method.
- **MyService:** Uses `ExternalApi` to fetch data.
- **Ex1 (Test):** Uses Mockito to mock `ExternalApi` and stub its `getData()` method for testing `MyService`.

---

## How to Run the Test

1. **Compile:**
   ```sh
   javac -cp "lib/junit-platform-console-standalone-1.13.0-M3.jar" Ex1.java
   ```

2. **Run the test:**
   ```sh
   java -jar lib/junit-platform-console-standalone-1.13.0-M3.jar --class-path . --scan-class-path
   ```

---

## Example Test Code

```java
import org.junit.Test;
import static org.junit.Assert.*;
import static org.mockito.Mockito.*;

class ExternalApi {
    public String getData() {
        return "Real Data";
    }
}

class MyService {
    private ExternalApi api;

    public MyService(ExternalApi api) {
        this.api = api;
    }

    public String fetchData() {
        return api.getData();
    }
}

public class Ex1 {
    @Test
    public void testExternalApi() {
        ExternalApi mockApi = mock(ExternalApi.class);
        when(mockApi.getData()).thenReturn("Mock Data");
        MyService service = new MyService(mockApi);
        String result = service.fetchData();
        assertEquals("Mock Data", result);
    }
}
```

---
