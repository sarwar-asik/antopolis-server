# Antopolis-server

## Server Overview

Antopolis-server is a server-side application designed to manage animal and category relations. It provides CRUD operations for animals and categories, with image upload and processing capabilities. also implement authentication by JWT and cookie parser for login/signup

## Used Technologies

- TypeScript
- Mongoose (MongoDB ORM)
- JWT (JSON Web Tokens) for authentication
- Husky (Git hooks)
- Prettier (Code formatting)
- Express.js (Backend framework)
- Multer (File upload handling)
- Sharp (Image processing)

## API Endpoints

- **Image Operations**

  - `POST /api/v1/image` - Upload an image
  - `GET /api/v1/image/:id` - Retrieve an image by ID

- **Category Operations**

  - `GET /api/v1/category` - Retrieve all categories
  - `GET /api/v1/category/:id` - Retrieve a category by ID
  - `POST /api/v1/category` - Create a new category
  - `PUT /api/v1/category/:id` - Update a category by ID
  - `DELETE /api/v1/category/:id` - Delete a category by ID

- **Animal Operations**
  - `GET /api/v1/animal` - Retrieve all animals
  - `GET /api/v1/animal/:id` - Retrieve an animal by ID
  - `POST /api/v1/animal` - Create a new animal
  - `PUT /api/v1/animal/:id` - Update an animal by ID
  - `DELETE /api/v1/animal/:id` - Delete an animal by ID

## Features

- **Image Management**

  - Upload and retrieve images with automatic resizing and processing using Sharp.

- **Category Management**

  - Perform CRUD operations on categories, including creation, retrieval, update, and deletion.

- **Animal Management**
  - Manage animals with relationships to categories, allowing CRUD operations for animals linked to specific categories.

---

@sarwarasik
