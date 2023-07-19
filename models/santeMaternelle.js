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

const SanteMaternelle = sequelize.define(
  "SanteMaternelle",
  {
    SanteMaternelle_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    cpn_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cpn_nouvellInscrit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cpn_nouvellInscrit_t: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    cpn_ancienlInscrit_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cpn_ancienInscrit_t: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    auteConsultation: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    garDepiste: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    femmeExaminePostNatal: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    vat: {
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
    femmePriseCharge: {
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
module.exports = { SanteMaternelle, sequelize };

SanteMaternelle.sync({
  alter: true,
})
  .then(() => {
    console.log("nadi");
  })
  .catch((error) => {
    console.log("Failed to synchronize table and model:", error);
  });
