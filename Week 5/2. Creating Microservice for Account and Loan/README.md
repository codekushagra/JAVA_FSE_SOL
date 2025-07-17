# 🏦 Bank Microservices – Account & Loan

This project contains two independent Spring Boot microservices that simulate a simple banking system. Each microservice is a standalone Maven project, designed to run independently and respond with dummy JSON data for demonstration purposes.

## 📁 Project Structure

```
bank-microservices/
│
├── account/                    # Account microservice
│   ├── src/
│   ├── pom.xml
│
├── loan/                       # Loan microservice
│   ├── src/
│   ├── pom.xml
│
 # Screenshots of endpoint testing (optional)
│   ├── account_endpoint_test.png
│   └── loan_endpoint_test.png
│
└── README.md                   # You're here!
```

## ⚙️ Tech Stack

- Java 17+
- Spring Boot 3.x
- Maven
- Spring Web
- Spring Boot DevTools
- Eclipse IDE (or any other Java IDE)

## 📘 Account Microservice

### 🔧 Setup

1. Navigate to the account service folder:
   ```bash
   cd account
   ```

2. Build and run the service:
   ```bash
   mvn clean package
   mvn spring-boot:run
   ```

### 📡 Endpoint

```http
GET http://localhost:8080/accounts/{number}
```

### 📦 Sample Response

```json
{
  "number": "00987987973432",
  "type": "savings",
  "balance": 234343
}
```

## 📗 Loan Microservice

### 🔧 Setup

1. Navigate to the loan service folder:
   ```bash
   cd loan
   ```

2. Before running, configure port to avoid conflict with account service. Add the following line in:
   ```
   src/main/resources/application.properties
   ```
   ```properties
   server.port=8081
   ```

3. Build and run:
   ```bash
   mvn clean package
   mvn spring-boot:run
   ```

### 📡 Endpoint

```http
GET http://localhost:8081/loans/{number}
```

### 📦 Sample Response

```json
{
  "number": "H00987987972342",
  "type": "car",
  "loan": 400000,
  "emi": 3258,
  "tenure": 18
}
```

## 🧪 API Testing

You can test the APIs using:

### ✅ Browser

Visit:
- `http://localhost:8080/accounts/00987987973432`
- `http://localhost:8081/loans/H00987987972342`


### ✅ Postman

1. Create a GET request for the respective URLs.
2. Send and verify dummy JSON response.



