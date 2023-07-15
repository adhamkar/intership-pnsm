const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { Region } = require('../models');
const router = express.Router();

const {
  createRegion,
  getAllRegions,
  getRegionById,
  updateRegion,
  deleteRegion,
}=require("../controllers/regionController");

router.get("/",getAllRegions );
router.post("/", createRegion);
router.get("/:region_id", getRegionById);
router.patch("/:region_id", updateRegion);
router.delete("/:region_id", deleteRegion);

module.exports = router;