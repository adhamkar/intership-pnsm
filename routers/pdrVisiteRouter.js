const express = require("express");
const { PdrVisite } = require("../models");
const router = express.Router();

const {
  createPdrVisite,
  getAllPdrVisites,
  getPdrVisiteById,
  updatePdrVisite,
  deletePdrVisite,
} = require("../controllers/pdrVisiteController");

router.get("/", getAllPdrVisites);
router.post("/", createPdrVisite);
router.get("/:pdrVisite_id", getPdrVisiteById);
router.patch("/:pdrVisite_id", updatePdrVisite);
router.delete("/:pdrVisite_id", deletePdrVisite);

module.exports = router;
