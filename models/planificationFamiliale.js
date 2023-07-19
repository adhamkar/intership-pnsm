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

const PlanificationFamiliale = sequelize.define(
  "planificationFamiliale",
  {
    PlanificationFamiliale_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    pilule_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    pilule_na: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    pilule_aa: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    injectable_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    injectable_na: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    injectable_aa: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    diu_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    diu_na: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    diu_aa: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    condom_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    condom_na: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    condom_aa: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reference_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    reference_diu: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    reference_it: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    csr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    sortie_id: {
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
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = { PlanificationFamiliale, sequelize };

PlanificationFamiliale.sync({
  alter: true,
})
  .then(() => {
    console.log("Table and model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize table and model:", error);
  });
