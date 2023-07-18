const express = require("express");
//const { sequelize, DataTypes } = require("sequelize");
const { Ressource } = require("../models");
const router = express.Router();

const {
  createRessource,
  getAllRessources,
  getRessourceById,
  updateRessource,
  deleteRessource,
} = require("../controllers/ressourceController");

router.get("/", getAllRessources);
router.post("/", createRessource);
router.get("/:ressource_id", getRessourceById);
router.patch("/:ressource_id", updateRessource);
router.delete("/:ressource_id", deleteRessource);

module.exports = router;
