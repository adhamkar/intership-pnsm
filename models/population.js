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

const Population = sequelize.define(
  "population",
  {
    population_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    population_rurale: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population_habitantMoins3km: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population_habitantEntre3km6km: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population_habitantEntre6km10km: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population_habitantPlus10km: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    population_cible: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    distanceMoyenneRouteProche: {
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
    femme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    femme_far: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    femme_fmar: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    femme_femmeEnceinte: {
      type: DataTypes.SMALLINT,
      allowNull: false,
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
      allowNull: false,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = { Population, sequelize };

Population.sync({
  alter: true,
})
  .then(() => {
    console.log(" model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize model:", error);
  });