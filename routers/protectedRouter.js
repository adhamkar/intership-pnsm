const express = require('express');
const router = express.Router();
const { User } = require('../models/user');
const authenticateToken = require('../middleware/auth');

router.get('/protected', authenticateToken, async (req, res) => {
  // This function will only be executed if the token is valid

  // Get the user ID from the token (you can access the decoded token data from req.user)
  const userEmail = req.user.email;

  try {
    // Find the user with the matching ID in the database
    const user = await User.findOne({ where: { email: userEmail } });

    if (!user) {
      // If the user is not found (unlikely to happen since the token was authenticated)
      return res.status(404).json({ error: 'User not found' });
    }

    // If the user is found, respond with the user data
    res.json({ user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'An error occurred while fetching user data' });
  }
});
module.exports = router;