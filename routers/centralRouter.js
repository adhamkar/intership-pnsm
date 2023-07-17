const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { Central } = require('../models');
const router = express.Router();

const {
  createCentral,
  getAllCentrals,
  getCentralById,
  updateCentral,
  deleteCentral,
}=require("../controllers/centralController");

router.get("/",getAllCentrals );
router.post("/", createCentral);
router.get("/:central_id", getCentralById);
router.patch("/:central_id", updateCentral);
router.delete("/:central_id", deleteCentral);

module.exports = router;