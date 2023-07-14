const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { User } = require('../models');
const router = express.Router();


const {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
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

module.exports = router;

