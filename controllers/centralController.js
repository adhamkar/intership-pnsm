
const { Central } = require("../models/central");
//const sequelize=require('sequelize');

const getAllCentrals = async (req, res) => {
  try {
    
    const Centrals = await Central.findAll();
    res.status(200).json(Centrals);
  } catch (error) {
    console.error("Error getting Centrals:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const createCentral = async (req, res) => {
  try {
    const { email, password, type, documents, createdAt, updatedAt } = req.body;
    const newCentral = await Central.create({
      email,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newCentral);
  } catch (error) {
    console.error("Failed to create Central:", error);
    res.status(500).json({ error: "Failed to create Central" });
  }
};


 


const getCentralById = async (req, res) => {
  try {
    const { central_id } = req.params;
    const central = await Central.findByPk(central_id);

    if (!central) {
      res.status(404).json({ error: "Central not found" });
    } else {
      res.status(200).json(central);
    }
  } catch (error) {
    console.error("Error getting Central:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateCentral = async (req, res) => {
  try {
    const { central_id } = req.params;
    const { email, createdAt, updatedAt } = req.body;

    const c = await Central.findByPk(central_id);

    if (!c) {
      res.status(404).json({ error: "Central not found" });
    } else {
      c.email = email || c.email;
      c.createdAt = createdAt || c.createdAt;
      c.updatedAt = updatedAt || c.updatedAt;

      await c.save();

      res.status(200).json(c);
    }
  } catch (error) {
    console.error("Failed to modify Central:", error);
    res.status(500).json({ error: "Failed to modify Central" });
  }
};

const deleteCentral = async (req, res) => {
  try {
    const { central_id } = req.params;

    const deletedCentral = await Central.destroy({ where: { central_id } });

    if (deletedCentral === 0) {
      res.status(404).json({ error: "Central not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete Central:", error);
    res.status(500).json({ error: "Failed to delete Central" });
  }
};

module.exports = {
  createCentral,
  getAllCentrals,
  getCentralById,
  updateCentral,
  deleteCentral,
};
