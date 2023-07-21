
const bcrypt = require('bcrypt');
const {jwt} = require('../utils/jwt');
const {User} = require('../models/user');

// User registration (Sign up)
/*
exports.signup = async (req, res) => {
  try {

    if (!req.body.type) {
      return res.status(400).json({ error: 'Type field is required' });
    }
      const user = await User.create({
      email: req.body.email,
      password: req.body.password,
      type: req.body.type, 
    });
    // Respond with a success message or user data
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    res.status(500).json({ error: 'Registration failed' });
    console.log(error)
  }
};

*/

// User login (Sign in)
/*

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email in the database
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Generate a JWT token for the user
    const token = jwt.generateToken(user);

    // Respond with the token
    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Authentication failed' });
    
  }
};
*/
/*
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find the user by email in the database
    const user = await User.findOne({ where: { email } });

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ error: 'Authentication failed' });
    }
    if (!user.password) {
      console.log('password not found');
      return res.status(401).json({ error: 'Authentication failed' });
    }
    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      console.log('Incorrect password');
      return res.status(401).json({ error: 'Authentication failed' });
    }

    // Generate a JWT token for the user
    const token = jwt.sign({ userId: user.user_id, email: user.email }, 'SECRET_KEY', {
      expiresIn: '1h', // Set the token expiration time as per your requirements
    });

    // Respond with the token
    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Authentication failed' });
  }
};
*/




