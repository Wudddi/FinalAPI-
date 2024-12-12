const express = require('express'); // Import Express framework
const fs = require('fs'); // Import File System module for reading and writing files
const app = express(); // Create an instance of the Express application
const PORT = 3000; // Define the port number for the server

app.use(express.json()); // Middleware to parse JSON request bodies

// Path to the JSON file used as the data source
const DATA_PATH = './data/movies.json';

// Function to read data from the JSON file
function readData() {
    return JSON.parse(fs.readFileSync(DATA_PATH, 'utf8')); // Read and parse JSON data
}

// Function to write data to the JSON file
function writeData(data) {
    fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8'); // Write formatted JSON data
}

// Create a new movie (POST)
app.post('/movies', (req, res) => {
    const movies = readData(); // Read existing movies
    const newMovie = req.body; // Get the new movie data from the request body
    newMovie.id = Date.now(); // Assign a unique ID based on the current timestamp
    movies.push(newMovie); // Add the new movie to the array
    writeData(movies); // Save updated data to the JSON file
    res.status(201).json(newMovie); // Respond with the created movie
});

// Get all movies (GET)
app.get('/movies', (req, res) => {
    const movies = readData(); // Read all movies from the JSON file
    res.json(movies); // Respond with the list of movies
});

// Get a specific movie by ID (GET)
app.get('/movies/:id', (req, res) => {
    const movies = readData(); // Read all movies
    const movie = movies.find(m => m.id == req.params.id); // Find the movie with the matching ID
    if (movie) {
        res.json(movie); // Respond with the found movie
    } else {
        res.status(404).json({ message: 'Movie not found' }); // Respond with 404 if not found
    }
});

// Update an existing movie by ID (PUT)
app.put('/movies/:id', (req, res) => {
    const movies = readData(); // Read all movies
    const index = movies.findIndex(m => m.id == req.params.id); // Find the index of the movie with the matching ID
    if (index !== -1) {
        movies[index] = { ...movies[index], ...req.body }; // Update the movie with new data
        writeData(movies); // Save updated data to the JSON file
        res.json(movies[index]); // Respond with the updated movie
    } else {
        res.status(404).json({ message: 'Movie not found' }); // Respond with 404 if not found
    }
});


// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`); // Log server URL
});
