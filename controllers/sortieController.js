const { Sortie } = require("../models/sortie");
//const sequelize=require('sequelize');

const getAllSorties = async (req, res) => {
  try {
    const Sorties = await Sortie.findAll();
    res.status(200).json(Sorties);
  } catch (error) {
    console.error("Error getting Sorties:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createSortie = async (req, res) => {
  try {
    const { 
      year,
      submit,
      csr_id,
      trimestre,
      pdrVisite_id,
      populationCible_id,
      ressourceHumainMobil_id,
      santeMaternelle_id,
      santeInfantile_id,
      planificationFamiliale_id,
      santeScolaire_id,
      consultationMedicale_id,
      detectionPrecCancer_id,
      maladiePiste_id,
      autreActivite, 
      createdAt,
      updatedAt } = req.body;
    const newSortie = await Sortie.create({
      year,
      submit,
      csr_id,
      trimestre,
      pdrVisite_id,
      populationCible_id,
      ressourceHumainMobil_id,
      santeMaternelle_id,
      santeInfantile_id,
      planificationFamiliale_id,
      santeScolaire_id,
      consultationMedicale_id,
      detectionPrecCancer_id,
      maladiePiste_id,
      autreActivite,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newSortie);
  } catch (error) {
    console.error("Failed to create Sortie:", error);
    res.status(500).json({ error: "Failed to create Sortie" });
  }
};

const getSortieById = async (req, res) => {
  try {
    const { sortie_id } = req.params;
    const sortie = await Sortie.findByPk(sortie_id);

    if (!sortie) {
      res.status(404).json({ error: "Sortie not found" });
    } else {
      res.status(200).json(sortie);
    }
  } catch (error) {
    console.error("Error getting Sortie:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateSortie = async (req, res) => {
  try {
    const { sortie_id } = req.params;
    const { 
      year,
      submit,
      csr_id,
      trimestre,
      pdrVisite_id,
      populationCible_id,
      ressourceHumainMobil_id,
      santeMaternelle_id,
      santeInfantile_id,
      planificationFamiliale_id,
      santeScolaire_id,
      consultationMedicale_id,
      detectionPrecCancer_id,
      maladiePiste_id,
      autreActivite, 
      createdAt,
      updatedAt
     } = req.body;

    const r = await Sortie.findByPk(sortie_id);

    if (!r) {
      res.status(404).json({ error: "Sortie not found" });
    } else {
      r.year = year || r.year;
      r.submit = submit || r.submit;
      r.csr_id = csr_id || r.csr_id;
      r.trimestre = trimestre || r.trimestre;
      r.pdrVisite_id = pdrVisite_id || r.pdrVisite_id;
      r.populationCible_id = populationCible_id || r.populationCible_id;
      r.ressourceHumainMobil_id = ressourceHumainMobil_id || r.ressourceHumainMobil_id;
      r.santeMaternelle_id = santeMaternelle_id || r.santeMaternelle_id;
      r.santeInfantile_id = santeInfantile_id || r.santeInfantile_id;
      r.planificationFamiliale_id = planificationFamiliale_id || r.planificationFamiliale_id;
      r.santeScolaire_id = santeScolaire_id || r.santeScolaire_id;
      r.consultationMedicale_id = consultationMedicale_id || r.consultationMedicale_id;
      r.detectionPrecCancer_id = detectionPrecCancer_id || r.detectionPrecCancer_id;
      r.maladiePiste_id = maladiePiste_id || r.maladiePiste_id;
      r.autreActivite = autreActivite || r.autreActivite;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify Sortie:", error);
    res.status(500).json({ error: "Failed to modify Sortie" });
  }
};

const deleteSortie = async (req, res) => {
  try {
    const { sortie_id } = req.params;

    const deleteSortie = await Sortie.destroy({ where: { sortie_id } });

    if (deleteSortie === 0) {
      res.status(404).json({ error: "Sortie not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete Sortie:", error);
    res.status(500).json({ error: "Failed to delete Sortie" });
  }
};

module.exports = {
  createSortie,
  getAllSorties,
  getSortieById,
  updateSortie,
  deleteSortie,
};
