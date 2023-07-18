
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

const SanteScolaire = sequelize.define(
  "SanteScolaire",
  {
    SanteScolaire_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    etablissementVisite: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eleveExamine_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    eleveExamine_cible: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    eleveExamine_realisation: {
      type: DataTypes.SMALLINT,
      allowNull: false
    },
    lutteContreDeficienceVisuelle_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lutteContreDeficienceVisuelle_echelleMetrique_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lutteContreDeficienceVisuelle_echelleMetrique_cible: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lutteContreDeficienceVisuelle_echelleMetrique_realisation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lutteContreDeficienceVisuelle_refractionAutomatique_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    lutteContreDeficienceVisuelle_refractionAutomatique_cible: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lutteContreDeficienceVisuelle_refractionAutomatique_realisation: {
      type: DataTypes.STRING,
      allowNull: false
    },
    csr_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },

    trimestre: {
      type: DataTypes.STRING,
      allowNull: false
    },
    sortie_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: true,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = { SanteScolaire, sequelize };

SanteScolaire.sync({ 
  alter: true 
})
  .then(() => {
    console.log("Table and model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize table and model:", error);
  });
