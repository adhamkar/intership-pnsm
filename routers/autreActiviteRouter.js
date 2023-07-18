const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { AutreActivite } = require('../models');
const router = express.Router();

const {
  createAutreActivite,
  getAllAutreActivites,
  getAutreActiviteById,
  updateAutreActivite,
  deleteAutreActivite,
}=require("../controllers/autreActiviteController");

router.get("/",getAllAutreActivites );
router.post("/", createAutreActivite);
router.get("/:autreActivite_id", getAutreActiviteById);
router.patch("/:autreActivite_id", updateAutreActivite);
router.delete("/:autreActivite_id", deleteAutreActivite);

module.exports = router;