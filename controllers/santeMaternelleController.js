const { SanteMaternelle } = require("../models/santeMaternelle");
//const sequelize=require('sequelize');

const getAllSanteMaternelles = async (req, res) => {
  try {
    const SanteMaternelles = await SanteMaternelle.findAll();
    res.status(200).json(SanteMaternelles);
  } catch (error) {
    console.error("Error getting SanteMaternelles:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createSanteMaternelle = async (req, res) => {
  try {
    const {
      year,
      cpn_id,
      cpn_nouvellInscrit_id,
      cpn_nouvellInscrit_t,
      cpn_ancienlInscrit_id,
      cpn_ancienInscrit_t,
      auteConsultation,
      garDepiste,
      femmeExaminePostNatal,
      vat,
      reference,
      femmePriseCharge,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    } = req.body;
    const newSanteMaternelle = await SanteMaternelle.create({
      year,
      cpn_id,
      cpn_nouvellInscrit_id,
      cpn_nouvellInscrit_t,
      cpn_ancienlInscrit_id,
      cpn_ancienInscrit_t,
      auteConsultation,
      garDepiste,
      femmeExaminePostNatal,
      vat,
      reference,
      femmePriseCharge,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newSanteMaternelle);
  } catch (error) {
    console.error("Failed to create SanteMaternelle:", error);
    res.status(500).json({ error: "Failed to create SanteMaternelle" });
  }
};

const getSanteMaternelleById = async (req, res) => {
  try {
    const { santeMaternelle_id } = req.params;
    const santeMaternelle = await SanteMaternelle.findByPk(santeMaternelle_id);

    if (!santeMaternelle) {
      res.status(404).json({ error: "SanteMaternelle not found" });
    } else {
      res.status(200).json(santeMaternelle);
    }
  } catch (error) {
    console.error("Error getting SanteMaternelle:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateSanteMaternelle = async (req, res) => {
  try {
    const { santeMaternelle_id } = req.params;
    const {
      year,
      cpn_id,
      cpn_nouvellInscrit_id,
      cpn_nouvellInscrit_t,
      cpn_ancienlInscrit_id,
      cpn_ancienInscrit_t,
      auteConsultation,
      garDepiste,
      femmeExaminePostNatal,
      vat,
      reference,
      femmePriseCharge,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    } = req.body;

    const r = await SanteMaternelle.findByPk(santeMaternelle_id);

    if (!r) {
      res.status(404).json({ error: "SanteMaternelle not found" });
    } else {
      r.year = year || r.year;
      r.cpn_id = cpn_id || r.cpn_id;
      r.cpn_nouvellInscrit_id =
        cpn_nouvellInscrit_id || r.cpn_nouvellInscrit_id;
      r.cpn_nouvellInscrit_t = cpn_nouvellInscrit_t || r.cpn_nouvellInscrit_t;
      r.cpn_ancienlInscrit_id =
        cpn_ancienlInscrit_id || r.cpn_ancienlInscrit_id;
      r.cpn_ancienInscrit_t = cpn_ancienInscrit_t || r.cpn_ancienInscrit_t;
      r.auteConsultation = auteConsultation || r.auteConsultation;
      r.garDepiste = garDepiste || r.garDepiste;
      r.femmeExaminePostNatal =femmeExaminePostNatal || r.femmeExaminePostNatal;
      r.vat = vat || r.vat;
      r.reference = reference || r.reference;
      r.femmePriseCharge = femmePriseCharge || r.femmePriseCharge;
      r.csr_id = csr_id || r.csr_id;
      r.trimestre = trimestre || r.trimestre;
      r.sortie_id = sortie_id || r.sortie_id;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify SanteMaternelle:", error);
    res.status(500).json({ error: "Failed to modify SanteMaternelle" });
  }
};

const deleteSanteMaternelle = async (req, res) => {
  try {
    const { santeMaternelle_id } = req.params;

    const deleteSanteMaternelle = await SanteMaternelle.destroy({
      where: { santeMaternelle_id },
    });

    if (deleteSanteMaternelle === 0) {
      res.status(404).json({ error: "SanteMaternelle not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete SanteMaternelle:", error);
    res.status(500).json({ error: "Failed to delete SanteMaternelle" });
  }
};

module.exports = {
  createSanteMaternelle,
  getAllSanteMaternelles,
  getSanteMaternelleById,
  updateSanteMaternelle,
  deleteSanteMaternelle,
};
