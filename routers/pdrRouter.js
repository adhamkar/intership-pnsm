const express = require("express");
const { Pdr } = require("../models");
const router = express.Router();

const {
  createPdr,
  getAllPdrs,
  getPdrById,
  updatePdr,
  deletePdr,
} = require("../controllers/pdrController");

router.get("/", getAllPdrs);
router.post("/", createPdr);
router.get("/:pdr_id", getPdrById);
router.patch("/:pdr_id", updatePdr);
router.delete("/:pdr_id", deletePdr);

module.exports = router;
