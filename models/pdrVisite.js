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

const PdrVisite = sequelize.define(
  "pdrVisite",
  {
    pdrVisite_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    realise: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    id_unique: {
      type: DataTypes.UUID,
      allowNull: false,
    },
    KmParcourus: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    observation: {
      type: DataTypes.STRING,
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
    sortie_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    budgetCarburantEmConsomme: {
      type: DataTypes.FLOAT,
      allowNull: false,
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
module.exports = { PdrVisite, sequelize };

PdrVisite.sync({
  alter: true,
})
  .then(() => {
    console.log(" model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize model:", error);
  });
