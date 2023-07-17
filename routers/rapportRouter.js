const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { Rapport } = require('../models');
const router = express.Router();

const {
  createRapport,
  getAllRapports,
  getRapportById,
  updateRapport,
  deleteRapport,
}=require("../controllers/rapportController");

router.get("/",getAllRapports );
router.post("/", createRapport);
router.get("/:rapport_id", getRapportById);
router.patch("/:rapport_id", updateRapport);
router.delete("/:rapport_id", deleteRapport);

module.exports = router;