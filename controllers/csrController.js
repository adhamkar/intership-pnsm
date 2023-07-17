const { Csr } = require("../models/Csr");
//const sequelize=require('sequelize');

const getAllCsrs = async (req, res) => {
  try {
    const Csrs = await Csr.findAll();
    res.status(200).json(Csrs);
  } catch (error) {
    console.error("Error getting Csrs:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createCsr = async (req, res) => {
  try {
    const {
      region,
      province,
      cs,
      commune,
      csr,
      category,
      codeRegion,
      codeProvince,
      email,
      createdAt,
      updatedAt,
    } = req.body;
    const newCsr = await Csr.create({
      region,
      province,
      cs,
      commune,
      csr,
      category,
      codeRegion,
      codeProvince,
      email,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newCsr);
  } catch (error) {
    console.error("Failed to create Csr:", error);
    res.status(500).json({ error: "Failed to create Csr" });
  }
};

const getCsrById = async (req, res) => {
  try {
    const { csr_id } = req.params;
    const csr = await Csr.findByPk(csr_id);

    if (!csr) {
      res.status(404).json({ error: "Csr not found" });
    } else {
      res.status(200).json(csr);
    }
  } catch (error) {
    console.error("Error getting Csr:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateCsr = async (req, res) => {
  try {
    const { csr_id } = req.params;
    const {
      region,
      province,
      cs,
      commune,
      csr,
      category,
      codeRegion,
      codeProvince,
      email,
      createdAt,
      updatedAt,
    } = req.body;

    const r = await Csr.findByPk(csr_id);

    if (!r) {
      res.status(404).json({ error: "Csr not found" });
    } else {
      r.region = region || r.region;
      r.province = province || r.province;
      r.cs = cs || r.cs;
      r.commune = commune || r.commune;
      r.csr = csr || r.csr;
      r.category = category || r.category;
      r.codeRegion = codeRegion || r.codeRegion;
      r.codeProvince = codeProvince || r.codeProvince;
      r.email = email || r.email;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify Csr:", error);
    res.status(500).json({ error: "Failed to modify Csr" });
  }
};

const deleteCsr = async (req, res) => {
  try {
    const { csr_id } = req.params;

    const deleteCsr = await Csr.destroy({
      where: { csr_id },
    });

    if (deleteCsr === 0) {
      res.status(404).json({ error: "Csr not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete Csr:", error);
    res.status(500).json({ error: "Failed to delete Csr" });
  }
};

module.exports = {
  createCsr,
  getAllCsrs,
  getCsrById,
  updateCsr,
  deleteCsr,
};
