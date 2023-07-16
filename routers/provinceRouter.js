const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { Province } = require("../models");
const router = express.Router();

const {
  createProvince,
  getAllProvinces,
  getProvinceById,
  updateProvince,
  deleteProvince,
} = require("../controllers/provinceController");

router.get("/", getAllProvinces);
router.post("/", createProvince);
router.get("/:province_id", getProvinceById);
router.patch("/:province_id", updateProvince);
router.delete("/:province_id", deleteProvince);

module.exports = router;
