const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { DetectionPrecoceCancer } = require('../models');
const router = express.Router();

const {
  createDetectionPrecoceCancer,
  getAllDetectionPrecoceCancers,
  getDetectionPrecoceCancerById,
  updateDetectionPrecoceCancer,
  deleteDetectionPrecoceCancer,
}=require("../controllers/detectionPrecoceCancerController");

router.get("/",getAllDetectionPrecoceCancers );
router.post("/", createDetectionPrecoceCancer);
router.get("/:detectionPrecoceCancer_id", getDetectionPrecoceCancerById);
router.patch("/:detectionPrecoceCancer_id", updateDetectionPrecoceCancer);
router.delete("/:detectionPrecoceCancer_id", deleteDetectionPrecoceCancer);

module.exports = router;