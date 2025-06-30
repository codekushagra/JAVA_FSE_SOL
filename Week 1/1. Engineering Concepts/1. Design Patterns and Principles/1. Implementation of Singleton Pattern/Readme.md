# Singleton Pattern Example (Java)

This repository demonstrates the implementation of the **Singleton Design Pattern** in Java using a simple example class called `Samosa`.

---

## What is the Singleton Pattern?

The Singleton Pattern ensures that a class has only one instance and provides a global point of access to it.  
It is commonly used when exactly one object is needed to coordinate actions across the system.

---

## Project Structure

```
.
├── Example.java
├── Samosa.java
└── Singleton_Pattern.docx
```

- **Samosa.java**: Implements the Singleton pattern.
- **Example.java**: Demonstrates the usage of the singleton instance.
- **Singleton_Pattern.docx**: Documentation about the Singleton pattern.

---

## How It Works

- The constructor of `Samosa` is private, preventing direct instantiation.
- The static method `getSamosa()` provides access to the single instance, creating it if it does not exist.
- Double-checked locking is used for thread safety.

---

## Usage

1. **Compile the code:**
   ```sh
   javac Samosa.java Example.java
   ```

2. **Run the example:**
   ```sh
   java Example
   ```

3. **Expected Output:**
   ```
   [some_hash_code]
   [same_hash_code_as_above]
   ```
   Both hash codes will be the same, proving that only one instance of `Samosa` is created.

---

## Code Example

### Samosa.java

```java
public class Samosa {

   private static Samosa samosa; 

    private Samosa() { }

    public static Samosa getSamosa() {
        if (samosa == null) {
            synchronized(Samosa.class) {
                if (samosa == null) {
                    samosa = new Samosa();
                }
            }
        }
        return samosa;
    }
}
```

### Example.java

```java
public class Example {
    public static void main(String[] args) {
        Samosa samosa1 = Samosa.getSamosa();
        System.out.println(samosa1.hashCode());

        Samosa samosa2 = Samosa.getSamosa();
        System.out.println(samosa2.hashCode());
    }
}
```

---

