
const { Province } = require("../models/province");
//const sequelize=require('sequelize');

const getAllProvinces = async (req, res) => {
  try {
    
    const provinces = await Province.findAll();
    res.status(200).json(provinces);
  } catch (error) {
    console.error("Error getting Province:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};


const createProvince = async (req, res) => {
  try {
    const { region_nom, province_nom, codeRegion,codeProvince,email, createdAt, updatedAt } = req.body;
    const newProvince = await Province.create({
      region_nom,
      province_nom,
      codeRegion,
      codeProvince,
      email,
      createdAt,
      updatedAt,
    });
    res.status(201).json(newProvince);
  } catch (error) {
    console.error("Failed to create Province:", error);
    res.status(500).json({ error: "Failed to create Province" });
  }
};

const getProvinceById = async (req, res) => {
  try {
    const { province_id } = req.params;
    const province = await Province.findByPk(province_id);

    if (!province) {
      res.status(404).json({ error: "province not found" });
    } else {
      res.status(200).json(province);
    }
  } catch (error) {
    console.error("Error getting province:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const updateProvince = async (req, res) => {
  try {
    const { province_id } = req.params;
    const { region_nom, province_nom, codeRegion,codeProvince,email, createdAt, updatedAt } = req.body;

    const province = await Province.findByPk(province_id);

    if (!province) {
      res.status(404).json({ error: "province not found" });
    } else {
      province.region_nom = region_nom || province.region_nom;
      province.province_nom = province_nom || province.province_nom;
      province.codeRegion = codeRegion || province.codeRegion;
      province.codeProvince = codeProvince || province.codeProvince;
      province.email = email || province.email;
      province.createdAt = createdAt || province.createdAt;
      province.updatedAt = updatedAt || province.updatedAt;

      await province.save();

      res.status(200).json(province);
    }
  } catch (error) {
    console.error("Failed to modify province:", error);
    res.status(500).json({ error: "Failed to modify province" });
  }
};

const deleteProvince = async (req, res) => {
  try {
    const { province_id } = req.params;

    const deleteProvince = await Province.destroy({ where: { province_id } });

    if (deleteProvince === 0) {
      res.status(404).json({ error: "Province not found" });
    } else {
      res.status(204).send();
    }
  } catch (error) {
    console.error("Failed to delete Province:", error);
    res.status(500).json({ error: "Failed to delete Province" });
  }
};

module.exports = {
  createProvince,
  getAllProvinces,
  getProvinceById,
  updateProvince,
  deleteProvince,
};
