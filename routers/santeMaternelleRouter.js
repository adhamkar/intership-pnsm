const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { SanteMaternelle } = require("../models");
const router = express.Router();

const {
  createSanteMaternelle,
  getAllSanteMaternelles,
  getSanteMaternelleById,
  updateSanteMaternelle,
  deleteSanteMaternelle,
} = require("../controllers/santeMaternelleController");

router.get("/", getAllSanteMaternelles);
router.post("/", createSanteMaternelle);
router.get("/:santeMaternelle_id", getSanteMaternelleById);
router.patch("/:santeMaternelle_id", updateSanteMaternelle);
router.delete("/:santeMaternelle_id", deleteSanteMaternelle);

module.exports = router;
