const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { Sortie } = require('../models');
const router = express.Router();

const {
  createSortie,
  getAllSorties,
  getSortieById,
  updateSortie,
  deleteSortie,
}=require("../controllers/sortieController");

router.get("/",getAllSorties );
router.post("/", createSortie);
router.get("/:sortie_id", getSortieById);
router.patch("/:sortie_id", updateSortie);
router.delete("/:sortie_id", deleteSortie);

module.exports = router;