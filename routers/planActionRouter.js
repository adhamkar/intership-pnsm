const express = require("express");

const { PlanAction } = require("../models");
const router = express.Router();

const {
  createPlanAction,
  getAllPlanActions,
  getPlanActionById,
  updatePlanAction,
  deletePlanAction,
} = require("../controllers/PlanActionController");

router.get("/", getAllPlanActions);
router.post("/", createPlanAction);
router.get("/:planAction_id", getPlanActionById);
router.patch("/:planAction_id", updatePlanAction);
router.delete("/:planAction_id", deletePlanAction);

module.exports = router;
