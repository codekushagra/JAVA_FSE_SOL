# Mockito Exercise 2 – Verifying Interactions

This project demonstrates how to use Mockito to verify interactions between objects in Java unit tests.

---

## Files

- `Ex2.java` – Contains example classes and a unit test using Mockito to verify method calls.
- `lib/junit-platform-console-standalone-1.13.0-M3.jar` – JUnit platform for running tests.
- `Ex_2_Verifying-Interactions.docx` – Documentation.

---

## Overview

- **ExternalApi:** Simulates an external dependency with a `getData()` method.
- **MyService:** Uses `ExternalApi` to fetch data.
- **Ex2 (Test):** Uses Mockito to mock `ExternalApi` and verify that its `getData()` method is called when `MyService.fetchData()` is invoked.

---

## How to Run the Test

1. **Compile:**
   ```sh
   javac -cp "lib/junit-platform-console-standalone-1.13.0-M3.jar" Ex2.java
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

public class Ex2 {
    @Test
    public void testVerifyInteraction() {
        ExternalApi mockApi = mock(ExternalApi.class);
        MyService service = new MyService(mockApi);
        service.fetchData();
        verify(mockApi).getData();
    }
}
```

---

