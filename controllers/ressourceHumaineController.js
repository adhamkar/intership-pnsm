const { RessourceHumaine } = require("../models/rh");
//const sequelize=require('sequelize');

const getAllRessourceHumaines = async (req, res) => {
  try {
    const RessourceHumaines = await RessourceHumaine.findAll();
    res.status(200).json(RessourceHumaines);
  } catch (error) {
    console.error("Error getting RessourceHumaines:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createRessourceHumaine = async (req, res) => {
  try {
    const {
      year,
      fixe_id,
      fixe_medecin,
      fixe_infermier,
      fixe_sageFemme,
      fixe_chauffeur,
      fixe_appuie,
      mobile_id,
      mobile_medecin,
      mobile_infermier,
      mobile_sageFemme,
      mobile_chauffeur,
      mobile_appuie,
      mobile_technicien,
      mobile_emOperationnelle,
      csr_id,
      createdAt,
      updatedAt,
      emOperationnelle,
      ressourcesHumaineMobilise_id,
      ressourcesHumaineMobilise_medecin,
      ressourcesHumaineMobilise_infermier,
      ressourcesHumaineMobilise_sageFemme,
      ressourcesHumaineMobilise_chauffeur,
      ressourcesHumaineMobilise_appuie,
      ressourcesHumaineMobilise_technicien,
      trimestre,
      sortie_id,
    } = req.body;

    const newRessourceHumaine = await RessourceHumaine.create({
      year,
      fixe_id,
      fixe_medecin,
      fixe_infermier,
      fixe_sageFemme,
      fixe_chauffeur,
      fixe_appuie,
      mobile_id,
      mobile_medecin,
      mobile_infermier,
      mobile_sageFemme,
      mobile_chauffeur,
      mobile_appuie,
      mobile_technicien,
      mobile_emOperationnelle,
      csr_id,
      createdAt,
      updatedAt,
      emOperationnelle,
      ressourcesHumaineMobilise_id,
      ressourcesHumaineMobilise_medecin,
      ressourcesHumaineMobilise_infermier,
      ressourcesHumaineMobilise_sageFemme,
      ressourcesHumaineMobilise_chauffeur,
      ressourcesHumaineMobilise_appuie,
      ressourcesHumaineMobilise_technicien,
      trimestre,
      sortie_id,
    });
    res.status(201).json(newRessourceHumaine);
  } catch (error) {
    console.error("Failed to create RessourceHumaine:", error);
    res.status(500).json({ error: "Failed to create RessourceHumaine" });
  }
};

const getRessourceHumaineById = async (req, res) => {
  try {
    const { ressourceHumaine_id } = req.params;
    const ressourceHumaine = await RessourceHumaine.findByPk(ressourceHumaine_id);

    if (!ressourceHumaine) {
      res.status(404).json({ error: "RessourceHumaine not found" });
    } else {
      res.status(200).json(ressourceHumaine);
    }
  } catch (error) {
    console.error("Error getting RessourceHumaine:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateRessourceHumaine = async (req, res) => {
  try {
    const { ressourceHumaine_id } = req.params;
    const {
      year,
      fixe_id,
      fixe_medecin,
      fixe_infermier,
      fixe_sageFemme,
      fixe_chauffeur,
      fixe_appuie,
      mobile_id,
      mobile_medecin,
      mobile_infermier,
      mobile_sageFemme,
      mobile_chauffeur,
      mobile_appuie,
      mobile_technicien,
      mobile_emOperationnelle,
      csr_id,
      createdAt,
      updatedAt,
      emOperationnelle,
      ressourcesHumaineMobilise_id,
      ressourcesHumaineMobilise_medecin,
      ressourcesHumaineMobilise_infermier,
      ressourcesHumaineMobilise_sageFemme,
      ressourcesHumaineMobilise_chauffeur,
      ressourcesHumaineMobilise_appuie,
      ressourcesHumaineMobilise_technicien,
      trimestre,
      sortie_id,
    } = req.body;

    const r = await RessourceHumaine.findByPk(ressourceHumaine_id);

    if (!r) {
      res.status(404).json({ error: "RessourceHumaine not found" });
    } else {
      r.year = year || r.year;
      r.fixe_id = fixe_id || r.fixe_id;
      r.fixe_medecin = fixe_medecin || r.fixe_medecin;
      r.fixe_infermier = fixe_infermier || r.fixe_infermier;
      r.fixe_sageFemme = fixe_sageFemme || r.fixe_sageFemme;
      r.fixe_chauffeur = fixe_chauffeur || r.fixe_chauffeur;
      r.fixe_appuie = fixe_appuie || r.fixe_appuie;
      r.mobile_id = mobile_id || r.mobile_id;
      r.mobile_medecin = mobile_medecin || r.mobile_medecin;
      r.mobile_infermier = mobile_infermier || r.mobile_infermier;
      r.mobile_sageFemme = mobile_sageFemme || r.mobile_sageFemme;
      r.mobile_chauffeur = mobile_chauffeur || r.mobile_chauffeur;
      r.mobile_appuie = mobile_appuie || r.mobile_appuie;
      r.mobile_technicien = mobile_technicien || r.mobile_technicien;
      r.mobile_emOperationnelle =
        mobile_emOperationnelle || r.mobile_emOperationnelle;
      r.emOperationnelle = emOperationnelle || r.emOperationnelle;
      r.ressourcesHumaineMobilise_id =
        ressourcesHumaineMobilise_id || r.ressourcesHumaineMobilise_id;
      r.ressourcesHumaineMobilise_medecin =
        ressourcesHumaineMobilise_medecin ||
        r.ressourcesHumaineMobilise_medecin;
      r.ressourcesHumaineMobilise_infermier =
        ressourcesHumaineMobilise_infermier ||
        r.ressourcesHumaineMobilise_infermier;
      r.ressourcesHumaineMobilise_sageFemme =
        ressourcesHumaineMobilise_sageFemme ||
        r.ressourcesHumaineMobilise_sageFemme;
      r.ressourcesHumaineMobilise_chauffeur =
        ressourcesHumaineMobilise_chauffeur ||
        r.ressourcesHumaineMobilise_chauffeur;
      r.ressourcesHumaineMobilise_appuie =
        ressourcesHumaineMobilise_appuie || r.ressourcesHumaineMobilise_appuie;
      r.ressourcesHumaineMobilise_technicien =
        ressourcesHumaineMobilise_technicien ||
        r.ressourcesHumaineMobilise_technicien;
      r.trimestre = trimestre || r.trimestre;
      r.sortie_id = sortie_id || r.sortie_id;
      r.csr_id = csr_id || r.csr_id;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify RessourceHumaine:", error);
    res.status(500).json({ error: "Failed to modify RessourceHumaine" });
  }
};

const deleteRessourceHumaine = async (req, res) => {
  try {
    const { ressourceHumaine_id } = req.params;

    const deleteRessourceHumaine = await RessourceHumaine.destroy({
      where: { ressourceHumaine_id },
    });

    if (deleteRessourceHumaine === 0) {
      res.status(404).json({ error: "RessourceHumaine not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete RessourceHumaine:", error);
    res.status(500).json({ error: "Failed to delete RessourceHumaine" });
  }
};

module.exports = {
  createRessourceHumaine,
  getAllRessourceHumaines,
  getRessourceHumaineById,
  updateRessourceHumaine,
  deleteRessourceHumaine,
};
