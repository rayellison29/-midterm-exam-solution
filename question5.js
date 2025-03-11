// Import required modules
const express = require('express');
const { Sequelize, DataTypes } = require('sequelize');

// Set up Sequelize connection
const sequelize = new Sequelize('mysql://username:password@localhost:3306/database_name');

// Define the User model
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  // Model options (timestamps, etc.)
  timestamps: false,
});

// Create Express app
const app = express();

// Define a route to fetch all users
app.get('/users', async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();
    res.json(users);  // Return all users as JSON
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Connect to the database and start the server
sequelize.authenticate()
  .then(() => {
    console.log('Database connection successful');
    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });
