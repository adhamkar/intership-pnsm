const express = require("express");
const { Csr } = require('../models');
const router = express.Router();

const {
  createCsr,
  getAllCsrs,
  getCsrById,
  updateCsr,
  deleteCsr,
}=require("../controllers/csrController");

router.get("/",getAllCsrs );
router.post("/", createCsr);
router.get("/:csr_id", getCsrById);
router.patch("/:csr_id", updateCsr);
router.delete("/:csr_id", deleteCsr);

module.exports = router;