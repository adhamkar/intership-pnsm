const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { SanteScolaire } = require("../models");
const router = express.Router();

const {
  createSanteScolaire,
  getAllSanteScolaires,
  getSanteScolaireById,
  updateSanteScolaire,
  deleteSanteScolaire,
} = require("../controllers/santeScolaireController");

router.get("/", getAllSanteScolaires);
router.post("/", createSanteScolaire);
router.get("/:santeScolaire_id", getSanteScolaireById);
router.patch("/:santeScolaire_id", updateSanteScolaire);
router.delete("/:santeScolaire_id", deleteSanteScolaire);

module.exports = router;
