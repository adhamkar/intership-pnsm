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

const SanteInfantil = sequelize.define(
  "santeInfantil",
  {
    santeInfantil_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    vaccination_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    vaccination_pentavalent: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    vaccination_rr: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    vaccination_bcg: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    vitamineA: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    vitamineB: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    enfantsAvecInsuffisancePonderale: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    enfantsAvecRetardCroissance: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    diarrhe: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    ira: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    reference: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    trimestre: {
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
    enfantPrisesCharge: {
      type: DataTypes.SMALLINT,
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
module.exports = { SanteInfantil, sequelize };

SanteInfantil.sync({
  alter: true,
})
  .then(() => {
    console.log("nadi");
  })
  .catch((error) => {
    console.log("Failed to synchronize table and model:", error);
  });
