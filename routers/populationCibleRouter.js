const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { PopulationCible } = require('../models');
const router = express.Router();

const {
  createPopulationCible,
  getAllPopulationCibles,
  getPopulationCibleById,
  updatePopulationCible,
  deletePopulationCible,
}=require("../controllers/populationCibleController");

router.get("/",getAllPopulationCibles );
router.post("/", createPopulationCible);
router.get("/:populationCible_id", getPopulationCibleById);
router.patch("/:populationCible_id", updatePopulationCible);
router.delete("/:populationCible_id", deletePopulationCible);

module.exports = router;