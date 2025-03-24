import express from 'express';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create an instance of the Express app
const app = express();

// Test route
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

// Get the port from the environment variable, or default to 5000
const port = process.env.PORT;

// Start the server 
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
