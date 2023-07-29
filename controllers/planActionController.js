const { PlanAction } = require("../models/planAction");
//const sequelize=require('sequelize');

const getAllPlanActions = async (req, res) => {
  try {
    const planActions = await PlanAction.findAll();
    res.status(200).json(planActions);
  } catch (error) {
    console.error("Error getting PlanActions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createPlanAction = async (req, res) => {
  try {
    const {
      population_id,
      csr_id,
      year,
      programme_id,
      submit,
      ressource_id,
      ressourcesHumain_id,
      createdAt,
      updatedAt,
    } = req.body;

    const newPlanAction = await PlanAction.create({
      population_id,
      csr_id,
      year,
      programme_id,
      submit,
      ressource_id,
      ressourcesHumain_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newPlanAction);
  } catch (error) {
    console.error("Failed to create PlanAction:", error);
    res.status(500).json({ error: "Failed to create PlanAction" });
  }
};

const getPlanActionById = async (req, res) => {
  try {
    const { planAction_id } = req.params;
    const planAction = await PlanAction.findByPk(planAction_id);

    if (!planAction) {
      res.status(404).json({ error: "PlanAction not found" });
    } else {
      res.status(200).json(planAction);
    }
  } catch (error) {
    console.error("Error getting PlanAction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePlanAction = async (req, res) => {
  try {
    const { planAction_id } = req.params;
    const {
      population_id,
      csr_id,
      year,
      programme_id,
      submit,
      ressource_id,
      ressourcesHumain_id,
      createdAt,
      updatedAt,
    } = req.body;

    const r = await PlanAction.findByPk(planAction_id);

    if (!r) {
      res.status(404).json({ error: "PlanAction not found" });
    } else {
      r.population_id = population_id || r.population_id;
      r.csr_id = csr_id || r.csr_id;
      r.year = year || r.year;
      r.programme_id = programme_id || r.programme_id;
      r.submit = submit || r.submit;
      r.ressource_id = ressource_id || r.ressource_id;
      r.ressourcesHumain_id = ressourcesHumain_id || r.ressourcesHumain_id;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify PlanAction:", error);
    res.status(500).json({ error: "Failed to modify PlanAction" });
  }
};

const deletePlanAction = async (req, res) => {
  try {
    const { planAction_id } = req.params;

    const deletePlanAction = await PlanAction.destroy({
      where: { planAction_id },
    });

    if (deletePlanAction === 0) {
      res.status(404).json({ error: "PlanAction not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete PlanAction:", error);
    res.status(500).json({ error: "Failed to delete PlanAction" });
  }
};

module.exports = {
  createPlanAction,
  getAllPlanActions,
  getPlanActionById,
  updatePlanAction,
  deletePlanAction,
};
