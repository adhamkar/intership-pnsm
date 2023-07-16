const { Pdr } = require("../models/Pdr");
//const sequelize=require('sequelize');

const getAllPdrs = async (req, res) => {
  try {
    const pdrs = await Pdr.findAll();
    res.status(200).json(pdrs);
  } catch (error) {
    console.error("Error getting Pdrs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createPdr = async (req, res) => {
  try {
    const { localite, pdr, csr, createdAt, updatedAt } = req.body;
    const newPdr = await Pdr.create({
      localite,
      pdr,
      csr,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newPdr);
  } catch (error) {
    console.error("Failed to create Pdr:", error);
    res.status(500).json({ error: "Failed to create Pdr" });
  }
};

const getPdrById = async (req, res) => {
  try {
    const { pdr_id } = req.params;
    const pdr = await Pdr.findByPk(pdr_id);

    if (!pdr) {
      res.status(404).json({ error: "Pdr not found" });
    } else {
      res.status(200).json(pdr);
    }
  } catch (error) {
    console.error("Error getting Pdr:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePdr = async (req, res) => {
  try {
    const { pdr_id } = req.params;
    const { localite, pdr, csr, createdAt, updatedAt } = req.body;

    const r = await Pdr.findByPk(pdr_id);

    if (!r) {
      res.status(404).json({ error: "Pdr not found" });
    } else {
      r.pdr = pdr || r.pdr;
      r.localite = localite || r.localite;
      r.csr = csr || r.csr;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify Pdr:", error);
    res.status(500).json({ error: "Failed to modify Pdr" });
  }
};

const deletePdr = async (req, res) => {
  try {
    const { pdr_id } = req.params;

    const deletePdr = await Pdr.destroy({ where: { pdr_id } });

    if (deletePdr === 0) {
      res.status(404).json({ error: "Pdr not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete Pdr:", error);
    res.status(500).json({ error: "Failed to delete Pdr" });
  }
};

module.exports = {
  createPdr,
  getAllPdrs,
  getPdrById,
  updatePdr,
  deletePdr,
};
