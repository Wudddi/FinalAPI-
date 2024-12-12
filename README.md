
# Final Exam: Building a Simple API

A simple RESTful API built with Node.js and Express for managing movies. The data is stored in a JSON file and includes CRUD operations to create, read, update, and delete movie records.

---
## Student infomation

- Name: Zhiyuan Wu.
- Email: zwu9487@conestogac.on.ca.
- Student Number: 8849487.

---

## Features

- Create a new movie with attributes like `title`, `genre`, and `releaseYear`.
- Read all movies or fetch a specific movie by ID.
- Update existing movie details using their unique ID.
- Delete movies by ID.
- Data persistence using a JSON file.

---

## Installation Instructions

Follow these steps to set up the project locally:

1. **Clone the Repository**  
   Clone the repository to your local machine:
   ```bash
   git clone <repository_url>
   cd <project_directory>
   ```

2. **Install Dependencies**  
   Install the required Node.js dependencies:
   ```bash
   npm install
   ```

3. **Run the Application**  
   Start the server locally:
   ```bash
   node index.js
   ```
   The server will start at `http://localhost:3000`.

---

## API Endpoints

### 1. **Create a Movie**
- **POST** `http://localhost:3000/movies`
- **Request Body Example**:
  ```json
  {
      "title": "Inception",
      "genre": "Sci-Fi",
      "releaseYear": 2010
  }
  ```
- **Response Example**:
  ```json
  {
      "id": 123456789,
      "title": "Inception",
      "genre": "Sci-Fi",
      "releaseYear": 2010
  }
  ```

---

### 2. **Get All Movies**
- **GET** `http://localhost:3000/movies`
- **Response Example**:
  ```json
  [
      {
          "id": 123456789,
          "title": "Inception",
          "genre": "Sci-Fi",
          "releaseYear": 2010
      },
      {
          "id": 987654321,
          "title": "The Matrix",
          "genre": "Action",
          "releaseYear": 1999
      }
  ]
  ```

---

### 3. **Get a Movie by ID**
- **GET** `http://localhost:3000/movies/:id`
  - Replace `:id` with the actual movie ID.
  - Example: `http://localhost:3000/movies/123456789`
- **Response Example** (if ID exists):
  ```json
  {
      "id": 123456789,
      "title": "Inception",
      "genre": "Sci-Fi",
      "releaseYear": 2010
  }
  ```
- **Response Example** (if ID does not exist):
  ```json
  {
      "message": "Movie not found"
  }
  ```

---

### 4. **Update a Movie**
- **PUT** `http://localhost:3000/movies/:id`
  - Replace `:id` with the actual movie ID.
  - Example: `http://localhost:3000/movies/123456789`
- **Request Body Example**:
  ```json
  {
      "genre": "Action"
  }
  ```
- **Response Example**:
  ```json
  {
      "id": 123456789,
      "title": "Inception",
      "genre": "Action",
      "releaseYear": 2010
  }
  ```

---

### 5. **Delete a Movie**
- **DELETE** `http://localhost:3000/movies/:id`
  - Replace `:id` with the actual movie ID.
  - Example: `http://localhost:3000/movies/123456789`
- **Response Example** (if ID exists):
  ```json
  {
      "message": "Movie deleted successfully",
      "deletedMovie": {
          "id": 123456789,
          "title": "Inception",
          "genre": "Sci-Fi",
          "releaseYear": 2010
      }
  }
  ```
- **Response Example** (if ID does not exist):
  ```json
  {
      "message": "Movie not found"
  }
  ```

---

## Example Usage with cURL

Here are some example cURL commands for testing the endpoints:

1. **Create a Movie**:
   ```bash
   curl -X POST http://localhost:3000/movies    -H "Content-Type: application/json"    -d '{"title": "The Dark Knight", "genre": "Action", "releaseYear": 2008}'
   ```

2. **Get All Movies**:
   ```bash
   curl -X GET http://localhost:3000/movies
   ```

3. **Get a Movie by ID**:
   ```bash
   curl -X GET http://localhost:3000/movies/123456789
   ```

4. **Update a Movie**:
   ```bash
   curl -X PUT http://localhost:3000/movies/123456789    -H "Content-Type: application/json"    -d '{"genre": "Thriller"}'
   ```

5. **Delete a Movie**:
   ```bash
   curl -X DELETE http://localhost:3000/movies/123456789
   ```

---
