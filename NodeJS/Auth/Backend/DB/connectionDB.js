const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const DB_URL = process.env.DB_URL;
// Connect to MongoDB
mongoose.connect(DB_URL)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

// Define the User schema with validations
const userSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true
   },
  age: { 
    type: Number, 
    min: 0
   },
  email: { 
    type: String, 
    required: true, 
     
  },
  password: { 
    type: String, 
    required: true 
  },
  contact: { 
    type: String, 
    required: true 
  }, 
  address: { 
    type: String, 
    required: true 
  },
  dateOfBirth: { 
    type: Date, 
    required: true 

  }
}, { timestamps: true }); 
// Create the User model
const User = mongoose.model('users', userSchema);

module.exports = User; 
