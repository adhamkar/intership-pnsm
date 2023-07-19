const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { PlanificationFamiliale } = require('../models');
const router = express.Router();

const {
  createPlanificationFamiliale,
  getAllPlanificationFamiliales,
  getPlanificationFamilialeById,
  updatePlanificationFamiliale,
  deletePlanificationFamiliale,
}=require("../controllers/planificationFamilialeController");

router.get("/",getAllPlanificationFamiliales );
router.post("/", createPlanificationFamiliale);
router.get("/:planificationFamiliale_id", getPlanificationFamilialeById);
router.patch("/:planificationFamiliale_id", updatePlanificationFamiliale);
router.delete("/:planificationFamiliale_id", deletePlanificationFamiliale);

module.exports = router;