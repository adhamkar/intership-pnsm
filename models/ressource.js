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

const Ressource = sequelize.define(
  "ressource",
  {
    ressource_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    vehicule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vehicule_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicule_age: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    budget_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    budget_besoinCarburant: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    budget_KmsParcourus: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    besoinUsm: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    observation: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    csr_id: {
      type: DataTypes.INTEGER,
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
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = { Ressource, sequelize };

Ressource.sync({
  alter: true,
})
  .then(() => {
    console.log("model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize and model:", error);
  });
