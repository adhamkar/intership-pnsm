const { SanteInfantil } = require("../models/santeInfantil");
//const sequelize=require('sequelize');

const getAllSanteInfantils = async (req, res) => {
  try {
    const SanteInfantils = await SanteInfantil.findAll();
    res.status(200).json(SanteInfantils);
  } catch (error) {
    console.error("Error getting SanteInfantils:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const createSanteInfantil = async (req, res) => {
  try {
    const {
      year,
      enfantPrisesCharge,
      vaccination_id,
      vaccination_pentavalent,
      vaccination_rr,
      vaccination_bcg,
      vitamineA,
      vitamineB,
      enfantsAvecInsuffisancePonderale,
      enfantsAvecRetardCroissance,
      diarrhe,
      ira,
      reference,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    } = req.body;
    const newSanteInfantil = await SanteInfantil.create({
      year,
      enfantPrisesCharge,
      vaccination_id,
      vaccination_pentavalent,
      vaccination_rr,
      vaccination_bcg,
      vitamineA,
      vitamineB,
      enfantsAvecInsuffisancePonderale,
      enfantsAvecRetardCroissance,
      diarrhe,
      ira,
      reference,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newSanteInfantil);
  } catch (error) {
    console.error("Failed to create SanteInfantil:", error);
    res.status(500).json({ error: "Failed to create SanteInfantil" });
  }
};

const getSanteInfantilById = async (req, res) => {
  try {
    const { santeInfantil_id } = req.params;
    const santeInfantil = await SanteInfantil.findByPk(santeInfantil_id);

    if (!santeInfantil) {
      res.status(404).json({ error: "SanteInfantil not found" });
    } else {
      res.status(200).json(santeInfantil);
    }
  } catch (error) {
    console.error("Error getting SanteInfantil:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateSanteInfantil = async (req, res) => {
  try {
    const { santeInfantil_id } = req.params;
    const {
      year,
      enfantPrisesCharge,
      vaccination_id,
      vaccination_pentavalent,
      vaccination_rr,
      vaccination_bcg,
      vitamineA,
      vitamineB,
      enfantsAvecInsuffisancePonderale,
      enfantsAvecRetardCroissance,
      diarrhe,
      ira,
      reference,
      csr_id,
      trimestre,
      sortie_id,
      createdAt,
      updatedAt,
    } = req.body;

    const r = await SanteInfantil.findByPk(santeInfantil_id);

    if (!r) {
      res.status(404).json({ error: "SanteInfantil not found" });
    } else {
      r.year = year || r.year;
      r.enfantPrisesCharge = enfantPrisesCharge || r.enfantPrisesCharge;
      r.vaccination_id = vaccination_id || r.vaccination_id;
      r.vaccination_pentavalent =
        vaccination_pentavalent || r.vaccination_pentavalent;
      r.vaccination_rr = vaccination_rr || r.vaccination_rr;
      r.vaccination_bcg = vaccination_bcg || r.vaccination_bcg;
      r.vitamineA = vitamineA || r.vitamineA;
      r.vitamineB = vitamineB || r.vitamineB;
      r.enfantsAvecInsuffisancePonderale =
        enfantsAvecInsuffisancePonderale || r.enfantsAvecInsuffisancePonderale;
      r.enfantsAvecRetardCroissance =
        enfantsAvecRetardCroissance || r.enfantsAvecRetardCroissance;
      r.diarrhe = diarrhe || r.diarrhe;
      r.reference = reference || r.reference;
      r.ira = ira || r.ira;
      r.csr_id = csr_id || r.csr_id;
      r.trimestre = trimestre || r.trimestre;
      r.sortie_id = sortie_id || r.sortie_id;
      r.createdAt = createdAt || r.createdAt;
      r.updatedAt = updatedAt || r.updatedAt;

      await r.save();

      res.status(200).json(r);
    }
  } catch (error) {
    console.error("Failed to modify SanteInfantil:", error);
    res.status(500).json({ error: "Failed to modify SanteInfantil" });
  }
};

const deleteSanteInfantil = async (req, res) => {
  try {
    const { santeInfantil_id } = req.params;

    const deleteSanteInfantil = await SanteInfantil.destroy({
      where: { santeInfantil_id },
    });

    if (deleteSanteInfantil === 0) {
      res.status(404).json({ error: "SanteInfantil not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete SanteInfantil:", error);
    res.status(500).json({ error: "Failed to delete SanteInfantil" });
  }
};

module.exports = {
  createSanteInfantil,
  getAllSanteInfantils,
  getSanteInfantilById,
  updateSanteInfantil,
  deleteSanteInfantil,
};
