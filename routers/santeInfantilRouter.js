const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { SanteInfantil } = require("../models");
const router = express.Router();

const {
  createSanteInfantil,
  getAllSanteInfantils,
  getSanteInfantilById,
  updateSanteInfantil,
  deleteSanteInfantil,
} = require("../controllers/sanetInfantilController");

router.get("/", getAllSanteInfantils);
router.post("/", createSanteInfantil);
router.get("/:santeInfantil_id", getSanteInfantilById);
router.patch("/:santeInfantil_id", updateSanteInfantil);
router.delete("/:santeInfantil_id", deleteSanteInfantil);

module.exports = router;
