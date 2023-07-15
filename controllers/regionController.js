
const { Region } = require("../models/region");
//const sequelize=require('sequelize');

const getAllRegions = async (req, res) => {
  try {
    
    const regions = await Region.findAll();
    res.status(200).json(regions);
  } catch (error) {
    console.error("Error getting Regions:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const createRegion = async (req, res) => {
  try {
    const { region, codeRegion, email, createdAt, updatedAt } = req.body;
    const newRegion = await Region.create({
      region,
      codeRegion,
      email,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newRegion);
  } catch (error) {
    console.error("Failed to create Region:", error);
    res.status(500).json({ error: "Failed to create Region" });
  }
};


 


const getRegionById = async (req, res) => {
  try {
    const { region_id } = req.params;
    const region = await Region.findByPk(region_id);

    if (!region) {
      res.status(404).json({ error: "Region not found" });
    } else {
      res.status(200).json(region);
    }
  } catch (error) {
    console.error("Error getting Region:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateRegion = async (req, res) => {
  try {
    const { region_id } = req.params;
    const { region, codeRegion, email, createdAt, updatedAt } = req.body;

    const r = await Region.findByPk(region_id);

    if (!r) {
      res.status(404).json({ error: "Region not found" });
    } else {
      r.region = region || r.region;
      r.codeRegion = codeRegion || r.codeRegion;
      r.email = email || r.email;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify region:", error);
    res.status(500).json({ error: "Failed to modify region" });
  }
};

const deleteRegion = async (req, res) => {
  try {
    const { region_id } = req.params;

    const deleteRegion = await Region.destroy({ where: { region_id } });

    if (deleteRegion === 0) {
      res.status(404).json({ error: "Region not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete Region:", error);
    res.status(500).json({ error: "Failed to delete Region" });
  }
};

module.exports = {
  createRegion,
  getAllRegions,
  getRegionById,
  updateRegion,
  deleteRegion,
};
