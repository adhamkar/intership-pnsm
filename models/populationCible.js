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

const PopulationCible = sequelize.define(
  "PopulationCible",
  {
    PopulationCible_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    populationCible: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    fmar: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    enfant_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    enfant_naissancesAttendues: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    enfant_moins1ans: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    enfant_moins5ans: {
      type: DataTypes.SMALLINT,
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
    createdAt: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = { PopulationCible, sequelize };

PopulationCible.sync({
  alter: true,
})
  .then(() => {
    console.log(" model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize model:", error);
  });
