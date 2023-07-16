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

const Pdr = sequelize.define(
  "pdr",
  {
    pdr_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    localite: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    pdr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    csr: {
      type: DataTypes.STRING,
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
module.exports = { Pdr, sequelize };

Pdr.sync({
  alter: true,
})
  .then(() => {
    console.log(" model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize model:", error);
  });
