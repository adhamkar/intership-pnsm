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

const AutreActivite = sequelize.define(
  "autreActivite",
  {
    AutreActivite_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
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
    ignore: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ativity_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    activity_typeBeneficier: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    activity_Beneficier: {
      type: DataTypes.SMALLINT,
      allowNull: false,
    },
    activity_observation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    year: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
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
module.exports = { AutreActivite, sequelize };

AutreActivite.sync({
  alter: true,
})
  .then(() => {
    console.log(" model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize model:", error);
  });
