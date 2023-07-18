const { MaladiePiste } = require("../models/maladiePiste");
//const sequelize=require('sequelize');

const getAllMaladiePistes = async (req, res) => {
  try {
    const MaladiePistes = await MaladiePiste.findAll();
    res.status(200).json(MaladiePistes);
  } catch (error) {
    console.error("Error getting MaladiePistes:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createMaladiePiste = async (req, res) => {
  try {
    const {
      year,
      maladie,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    } = req.body;
    const newMaladiePiste = await MaladiePiste.create({
      year,
      maladie,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newMaladiePiste);
  } catch (error) {
    console.error("Failed to create MaladiePiste:", error);
    res.status(500).json({ error: "Failed to create MaladiePiste" });
  }
};

const getMaladiePisteById = async (req, res) => {
  try {
    const { maladiePiste_id } = req.params;
    const maladiePiste = await MaladiePiste.findByPk(maladiePiste_id);

    if (!maladiePiste) {
      res.status(404).json({ error: "MaladiePiste not found" });
    } else {
      res.status(200).json(maladiePiste);
    }
  } catch (error) {
    console.error("Error getting MaladiePiste:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateMaladiePiste = async (req, res) => {
  try {
    const { maladiePiste_id } = req.params;
    const {
      year,
      maladie,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    } = req.body;

    const r = await MaladiePiste.findByPk(maladiePiste_id);

    if (!r) {
      res.status(404).json({ error: "MaladiePiste not found" });
    } else {
      r.year = year || r.year;
      r.maladie = maladie || r.maladie;
      r.csr_id = csr_id || r.csr_id;
      r.trimestre = trimestre || r.trimestre;
      r.sortie_id = sortie_id || r.sortie_id;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify MaladiePiste:", error);
    res.status(500).json({ error: "Failed to modify MaladiePiste" });
  }
};

const deleteMaladiePiste = async (req, res) => {
  try {
    const { maladiePiste_id } = req.params;

    const deleteMaladiePiste = await MaladiePiste.destroy({
      where: { maladiePiste_id },
    });

    if (deleteMaladiePiste === 0) {
      res.status(404).json({ error: "MaladiePiste not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete MaladiePiste:", error);
    res.status(500).json({ error: "Failed to delete MaladiePiste" });
  }
};

module.exports = {
  createMaladiePiste,
  getAllMaladiePistes,
  getMaladiePisteById,
  updateMaladiePiste,
  deleteMaladiePiste,
};
