/*
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secret-key'; 

exports.generateToken = (user) => {
  const payload = {
    user_id: user.id, 
    email: user.email,
    password:user.password
  };

  return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' }); // Token expires in 1 hour
};

exports.verifyToken = (token) => {
  try {
    return jwt.verify(token, SECRET_KEY);
  } catch (error) {
    return null; // Invalid token
  }
};
*/

// utils/jwt.js
const jwt = require('jsonwebtoken');
const secretKey = 'secret_key';
// Function to generate a JWT token
const generateToken = (user) => {
  const token = jwt.sign(
    { 
      id: user.id, 
      email: user.email 
    }, 
    secretKey, { expiresIn: '1h' });
    const refreshToken = jwt.sign(
      { 
        id: user.id, 
        email: user.email,
        refreshToken: true 
      }, 
      secretKey, { expiresIn: '7s' });
  return {token,refreshToken};
};


const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, secretKey);
    return decoded;
  } catch (error) {
    return null;
  }
};

module.exports = { generateToken, verifyToken };
