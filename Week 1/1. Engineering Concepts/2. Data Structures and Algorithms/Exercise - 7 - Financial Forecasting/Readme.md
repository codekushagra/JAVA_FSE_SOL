# Financial Forecasting (Java)

This project demonstrates a simple recursive approach to financial forecasting in Java.  
It calculates the future value of an investment given the current value, an annual growth rate, and a number of years.

---

## Files

- `FinancialForecast.java` – Main Java source file containing the recursive method for future value calculation.
- `FinancialForecast.class` – Compiled Java class file.
- `Financial Forecasting.docx` – Documentation.

---

## Features

- **Recursive Calculation:** Computes the future value of an investment using recursion.
- **Parameters:** Allows setting the current value, growth rate, and number of years.
- **Console Output:** Prints the calculated future value after the specified years.

---

## How to Run

1. **Compile:**
   ```sh
   javac FinancialForecast.java
   ```

2. **Run:**
   ```sh
   java FinancialForecast
   ```

---

## Example Output

```
Future value after 3 years: 1157.63
```

---

## Code Overview

### FinancialForecast.java

```java
public class FinancialForecast {

    public static double futureValue(double currentValue, double growthRate, int years) {
        if (years == 0) {
            return currentValue;
        }
        return futureValue(currentValue * (1 + growthRate), growthRate, years - 1);
    }

    public static void main(String[] args) {
        double currentValue = 1000.0; 
        double growthRate = 0.05;     
        int years = 3;                

        double result = futureValue(currentValue, growthRate, years);
        System.out.printf("Future value after %d years: %.2f\n", years, result);
    }
}
```