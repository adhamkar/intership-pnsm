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

const DetectionPrecoceCancer = sequelize.define(
  "detectionPrecoceCancer",
  {
    detectionPrecoceCancer_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: false,
    },
    femmeExamine: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    femmeRefere: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    csr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    trimestre: {
      type: DataTypes.STRING,
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
module.exports = { DetectionPrecoceCancer, sequelize };

DetectionPrecoceCancer.sync({
  alter: true,
})
  .then(() => {
    console.log("Model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize Model:", error);
  });
