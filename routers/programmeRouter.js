const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { Programme } = require("../models");
const router = express.Router();

const {
  createProgramme,
  getAllProgrammes,
  getProgrammeById,
  updateProgramme,
  deleteProgramme,
} = require("../controllers/programmeController");

router.get("/", getAllProgrammes);
router.post("/", createProgramme);
router.get("/:programme_id", getProgrammeById);
router.patch("/:programme_id", updateProgramme);
router.delete("/:programme_id", deleteProgramme);

module.exports = router;
