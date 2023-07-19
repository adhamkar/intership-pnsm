const { PlanificationFamiliale } = require("../models/planificationFamiliale");
//const sequelize=require('sequelize');

const getAllPlanificationFamiliales = async (req, res) => {
  try {
    const PlanificationFamiliales = await PlanificationFamiliale.findAll();
    res.status(200).json(PlanificationFamiliales);
  } catch (error) {
    console.error("Error getting PlanificationFamiliales:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createPlanificationFamiliale = async (req, res) => {
  try {
    const {
      year,
      pilule_id,
      pilule_na,
      pilule_aa,
      injectable_id,
      injectable_na,
      injectable_aa,
      diu_id,
      diu_na,
      diu_aa,
      condom_id,
      condom_na,
      condom_aa,
      reference_id,
      reference_diu,
      reference_it,
      csr_id,
      sortie_id,
      trimestre,
      createdAt,
      updatedAt,
    } = req.body;
    const newPlanificationFamiliale = await PlanificationFamiliale.create({
      year,
      pilule_id,
      pilule_na,
      pilule_aa,
      injectable_id,
      injectable_na,
      injectable_aa,
      diu_id,
      diu_na,
      diu_aa,
      condom_id,
      condom_na,
      condom_aa,
      reference_id,
      reference_diu,
      reference_it,
      csr_id,
      sortie_id,
      trimestre,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newPlanificationFamiliale);
  } catch (error) {
    console.error("Failed to create PlanificationFamiliale:", error);
    res.status(500).json({ error: "Failed to create PlanificationFamiliale" });
  }
};

const getPlanificationFamilialeById = async (req, res) => {
  try {
    const { planificationFamiliale_id } = req.params;
    const planificationFamiliale = await PlanificationFamiliale.findByPk(planificationFamiliale_id);

    if (!planificationFamiliale) {
      res.status(404).json({ error: "PlanificationFamiliale not found" });
    } else {
      res.status(200).json(planificationFamiliale);
    }
  } catch (error) {
    console.error("Error getting PlanificationFamiliale:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePlanificationFamiliale = async (req, res) => {
  try {
    const { planificationFamiliale_id } = req.params;
    const {
      year,
      pilule_id,
      pilule_na,
      pilule_aa,
      injectable_id,
      injectable_na,
      injectable_aa,
      diu_id,
      diu_na,
      diu_aa,
      condom_id,
      condom_na,
      condom_aa,
      reference_id,
      reference_diu,
      reference_it,
      csr_id,
      sortie_id,
      trimestre,
      createdAt,
      updatedAt,
    } = req.body;

    const r = await PlanificationFamiliale.findByPk(planificationFamiliale_id);

    if (!r) {
      res.status(404).json({ error: "PlanificationFamiliale not found" });
    } else {
      r.year = year || r.year;
      r.pilule_id = pilule_id || r.pilule_id;
      r.pilule_na = pilule_na || r.pilule_na;
      r.pilule_aa = pilule_aa || r.pilule_aa;
      r.injectable_id = injectable_id || r.injectable_id;
      r.injectable_na = injectable_na || r.injectable_na;
      r.injectable_aa = injectable_aa || r.injectable_aa;
      r.diu_id = diu_id || r.diu_id;
      r.diu_na = diu_na || r.diu_na;
      r.diu_aa = diu_aa || r.diu_aa;
      r.condom_id = condom_id || r.condom_id;
      r.condom_na = condom_na || r.condom_na;
      r.condom_aa = condom_aa || r.condom_aa;
      r.reference_id = reference_id || r.reference_id;
      r.reference_diu = reference_diu || r.reference_diu;
      r.csr_id = csr_id || r.csr_id;
      r.sortie_id = sortie_id || r.sortie_id;
      r.trimestre = trimestre || r.trimestre;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify PlanificationFamiliale:", error);
    res.status(500).json({ error: "Failed to modify PlanificationFamiliale" });
  }
};

const deletePlanificationFamiliale = async (req, res) => {
  try {
    const { planificationFamiliale_id } = req.params;

    const deletePlanificationFamiliale = await PlanificationFamiliale.destroy({
      where: { planificationFamiliale_id },
    });

    if (deletePlanificationFamiliale === 0) {
      res.status(404).json({ error: "PlanificationFamiliale not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete PlanificationFamiliale:", error);
    res.status(500).json({ error: "Failed to delete PlanificationFamiliale" });
  }
};

module.exports = {
  createPlanificationFamiliale,
  getAllPlanificationFamiliales,
  getPlanificationFamilialeById,
  updatePlanificationFamiliale,
  deletePlanificationFamiliale,
};
