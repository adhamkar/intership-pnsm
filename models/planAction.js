
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

const PlanAction = sequelize.define(
  "planAction",
  {
    planAction_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    csr_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      
    },
    year: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    programme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    submit:{
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    ressource_id:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ressourcesHumain_id:{
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
      allowNull: true,
    },
  },
  {
    // Other model options go here
    freezeTableName: true,
    timestamps: false,
  }
);
module.exports = { PlanAction, sequelize };

PlanAction.sync({ 
  alter: true 
})
  .then(() => {
    console.log("model synchronized successfully");
  })
  .catch((error) => {
    console.log("Failed to synchronize model:", error);
  });
