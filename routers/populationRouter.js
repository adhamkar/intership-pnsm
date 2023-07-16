const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { Population } = require("../models");
const router = express.Router();

const {
  createPopulation,
  getAllPopulations,
  getPopulationById,
  updatePopulation,
  deletePopulation,
} = require("../controllers/populationController");

router.get("/", getAllPopulations);
router.post("/", createPopulation);
router.get("/:population_id", getPopulationById);
router.patch("/:population_id", updatePopulation);
router.delete("/:population_id", deletePopulation);

module.exports = router;
