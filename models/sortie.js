
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("test_Db", "adhaam", "1234", {
  dialect: "mssql",
  host: "ADHAM",
  dialectOptions: {
    options: {
      encrypt: false,
      trustServerCertificate: true,
    },
  },
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const Sortie = sequelize.define(
  "sortie",
  {
    Sortie_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    submit: {
      type: DataTypes.BOOLEAN,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    csr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    trimestre: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: true,
    },
    pdrVisite_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    populationCible_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ressourceHumainMobil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    santeMaternelle_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    santeInfantile_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    planificationFamiliale_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    santeScolaire_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    consultationMedicale_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    detectionPrecCancer_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    maladiePiste_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    autreActivite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = { Sortie, sequelize };

Sortie.sync({ 
  alter: true 
})
  .then(() => {
    console.log("Table and model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize table and model:", error);
  });
