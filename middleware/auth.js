// middleware/auth.js
const { verifyToken } = require('../utils/jwt');

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization')?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const decodedToken = verifyToken(token);
  if (!decodedToken) {
    return res.status(401).json({ error: 'Invalid token' });
  }

  req.user = decodedToken;
  next();
};

module.exports = authenticateToken;
