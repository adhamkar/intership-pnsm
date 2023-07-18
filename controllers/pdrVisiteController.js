const { PdrVisite } = require("../models/pdrVisite");
//const sequelize=require('sequelize');

const getAllPdrVisites = async (req, res) => {
  try {
    const PdrVisites = await PdrVisite.findAll();
    res.status(200).json(PdrVisites);
  } catch (error) {
    console.error("Error getting PdrVisites:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createPdrVisite = async (req, res) => {
  try {
    const { 
      year,
      realise,
      id_unique,
      KmParcourus,
      observation,
      csr_id,
      trimestre,
      sortie_id,
      budgetCarburantEmConsomme,
      createdAt,
      updatedAt } = req.body;
    const newPdrVisite = await PdrVisite.create({
      year,
      realise,
      id_unique,
      KmParcourus,
      observation,
      csr_id,
      trimestre,
      sortie_id,
      budgetCarburantEmConsomme,
      createdAt,
      updatedAt
    });
    res.status(201).json(newPdrVisite);
  } catch (error) {
    console.error("Failed to create PdrVisite:", error);
    res.status(500).json({ error: "Failed to create PdrVisite" });
  }
};

const getPdrVisiteById = async (req, res) => {
  try {
    const { pdrVisite_id } = req.params;
    const pdrVisite = await PdrVisite.findByPk(pdrVisite_id);

    if (!pdrVisite) {
      res.status(404).json({ error: "PdrVisite not found" });
    } else {
      res.status(200).json(pdrVisite);
    }
  } catch (error) {
    console.error("Error getting PdrVisite:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePdrVisite = async (req, res) => {
  try {
    const { pdrVisite_id } = req.params;
    const { 
      year,
      realise,
      id_unique,
      KmParcourus,
      observation,
      csr_id,
      trimestre,
      sortie_id,
      budgetCarburantEmConsomme,
      createdAt,
      updatedAt
     } = req.body;

    const r = await PdrVisite.findByPk(pdrVisite_id);

    if (!r) {
      res.status(404).json({ error: "PdrVisite not found" });
    } else {
      r.year = year || r.year;
      r.realise = realise || r.realise;
      r.csr_id = csr_id || r.csr_id;
      r.id_unique = id_unique || r.id_unique;
      r.KmParcourus = KmParcourus || r.KmParcourus;
      r.observation = observation || r.observation;
      r.trimestre = trimestre || r.trimestre;
      r.sortie_id = sortie_id || r.sortie_id;
      r.budgetCarburantEmConsomme = budgetCarburantEmConsomme || r.budgetCarburantEmConsomme;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify PdrVisite:", error);
    res.status(500).json({ error: "Failed to modify PdrVisite" });
  }
};

const deletePdrVisite = async (req, res) => {
  try {
    const { pdrVisite_id } = req.params;
    const deletePdrVisite = await PdrVisite.destroy({ where: { pdrVisite_id } });
    if (deletePdrVisite === 0) {
      res.status(404).json({ error: "PdrVisite not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete PdrVisite:", error);
    res.status(500).json({ error: "Failed to delete PdrVisite" });
  }
};

module.exports = {
  createPdrVisite,
  getAllPdrVisites,
  getPdrVisiteById,
  updatePdrVisite,
  deletePdrVisite,
};
