const { Ressource } = require("../models/ressource");
//const sequelize=require('sequelize');

const getAllRessources = async (req, res) => {
  try {
    const Ressources = await Ressource.findAll();
    res.status(200).json(Ressources);
  } catch (error) {
    console.error("Error getting Ressources:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createRessource = async (req, res) => {
  try {
    const {
      year,
      vehicule_id,
      vehicule_type,
      vehicule_age,
      budget_id,
      budget_besoinCarburant,
      budget_KmsParcourus,
      besoinUsm,
      observation,
      csr_id,
      createdAt,
      updatedAt,
    } = req.body;
    const newRessource = await Ressource.create({
      year,
      vehicule_id,
      vehicule_type,
      vehicule_age,
      budget_id,
      budget_besoinCarburant,
      budget_KmsParcourus,
      besoinUsm,
      observation,
      csr_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newRessource);
  } catch (error) {
    console.error("Failed to create Ressource:", error);
    res.status(500).json({ error: "Failed to create Ressource" });
  }
};

const getlastRessoureid = async (req, res) => {
  try {
    const lastInsertedRecord = await Ressource.findOne({
      order: [['ressource_id', 'DESC']],
    });
    
    if (lastInsertedRecord) {
      res.json(lastInsertedRecord);
    } else {
      res.status(404).json({ message: 'No records found' });
    }
  } catch (error) {
    console.error("Error getting last record:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getRessourceById = async (req, res) => {
  try {
    const { ressource_id } = req.params;
    const ressource = await Ressource.findByPk(ressource_id);

    if (!ressource) {
      res.status(404).json({ error: "Ressource not found" });
    } else {
      res.status(200).json(ressource);
    }
  } catch (error) {
    console.error("Error getting Ressource:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateRessource = async (req, res) => {
  try {
    const { ressource_id } = req.params;
    const {
      year,
      vehicule_id,
      vehicule_type,
      vehicule_age,
      budget_id,
      budget_besoinCarburant,
      budget_KmsParcourus,
      besoinUsm,
      observation,
      csr_id,
      createdAt,
      updatedAt,
    } = req.body;

    const r = await Ressource.findByPk(ressource_id);

    if (!r) {
      res.status(404).json({ error: "Ressource not found" });
    } else {
      r.year = year || r.year;
      r.vehicule_id = vehicule_id || r.vehicule_id;
      r.vehicule_type = vehicule_type || r.vehicule_type;
      r.vehicule_age = vehicule_age || r.vehicule_age;
      r.budget_id = budget_id || r.budget_id;
      r.budget_besoinCarburant =
        budget_besoinCarburant || r.budget_besoinCarburant;
      r.budget_KmsParcourus = budget_KmsParcourus || r.budget_KmsParcourus;
      r.besoinUsm = besoinUsm || r.besoinUsm;
      r.observation = observation || r.observation;
      r.csr_id = csr_id || r.csr_id;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify Ressource:", error);
    res.status(500).json({ error: "Failed to modify Ressource" });
  }
};

const deleteRessource = async (req, res) => {
  try {
    const { ressource_id } = req.params;

    const deleteRessource = await Ressource.destroy({
      where: { ressource_id },
    });

    if (deleteRessource === 0) {
      res.status(404).json({ error: "Ressource not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete Ressource:", error);
    res.status(500).json({ error: "Failed to delete Ressource" });
  }
};

module.exports = {
  createRessource,
  getAllRessources,
  getRessourceById,
  updateRessource,
  deleteRessource,
  getlastRessoureid
};
