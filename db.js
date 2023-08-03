const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());

// Use 127.0.0.1 instead of ::1
const mongoURI = 'mongodb://127.0.0.1:27017/Test';

// Function to connect to MongoDB and return the Express app
const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit the application if the connection fails
  }
  
  return app;
};

module.exports = connectDB; // Export the connectDB function
