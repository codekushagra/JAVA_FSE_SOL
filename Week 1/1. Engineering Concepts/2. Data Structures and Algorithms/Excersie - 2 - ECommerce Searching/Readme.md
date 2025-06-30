# E-Commerce Product Searching (Java)

This project demonstrates basic searching and sorting algorithms on an array of products in Java. It includes implementations of linear search, bubble sort, and binary search for a simple e-commerce scenario.

---

## Files

- `EComSearching.java` – Main Java source file containing the `Product` class and the `EComSearching` class with search and sort methods.
- `EComSearching.class`, `Product.class` – Compiled Java class files.
- `ECommerce Searching.docx` – Documentation.

---

## Features

- **Product Model:** Each product has an `id`, `name`, and `category`.
- **Linear Search:** Find a product by name using a simple linear scan.
- **Bubble Sort:** Sort products alphabetically by name (case-insensitive).
- **Binary Search:** Efficiently find a product by name after sorting.

---

## How to Run

1. **Compile:**
   ```sh
   javac EComSearching.java
   ```

2. **Run:**
   ```sh
   java EComSearching
   ```

---

## Example Output

```
Linear Search: Found Phone
Binary Search: Found Phone
```

---

## Code Overview

### Product Class

```java
class Product {
    int id;
    String name;
    String category;

    Product(int id, String name, String category) {
        this.id = id;
        this.name = name;
        this.category = category;
    }
}
```

### EComSearching Class (Main)

```java
public class EComSearching {
    // ... linearSearch, bubbleSort, binarySearch methods ...

    public static void main(String[] args) {
        Product[] products = {
            new Product(1, "Laptop", "Electronics"),
            new Product(2, "Shirt", "Clothing"),
            new Product(3, "Book", "Stationery"),
            new Product(4, "Phone", "Electronics"),
            new Product(5, "Shoes", "Footwear")
        };

        // Linear Search
        int pos1 = linearSearch(products, "Phone");
        if (pos1 != -1)
            System.out.println("Linear Search: Found " + products[pos1].name);
        else
            System.out.println("Linear Search: Not found");

        // Bubble Sort before Binary Search
        bubbleSort(products);

        // Binary Search
        int pos2 = binarySearch(products, "Phone");
        if (pos2 != -1)
            System.out.println("Binary Search: Found " + products[pos2].name);
        else
            System.out.println("Binary Search: Not found");
    }
}
```