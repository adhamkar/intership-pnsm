const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { MaladiePiste } = require('../models');
const router = express.Router();

const {
  createMaladiePiste,
  getAllMaladiePistes,
  getMaladiePisteById,
  updateMaladiePiste,
  deleteMaladiePiste,
}=require("../controllers/maladiePisteController");

router.get("/",getAllMaladiePistes );
router.post("/", createMaladiePiste);
router.get("/:maladiePiste_id", getMaladiePisteById);
router.patch("/:maladiePiste_id", updateMaladiePiste);
router.delete("/:maladiePiste_id", deleteMaladiePiste);

module.exports = router;