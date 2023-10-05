const express = require("express");
const { RessourceHumaine } = require("../models");
const router = express.Router();

const {
  createRessourceHumaine,
  getAllRessourceHumaines,
  getRessourceHumaineById,
  updateRessourceHumaine,
  deleteRessourceHumaine,
  getlastRHid,
} = require("../controllers/ressourceHumaineController");

router.get('/last', getlastRHid);
router.get("/", getAllRessourceHumaines);
router.post("/", createRessourceHumaine);
router.get("/:ressourceHumaine_id", getRessourceHumaineById);
router.patch("/:ressourceHumaine_id", updateRessourceHumaine);
router.delete("/:ressourceHumaine_id", deleteRessourceHumaine);

module.exports = router;
