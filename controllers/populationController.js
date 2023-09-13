
const { Population } = require("../models/population");
//const sequelize=require('sequelize');

const getAllPopulations = async (req, res) => {
  try {
    
    const populations = await Population.findAll();
    res.status(200).json(populations);
  } catch (error) {
    console.error("Error getting Population:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const createPopulation = async (req, res) => {
  try {
    const { 
      year, 
      population_rurale, 
      population_habitantMoins3km,
      population_habitantEntre3km6km,
      population_habitantEntre6km10km,
      population_habitantPlus10km,
      population_cible,
      distanceMoyenneRouteProche,
      enfant_id,
      enfant_naissancesAttendues,
      enfant_moins1ans,
      enfant_moins5ans,
      femme_id,
      femme_far,
      femme_fmar,
      femme_femmeEnceinte,
      csr_id,
      createdAt,
      updatedAt,} = req.body;
    const newPopulation = await Population.create({
      year, 
      population_rurale, 
      population_habitantMoins3km,
      population_habitantEntre3km6km,
      population_habitantEntre6km10km,
      population_habitantPlus10km,
      population_cible,
      distanceMoyenneRouteProche,
      enfant_id,
      enfant_naissancesAttendues,
      enfant_moins1ans,
      enfant_moins5ans,
      femme_id,
      femme_far,
      femme_fmar,
      femme_femmeEnceinte,
      csr_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newPopulation);
  } catch (error) {
    console.error("Failed to create Population:", error);
    res.status(500).json({ error: "Failed to create Population" });
  }
};

const getlastRecord= async (req, res) => {
  try {
    const lastInsertedRecord = await Population.findOne({
      order: [['population_id', 'DESC']],
    });
    
    if (lastInsertedRecord) {
      res.json(lastInsertedRecord);
    } else {
      res.status(404).json({ message: 'No records found' });
    }
  } catch (error) {
    console.error("Error getting last Programme ID:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const getPopulationById = async (req, res) => {
  try {
    const { population_id } = req.params;
    const population = await Population.findByPk(population_id);

    if (!population) {
      res.status(404).json({ error: "Population not found" });
    } else {
      res.status(200).json(population);
    }
  } catch (error) {
    console.error("Error getting Population:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updatePopulation = async (req, res) => {
  try {
    const { population_id } = req.params;
    const { 
      year, 
      population_rurale, 
      population_habitantMoins3km,
      population_habitantEntre3km6km,
      population_habitantEntre6km10km,
      population_habitantPlus10km,
      population_cible,
      distanceMoyenneRouteProche,
      enfant_id,
      enfant_naissancesAttendues,
      enfant_moins1ans,
      enfant_moins5ans,
      femme_id,
      femme_far,
      femme_fmar,
      femme_femmeEnceinte,
      csr_id,
      createdAt,
      updatedAt,
    } = req.body;

    const population = await Population.findByPk(population_id);

    if (!population) {
      res.status(404).json({ error: "Population not found" });
    } else {
      population.year = year || population.year;
      population.population_rurale = population_rurale || population.population_rurale;
      population.population_habitantMoins3km = population_habitantMoins3km || population.population_habitantMoins3km;
      population.population_habitantEntre3km6km = population_habitantEntre3km6km || population.population_habitantEntre3km6km;
      population.population_habitantEntre6km10km = population_habitantEntre6km10km || population.population_habitantEntre6km10km;
      population.population_habitantPlus10km = population_habitantPlus10km || population.population_habitantPlus10km;
      population.population_cible = population_cible || population.population_cible;
      population.distanceMoyenneRouteProche = distanceMoyenneRouteProche || population.distanceMoyenneRouteProche;
      population.enfant_id = enfant_id || population.enfant_id;
      population.enfant_naissancesAttendues = enfant_naissancesAttendues || population.enfant_naissancesAttendues;
      population.enfant_moins1ans = enfant_moins1ans || population.enfant_moins1ans;
      population.enfant_moins5ans = enfant_moins5ans || population.enfant_moins5ans;
      population.femme_id = femme_id || population.femme_id;
      population.femme_far = femme_far || population.femme_far;
      population.femme_fmar = femme_fmar || population.femme_fmar;
      population.femme_femmeEnceinte = femme_femmeEnceinte || population.femme_femmeEnceinte;
      population.csr_id = csr_id || population.csr_id;
      population.createdAt = createdAt || population.createdAt;
      population.updatedAt = updatedAt || population.updatedAt;

      await population.save();

      res.status(200).json(population);
    }
  } catch (error) {
    console.error("Failed to modify Population:", error);
    res.status(500).json({ error: "Failed to modify Population" });
  }
};

const deletePopulation = async (req, res) => {
  try {
    const { population_id } = req.params;

    const deletePopulation = await Population.destroy({ where: { population_id } });

    if (deletePopulation === 0) {
      res.status(404).json({ error: "Population not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete Population:", error);
    res.status(500).json({ error: "Failed to delete Population" });
  }
};

module.exports = {
  createPopulation,
  getAllPopulations,
  getPopulationById,
  updatePopulation,
  deletePopulation,
  getlastRecord
};
