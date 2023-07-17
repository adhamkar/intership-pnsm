const { Rapport } = require("../models/Rapport");
//const sequelize=require('sequelize');

const getAllRapports = async (req, res) => {
  try {
    const Rapports = await Rapport.findAll();
    res.status(200).json(Rapports);
  } catch (error) {
    console.error("Error getting Rapports:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createRapport = async (req, res) => {
  try {
    const { email, csr_id, trimestre, year, sortie_id, createdAt, updatedAt } =
      req.body;
    const newRapport = await Rapport.create({
      email,
      csr_id,
      trimestre,
      year,
      sortie_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newRapport);
  } catch (error) {
    console.error("Failed to create Rapport:", error);
    res.status(500).json({ error: "Failed to create Rapport" });
  }
};

const getRapportById = async (req, res) => {
  try {
    const { rapport_id } = req.params;
    const rapport = await Rapport.findByPk(rapport_id);

    if (!rapport) {
      res.status(404).json({ error: "Rapport not found" });
    } else {
      res.status(200).json(rapport);
    }
  } catch (error) {
    console.error("Error getting Rapport:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateRapport = async (req, res) => {
  try {
    const { rapport_id } = req.params;
    const { csr_id, trimestre, year, sortie_id, createdAt, updatedAt } = req.body;

    const rapport = await Rapport.findByPk(rapport_id);

    if (!rapport) {
      return res.status(404).json({ error: "Rapport not found" }); // Added return statement
    } else {
      rapport.csr_id = csr_id || rapport.csr_id;
      rapport.trimestre = trimestre || rapport.trimestre;
      rapport.year = year || rapport.year; // Fixed typo: Rapport.year to rapport.year
      rapport.sortie_id = sortie_id || rapport.sortie_id;
      rapport.createdAt = createdAt || rapport.createdAt;
      rapport.updatedAt = updatedAt || rapport.updatedAt;

      await rapport.save();

      return res.status(200).json(rapport); // Added return statement
    }
  } catch (error) {
    console.error("Failed to modify Rapport:", error);
    res.status(500).json({ error: "Failed to modify Rapport" });
  }
};

const deleteRapport = async (req, res) => {
  try {
    const { rapport_id } = req.params;

    const deletedRapport = await Rapport.destroy({ where: { rapport_id } });

    if (deletedRapport === 0) {
      res.status(404).json({ error: "Rapport not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete Rapport:", error);
    res.status(500).json({ error: "Failed to delete Rapport" });
  }
};

module.exports = {
  createRapport,
  getAllRapports,
  getRapportById,
  updateRapport,
  deleteRapport,
};
