
const { User } = require("../models/user");
const sequelize=require('sequelize');
const getAllUsers = async (req, res) => {
  try {
    
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error getting users:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

 



const createUser = async (req, res) => {
  try {
    const { email, password, type, documents, createdAt, updatedAt } = req.body;
    const newUser = await User.create({
      email,
      password,
      type,
      documents,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newUser);
  } catch (error) {
    console.error("Failed to create user:", error);
    res.status(500).json({ error: "Failed to create user" });
  }
};


 


const getUserById = async (req, res) => {
  try {
    const { user_id } = req.params;
    const user = await User.findByPk(user_id);

    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(200).json(user);
    }
  } catch (error) {
    console.error("Error getting user:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { user_id } = req.params;
    const { email, password, type, documents, createdAt, updatedAt } = req.body;

    const user = await User.findByPk(user_id);

    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      user.email = email || user.email;
      user.password = password || user.password;
      user.type = type || user.type;
      user.documents = documents || user.documents;
      user.createdAt = createdAt || user.createdAt;
      user.updatedAt = updatedAt || user.updatedAt;

      await user.save();

      res.status(200).json(user);
    }
  } catch (error) {
    console.error("Failed to modify user:", error);
    res.status(500).json({ error: "Failed to modify user" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const { user_id } = req.params;

    const deletedUser = await User.destroy({ where: { user_id } });

    if (deletedUser === 0) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete user:", error);
    res.status(500).json({ error: "Failed to delete user" });
  }
};

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};
