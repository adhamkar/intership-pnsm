const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { User } = require('../models');
const router = express.Router();
/*
router.get('/users/:user_id/email', async (req, res) => {
  try {
    const user_id = req.params.user_id;
    const user = await User.findByPk(user_id);

    if (!user) {
      res.status(404).json({ error: "User email not found" });
    } else {
      const email = user.email;
      res.status(200).json({ email });
    }
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
*/
const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getUserByemail
} = require("../controllers/userController");

/*
router.get("/", async (req, res) => {
  try {
    // Fetch all users from the database
    const users = await User.findAll();

    res.status(200).json(users);
  } catch (error) {
    console.error('Error getting users:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
*/
router.get("/",getAllUsers );
router.post("/", createUser);
router.get("/:user_id", getUserById);
router.patch("/:user_id", updateUser);
router.delete("/:user_id", deleteUser);
router.get("/:user_id/email", getUserByemail);


module.exports = router;

