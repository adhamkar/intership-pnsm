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

const Rapport = sequelize.define(
  "Rapport",
  {
    Rapport_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    csr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    trimestre: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    sortie_id: {
      type: DataTypes.INTEGER,
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
module.exports = { Rapport, sequelize };

Rapport.sync({
  alter: true,
})
  .then(() => {
    console.log("Table and model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize table and model:", error);
  });
