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

public class EComSearching {
    
    static int linearSearch(Product[] products, String name) {
        for (int i = 0; i < products.length; i++) {
            if (products[i].name.equalsIgnoreCase(name)) {
                return i;
            }
        }
        return -1;
    }

    // Binary search by product name 
    static int binarySearch(Product[] products, String name) {
        int left = 0, right = products.length - 1;
        while (left <= right) {
            int mid = (left + right) / 2;
            int cmp = products[mid].name.compareToIgnoreCase(name);
            if (cmp == 0) return mid;
            if (cmp < 0) left = mid + 1;
            else right = mid - 1;
        }
        return -1;
    }

    // Bubble sort by product name
    static void bubbleSort(Product[] products) {
        int n = products.length;
        for (int i = 0; i < n - 1; i++) {
            for (int j = 0; j < n - i - 1; j++) {
                if (products[j].name.compareToIgnoreCase(products[j + 1].name) > 0) {
                    // Swap
                    Product temp = products[j];
                    products[j] = products[j + 1];
                    products[j + 1] = temp;
                }
            }
        }
    }

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




        // We need Bubble Sort before doing Binary Search
        bubbleSort(products);



        // Binary Search
        int pos2 = binarySearch(products, "Phone");
        if (pos2 != -1)
            System.out.println("Binary Search: Found " + products[pos2].name);
        else
            System.out.println("Binary Search: Not found");
    }
}