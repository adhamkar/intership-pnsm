const express = require('express');
//const authController = require('../controllers/auth');

const router = express.Router();
const bcrypt = require('bcrypt');
const { User } = require('../models/user');
const { generateToken } = require('../utils/jwt');

router.post('/login', async (req, res) => {
  
  const { email, password } = req.body;

  try {
    // Find the user by email in the database
    const user = await User.findOne({ where: { email } });
    console.log("User found:", user);
    if (!user) {
      console.log("User not found for email:", email);
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log("Invalid password for email:", email);
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Generate a JWT token for the user
    const token = generateToken(user);

    // Respond with the token
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Authentication failed' });
  }
});

router.post('/signup', async (req, res) => {
  const { email, password, type } = req.body;

  try {
    // Check if the user already exists in the database
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'Email already exists' });
    }

    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user with the data from the request body
    const newUser = await User.create({ email, password: hashedPassword, type });

    // Generate a JWT token for the new user
    const token = generateToken(newUser);

    // Respond with the token
    res.status(201).json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Signup failed' });
  }
});

module.exports = router;
/*
router.post('/signup', authController.signup);
router.post('/login', authController.login);
*/


module.exports = router;
