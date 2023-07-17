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

const Csr = sequelize.define(
  "csr",
  {
    csr_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    region: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    province: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cs: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    commune: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    csr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    codeRegion: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    codeProvince: {
      type: DataTypes.TINYINT,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
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
module.exports = { Csr, sequelize };

Csr.sync({
  alter: true,
})
  .then(() => {
    console.log(" model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize model:", error);
  });
