const { SanteScolaire } = require("../models/santeScolaire");
//const sequelize=require('sequelize');

const getAllSanteScolaires = async (req, res) => {
  try {
    const SanteScolaires = await SanteScolaire.findAll();
    res.status(200).json(SanteScolaires);
  } catch (error) {
    console.error("Error getting SanteScolaires:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createSanteScolaire = async (req, res) => {
  try {
    const {
      year,
      etablissementVisite,
      eleveExamine_id,
      eleveExamine_cible,
      eleveExamine_realisation,
      lutteContreDeficienceVisuelle_id,
      lutteContreDeficienceVisuelle_echelleMetrique_id,
      lutteContreDeficienceVisuelle_echelleMetrique_cible,
      lutteContreDeficienceVisuelle_echelleMetrique_realisation,
      lutteContreDeficienceVisuelle_refractionAutomatique_id,
      lutteContreDeficienceVisuelle_refractionAutomatique_cible,
      lutteContreDeficienceVisuelle_refractionAutomatique_realisation,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    } = req.body;
    const newSanteScolaire = await SanteScolaire.create({
      year,
      etablissementVisite,
      eleveExamine_id,
      eleveExamine_cible,
      eleveExamine_realisation,
      lutteContreDeficienceVisuelle_id,
      lutteContreDeficienceVisuelle_echelleMetrique_id,
      lutteContreDeficienceVisuelle_echelleMetrique_cible,
      lutteContreDeficienceVisuelle_echelleMetrique_realisation,
      lutteContreDeficienceVisuelle_refractionAutomatique_id,
      lutteContreDeficienceVisuelle_refractionAutomatique_cible,
      lutteContreDeficienceVisuelle_refractionAutomatique_realisation,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newSanteScolaire);
  } catch (error) {
    console.error("Failed to create SanteScolaire:", error);
    res.status(500).json({ error: "Failed to create SanteScolaire" });
  }
};

const getSanteScolaireById = async (req, res) => {
  try {
    const { santeScolaire_id } = req.params;
    const santeScolaire = await SanteScolaire.findByPk(santeScolaire_id);

    if (!santeScolaire) {
      res.status(404).json({ error: "SanteScolaire not found" });
    } else {
      res.status(200).json(santeScolaire);
    }
  } catch (error) {
    console.error("Error getting SanteScolaire:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateSanteScolaire = async (req, res) => {
  try {
    const { santeScolaire_id } = req.params;
    const {
      year,
      etablissementVisite,
      eleveExamine_id,
      eleveExamine_cible,
      eleveExamine_realisation,
      lutteContreDeficienceVisuelle_id,
      lutteContreDeficienceVisuelle_echelleMetrique_id,
      lutteContreDeficienceVisuelle_echelleMetrique_cible,
      lutteContreDeficienceVisuelle_echelleMetrique_realisation,
      lutteContreDeficienceVisuelle_refractionAutomatique_id,
      lutteContreDeficienceVisuelle_refractionAutomatique_cible,
      lutteContreDeficienceVisuelle_refractionAutomatique_realisation,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    } = req.body;

    const r = await SanteScolaire.findByPk(santeScolaire_id);

    if (!r) {
      res.status(404).json({ error: "SanteScolaire not found" });
    } else {
      r.year = year || r.year;
      r.etablissementVisite = etablissementVisite || r.etablissementVisite;
      r.eleveExamine_id = eleveExamine_id || r.eleveExamine_id;
      r.eleveExamine_cible = eleveExamine_cible || r.eleveExamine_cible;
      r.eleveExamine_realisation =
        eleveExamine_realisation || r.eleveExamine_realisation;
      r.lutteContreDeficienceVisuelle_id =
        lutteContreDeficienceVisuelle_id || r.lutteContreDeficienceVisuelle_id;
      r.lutteContreDeficienceVisuelle_echelleMetrique_id =
        lutteContreDeficienceVisuelle_echelleMetrique_id ||
        r.lutteContreDeficienceVisuelle_echelleMetrique_id;
      r.lutteContreDeficienceVisuelle_echelleMetrique_cible =
        lutteContreDeficienceVisuelle_echelleMetrique_cible ||
        r.lutteContreDeficienceVisuelle_echelleMetrique_cible;
      r.lutteContreDeficienceVisuelle_echelleMetrique_realisation =
        lutteContreDeficienceVisuelle_echelleMetrique_realisation ||
        r.lutteContreDeficienceVisuelle_echelleMetrique_realisation;
      r.lutteContreDeficienceVisuelle_refractionAutomatique_id =
        lutteContreDeficienceVisuelle_refractionAutomatique_id ||
        r.lutteContreDeficienceVisuelle_refractionAutomatique_id;
      r.lutteContreDeficienceVisuelle_refractionAutomatique_cible =
        lutteContreDeficienceVisuelle_refractionAutomatique_cible ||
        r.lutteContreDeficienceVisuelle_refractionAutomatique_cible;
      r.lutteContreDeficienceVisuelle_refractionAutomatique_realisation =
        lutteContreDeficienceVisuelle_refractionAutomatique_realisation ||
        r.lutteContreDeficienceVisuelle_refractionAutomatique_realisation;
      r.csr_id = csr_id || r.csr_id;
      r.trimestre = trimestre || r.trimestre;
      r.sortie_id = sortie_id || r.sortie_id;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify SanteScolaire:", error);
    res.status(500).json({ error: "Failed to modify SanteScolaire" });
  }
};

const deleteSanteScolaire = async (req, res) => {
  try {
    const { santeScolaire_id } = req.params;

    const deleteSanteScolaire = await SanteScolaire.destroy({
      where: { santeScolaire_id },
    });

    if (deleteSanteScolaire === 0) {
      res.status(404).json({ error: "SanteScolaire not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete SanteScolaire:", error);
    res.status(500).json({ error: "Failed to delete SanteScolaire" });
  }
};

module.exports = {
  createSanteScolaire,
  getAllSanteScolaires,
  getSanteScolaireById,
  updateSanteScolaire,
  deleteSanteScolaire,
};
