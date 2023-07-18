const { DetectionPrecoceCancer } = require("../models/detectionPrecoceCancer");
//const sequelize=require('sequelize');

const getAllDetectionPrecoceCancers = async (req, res) => {
  try {
    const DetectionPrecoceCancers = await DetectionPrecoceCancer.findAll();
    res.status(200).json(DetectionPrecoceCancers);
  } catch (error) {
    console.error("Error getting DetectionPrecoceCancers:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createDetectionPrecoceCancer = async (req, res) => {
  try {
    const {
      year,
      femmeExamine,
      femmeRefere,
      csr,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    } = req.body;
    const newDetectionPrecoceCancer = await DetectionPrecoceCancer.create({
      year,
      femmeExamine,
      femmeRefere,
      csr,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newDetectionPrecoceCancer);
  } catch (error) {
    console.error("Failed to create DetectionPrecoceCancer:", error);
    res.status(500).json({ error: "Failed to create DetectionPrecoceCancer" });
  }
};

const getDetectionPrecoceCancerById = async (req, res) => {
  try {
    const { detectionPrecoceCancer_id } = req.params;
    const detectionPrecoceCancer = await DetectionPrecoceCancer.findByPk(
      detectionPrecoceCancer_id
    );

    if (!detectionPrecoceCancer) {
      res.status(404).json({ error: "DetectionPrecoceCancer not found" });
    } else {
      res.status(200).json(detectionPrecoceCancer);
    }
  } catch (error) {
    console.error("Error getting DetectionPrecoceCancer:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateDetectionPrecoceCancer = async (req, res) => {
  try {
    const { detectionPrecoceCancer_id } = req.params;
    const {
      year,
      femmeExamine,
      femmeRefere,
      csr,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    } = req.body;

    const r = await DetectionPrecoceCancer.findByPk(detectionPrecoceCancer_id);

    if (!r) {
      res.status(404).json({ error: "DetectionPrecoceCancer not found" });
    } else {
      r.year = year || r.year;
      r.femmeExamine = femmeExamine || r.femmeExamine;
      r.femmeRefere = femmeRefere || r.femmeRefere;
      r.csr = csr || r.csr;
      r.trimestre = trimestre || r.trimestre;
      r.sortie_id = sortie_id || r.sortie_id;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify DetectionPrecoceCancer:", error);
    res.status(500).json({ error: "Failed to modify DetectionPrecoceCancer" });
  }
};

const deleteDetectionPrecoceCancer = async (req, res) => {
  try {
    const { detectionPrecoceCancer_id } = req.params;

    const deleteDetectionPrecoceCancer = await DetectionPrecoceCancer.destroy({
      where: { detectionPrecoceCancer_id },
    });

    if (deleteDetectionPrecoceCancer === 0) {
      res.status(404).json({ error: "DetectionPrecoceCancer not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete DetectionPrecoceCancer:", error);
    res.status(500).json({ error: "Failed to delete DetectionPrecoceCancer" });
  }
};

module.exports = {
  createDetectionPrecoceCancer,
  getAllDetectionPrecoceCancers,
  getDetectionPrecoceCancerById,
  updateDetectionPrecoceCancer,
  deleteDetectionPrecoceCancer,
};
