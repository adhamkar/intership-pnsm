const { AutreActivite } = require("../models/AutreActivite");
//const sequelize=require('sequelize');

const getAllAutreActivites = async (req, res) => {
  try {
    const AutreActivites = await AutreActivite.findAll();
    res.status(200).json(AutreActivites);
  } catch (error) {
    console.error("Error getting AutreActivites:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createAutreActivite = async (req, res) => {
  try {
    const {
      csr_id,
      sortie_id,
      trimestre,
      ignore,
      ativity_id,
      activity_typeBeneficier,
      activity_type,
      activity_Beneficier,
      activity_observation,
      year,
      createdAt,
      updatedAt,
    } = req.body;
    const newAutreActivite = await AutreActivite.create({
      csr_id,
      sortie_id,
      trimestre,
      ignore,
      ativity_id,
      activity_typeBeneficier,
      activity_type,
      activity_Beneficier,
      activity_observation,
      year,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newAutreActivite);
  } catch (error) {
    console.error("Failed to create AutreActivite:", error);
    res.status(500).json({ error: "Failed to create AutreActivite" });
  }
};

const getAutreActiviteById = async (req, res) => {
  try {
    const { autreActivite_id } = req.params;
    const autreActivite = await AutreActivite.findByPk(autreActivite_id);

    if (!autreActivite) {
      res.status(404).json({ error: "AutreActivite not found" });
    } else {
      res.status(200).json(autreActivite);
    }
  } catch (error) {
    console.error("Error getting AutreActivite:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateAutreActivite = async (req, res) => {
  try {
    const { autreActivite_id } = req.params;
    const {
      csr_id,
      sortie_id,
      trimestre,
      ignore,
      ativity_id,
      activity_typeBeneficier,
      activity_type,
      activity_Beneficier,
      activity_observation,
      year,
      createdAt,
      updatedAt,
    } = req.body;

    const r = await AutreActivite.findByPk(autreActivite_id);

    if (!r) {
      res.status(404).json({ error: "AutreActivite not found" });
    } else {
      r.csr_id = csr_id || r.csr_id;
      r.sortie_id = sortie_id || r.sortie_id;
      r.trimestre = trimestre || r.trimestre;
      r.ativity_id = ativity_id || r.ativity_id;
      r.ignore = ignore || r.ignore;
      r.activity_typeBeneficier =
        activity_typeBeneficier || r.activity_typeBeneficier;
      r.activity_type = activity_type || r.activity_type;
      r.activity_Beneficier = activity_Beneficier || r.activity_Beneficier;
      r.activity_observation = activity_observation || r.activity_observation;
      r.year = year || r.year;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify AutreActivite:", error);
    res.status(500).json({ error: "Failed to modify AutreActivite" });
  }
};

const deleteAutreActivite = async (req, res) => {
  try {
    const { autreActivite_id } = req.params;

    const deleteAutreActivite = await AutreActivite.destroy({
      where: { autreActivite_id },
    });

    if (deleteAutreActivite === 0) {
      res.status(404).json({ error: "AutreActivite not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete AutreActivite:", error);
    res.status(500).json({ error: "Failed to delete AutreActivite" });
  }
};

module.exports = {
  createAutreActivite,
  getAllAutreActivites,
  getAutreActiviteById,
  updateAutreActivite,
  deleteAutreActivite,
};
