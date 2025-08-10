## Product Management API

A well-structured RESTful API for product management with complete CRUD operations. Built following modern Node.js best practices with organized codebase using Express routers for endpoint definitions and controllers for request handling logic.

## Technologies

- Node.js - JavaScript runtime environment
- Express.js - Web application framework
- MongoDB - NoSQL database
- Mongoose - MongoDB object modeling library
- Nodemon - Development auto-reload tool

## Architecture & Best Practices

- Express Router - Organized endpoint definitions
- Controller Pattern - Dedicated request handling logic
- Schema Validation - Mongoose schema with validation rules
- Error Handling - Consistent error responses across endpoints

## API Endpoints

Base URL: http://localhost:3000/api/products  

||||
|--|--|--|
Method|Endpoint|Description|
|POST|/|Create product|
|GET|/|Get all products|
|GET|/:id|Get product by ID|
|PUT|/:id|Update product|
|DELETE|/:id|Delete product|

## Product Schema

```json
{
  "name": "string (required)",
  "quantity": "number (default: 0)",
  "price": "number (default: 0)",
  "image": "string (optional)"
}
```

## Example Usage

Create Product:  
```bash
POST /api/products
{
  "name": "iPhone 15",
  "quantity": 10,
  "price": 999.99
}
```

Get All Products:  
```bash
GET /api/products
```

Update Product:  
```bash
PUT /api/products/:id
{
  "price": 1099.99
}
```
