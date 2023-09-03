const express = require("express");

const { Programme } = require("../models");
const router = express.Router();

const {
  createProgramme,
  getAllProgrammes,
  getProgrammeById,
  updateProgramme,
  deleteProgramme,
  getlastprogrammeid,
} = require("../controllers/programmeController");

router.get('/last',getlastprogrammeid);
router.get("/", getAllProgrammes);
router.post("/", createProgramme);
router.get("/:programme_id", getProgrammeById);
router.patch("/:programme_id", updateProgramme);
router.delete("/:programme_id", deleteProgramme);


module.exports = router;
