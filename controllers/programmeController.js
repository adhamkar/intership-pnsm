
const { Programme } = require("../models/programme");
const sequelize=require('sequelize');

const getAllProgrammes = async (req, res) => {
  try {
    
    const Programmes = await Programme.findAll();
    res.status(200).json(Programmes);
  } catch (error) {
    console.error("Error getting Programme:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createProgramme = async (req, res) => {
  try {
    const { 
      year,
      localite,
      pdr,
      distance,
      accessibility,
      t1,
      t2,
      t3,
      t4,
      csr_id,
      createdAt,
      updatedAt } = req.body;
    const newProgramme = await Programme.create({
      year,
      localite,
      pdr,
      distance,
      accessibility,
      t1,
      t2,
      t3,
      t4,
      csr_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(
      newProgramme,
      );
  } catch (error) {
    console.error("Failed to create Programme:", error);
    res.status(500).json({ error: "Failed to create Programme" });
  }
};

const getProgrammeById = async (req, res) => {
  try {
    const { programme_id } = req.params;
    const programme = await Programme.findByPk(programme_id);

    if (!programme) {
      res.status(404).json({ error: "Programme not found" });
    } else {
      res.status(200).json(programme);
    }
  } catch (error) {
    console.error("Error getting Programme:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const getlastprogrammeid = async (req, res) => {
  try {
    const lastInsertedRecord = await Programme.findOne({
      order: [['programme_id', 'DESC']],
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




const updateProgramme = async (req, res) => {
  try {
    const { programme_id } = req.params;
    const { 
      year,
      localite,
      pdr,
      distance,
      accessibility,
      t1,
      t2,
      t3,
      t4,
      csr_id,
      createdAt,
      updatedAt } = req.body;

    const programme = await Programme.findByPk(programme_id);

    if (!programme) {
      res.status(404).json({ error: "Programme not found" });
    } else {
      programme.year = year || programme.year;
      programme.localite = localite || programme.localite;
      programme.pdr = pdr || programme.pdr;
      programme.distance = distance || programme.distance;
      programme.accessibility = accessibility || programme.accessibility;
      programme.t1 = t1 || programme.t1;
      programme.t3 = t3 || programme.t3;
      programme.t2 = t2 || programme.t2;
      programme.t4 = t4 || programme.t4;
      programme.csr_id = csr_id || programme.csr_id;
      programme.createdAt = createdAt || programme.createdAt;
      programme.updatedAt = updatedAt || programme.updatedAt;

      await programme.save();

      res.status(200).json(programme);
    }
  } catch (error) {
    console.error("Failed to modify Programme:", error);
    res.status(500).json({ error: "Failed to modify Programme" });
  }
};

const deleteProgramme = async (req, res) => {
  try {
    const { programme_id } = req.params;

    const deleteProgramme = await Programme.destroy({ where: { programme_id } });

    if (deleteProgramme === 0) {
      res.status(404).json({ error: "Programme not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete Programme:", error);
    res.status(500).json({ error: "Failed to delete Programme" });
  }
};

module.exports = {
  createProgramme,
  getAllProgrammes,
  getProgrammeById,
  updateProgramme,
  deleteProgramme,
  getlastprogrammeid,
};
