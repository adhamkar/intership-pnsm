
const { PopulationCible } = require("../models/populationCible");
//const sequelize=require('sequelize');

const getAllPopulationCibles = async (req, res) => {
  try {
    
    const PopulationCibles = await PopulationCible.findAll();
    res.status(200).json(PopulationCibles);
  } catch (error) {
    console.error("Error getting PopulationCible:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const createPopulationCible = async (req, res) => {
  try {
    const { 
      year,  
      populationCible,
      fmar,
      enfant_id,
      enfant_naissancesAttendues,
      enfant_moins1ans,
      enfant_moins5ans,
      trimestre,
      sortie_id,
      csr_id,
      createdAt,
      updatedAt } = req.body;
    const newPopulationCible = await PopulationCible.create({
      year, 
      populationCible,
      fmar,
      enfant_id,
      enfant_naissancesAttendues,
      enfant_moins1ans,
      enfant_moins5ans,
      trimestre,
      sortie_id,
      csr_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newPopulationCible);
  } catch (error) {
    console.error("Failed to create PopulationCible:", error);
    res.status(500).json({ error: "Failed to create PopulationCible" });
  }
};

const getPopulationCibleById = async (req, res) => {
  try {
    const { populationCible_id } = req.params;
    const populationCible = await PopulationCible.findByPk(populationCible_id);

    if (!populationCible) {
      res.status(404).json({ error: "PopulationCible not found" });
    } else {
      res.status(200).json(populationCible);
    }
  } catch (error) {
    console.error("Error getting PopulationCible:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePopulationCible = async (req, res) => {
  try {
    const { populationCible_id } = req.params;
    const { 
      year,  
      populationCible,
      fmar,
      enfant_id,
      enfant_naissancesAttendues,
      enfant_moins1ans,
      enfant_moins5ans,
      trimestre,
      sortie_id,
      csr_id,
      createdAt,
      updatedAt
    } = req.body;

    const p = await PopulationCible.findByPk(populationCible_id);

    if (!p) {
      res.status(404).json({ error: "PopulationCible not found" });
    } else {
      p.year = year || p.year;
      p.populationCible = populationCible || p.populationCible;
      p.fmar = fmar || p.fmar;
      p.enfant_id = enfant_id || p.enfant_id;
      p.enfant_naissancesAttendues = enfant_naissancesAttendues || p.enfant_naissancesAttendues;
      p.enfant_moins1ans = enfant_moins1ans || p.enfant_moins1ans;
      p.enfant_moins5ans = enfant_moins5ans || p.enfant_moins5ans;
      p.trimestre = trimestre || p.trimestre;
      p.sortie_id = sortie_id || p.sortie_id;
      p.csr_id = csr_id || p.csr_id;
      p.createdAt = createdAt || p.createdAt;
      p.updatedAt = updatedAt || p.updatedAt;

      await p.save();

      res.status(200).json(p);
    }
  } catch (error) {
    console.error("Failed to modify PopulationCible:", error);
    res.status(500).json({ error: "Failed to modify PopulationCible" });
  }
};

const deletePopulationCible = async (req, res) => {
  try {
    const { populationCible_id } = req.params;

    const deletePopulationCible = await PopulationCible.destroy({ where: { populationCible_id } });

    if (deletePopulationCible === 0) {
      res.status(404).json({ error: "PopulationCible not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete PopulationCible:", error);
    res.status(500).json({ error: "Failed to delete PopulationCible" });
  }
};

module.exports = {
  createPopulationCible,
  getAllPopulationCibles,
  getPopulationCibleById,
  updatePopulationCible,
  deletePopulationCible,
};
