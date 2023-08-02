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

const Programme = sequelize.define(
  "programme",
  {
    programme_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    localite: {
      type: DataTypes.STRING(255),
      allowNull: false,
      validate:{
        isIn:[['region1','region2','autre']],
      },
    },
    pdr: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    distance: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    accessibility: {
      type: DataTypes.STRING,
      allowNull: false,
      validate:{
        isIn:[['car','automobile','camion','autre']],
      },
    },
    t1: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    t2: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    t3: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    t4: {
      type: DataTypes.TINYINT,
      allowNull: false,
      defaultValue: 0,
    },
    csr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATEONLY,
      defaultValue: Sequelize.NOW,
      allowNull: true,
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
module.exports = { Programme, sequelize };

Programme.sync({
  alter: true,
})
  .then(() => {
    console.log(" model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize model:", error);
  });
